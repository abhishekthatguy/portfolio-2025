# Email Configuration Guide

This backend automatically sends email notifications when someone submits the contact form.

## Setup Instructions

### 1. Gmail Setup (Recommended)

1. **Enable 2-Step Verification** on your Google account
2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form"
   - Copy the generated 16-character password

3. **Create `.env` file** in the `backend` directory with the following:

```env
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USE_SSL=False
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-16-digit-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### 2. Other Email Providers

For other email providers (Outlook, Yahoo, etc.), update the following in `.env`:

**Outlook/Hotmail:**
```env
MAIL_SERVER=smtp-mail.outlook.com
MAIL_PORT=587
MAIL_USE_TLS=True
```

**Yahoo:**
```env
MAIL_SERVER=smtp.mail.yahoo.com
MAIL_PORT=587
MAIL_USE_TLS=True
```

**Custom SMTP Server:**
```env
MAIL_SERVER=your-smtp-server.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
RECIPIENT_EMAIL=recipient@example.com
```

### 3. Environment Variables

- `MAIL_SERVER`: SMTP server address (default: smtp.gmail.com)
- `MAIL_PORT`: SMTP port (default: 587 for TLS)
- `MAIL_USE_TLS`: Use TLS encryption (True/False)
- `MAIL_USE_SSL`: Use SSL encryption (True/False)
- `MAIL_USERNAME`: Your email address
- `MAIL_PASSWORD`: Your email password or app password
- `RECIPIENT_EMAIL`: Where to send contact form notifications (defaults to MAIL_USERNAME)

### 4. Testing

After configuring, restart the Flask server. When someone submits the contact form:
1. The message is saved to MongoDB
2. An email notification is sent to `RECIPIENT_EMAIL`
3. If email fails, the error is logged but the form submission still succeeds

### 5. Security Note

- Never commit your `.env` file to version control
- Use App Passwords instead of your main account password
- The `.env` file should be in `.gitignore`

