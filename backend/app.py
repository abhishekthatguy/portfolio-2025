from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Configure CORS to allow requests from your frontend
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client['portfolio_db']
messages = db['messages']

@app.route('/api/submit-form', methods=['POST', 'OPTIONS'])
def submit_form():
    # Handle preflight requests
    if request.method == 'OPTIONS':
        return '', 200
        
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
        result = messages.insert_one(message_doc)

        return jsonify({
            'success': True,
            'message': 'Message saved successfully',
            'id': str(result.inserted_id)
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001) 