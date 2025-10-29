from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from pymongo import MongoClient
from datetime import datetime
import os

app = Flask(__name__)

# Configure CORS for Vercel deployment
CORS(app, resources={
    r"/api/*": {
        "origins": ["*"],  # Allow all origins in production
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Email configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'False').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')
app.config['RECIPIENT_EMAIL'] = os.getenv('RECIPIENT_EMAIL', os.getenv('MAIL_USERNAME'))

mail = Mail(app)

# MongoDB connection with error handling
def get_db():
    try:
        mongodb_uri = os.getenv('MONGODB_URI')
        if not mongodb_uri:
            raise ValueError("MONGODB_URI environment variable is not set")
        client = MongoClient(mongodb_uri)
        db = client['portfolio_db']
        return db['messages']
    except Exception as e:
        print(f"MongoDB connection error: {str(e)}")
        return None

@app.route('/', methods=['POST', 'OPTIONS'])
def submit_form():
    # Handle preflight requests
    if request.method == 'OPTIONS':
        response = jsonify({})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response, 200
        
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        timestamp = datetime.now()

        # Create document
        message_doc = {
            'timestamp': timestamp,
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }

        # Insert into MongoDB
        messages = get_db()
        result = None
        if messages:
            result = messages.insert_one(message_doc)
        else:
            print("Warning: MongoDB not available, message not saved")

        # Send email notification
        try:
            recipient_email = app.config['RECIPIENT_EMAIL']
            if recipient_email and app.config['MAIL_USERNAME'] and app.config['MAIL_PASSWORD']:
                msg = Message(
                    subject=f'New Contact Form Submission: {subject}',
                    recipients=[recipient_email],
                    sender=app.config['MAIL_USERNAME']
                )
                msg.body = f"""
You have received a new message from your portfolio contact form.

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent on {timestamp.strftime('%Y-%m-%d %H:%M:%S')}
"""
                mail.send(msg)
        except Exception as email_error:
            # Log email error but don't fail the request
            print(f"Email sending failed: {str(email_error)}")

        response = jsonify({
            'success': True,
            'message': 'Message saved successfully',
            'id': str(result.inserted_id) if result else None
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Exception as e:
        response = jsonify({
            'success': False,
            'message': str(e)
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

# Export handler for Vercel
handler = app

