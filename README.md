# Abhishek Singh - Portfolio 2025

A modern, animated portfolio website built with Next.js 14, featuring a dynamic Hero section, interactive project showcases, and a fully functional contact form with email notifications.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

### Deployment to Vercel

```bash
# Automated deployment (recommended)
yarn deploy

# Quick deployment
yarn deploy:quick

# Local testing with Vercel
yarn deploy:local
```

## 📚 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Get deployed in 15 minutes
- **[Complete Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md)** - Full setup instructions
- **[Email Setup Guide](./backend/EMAIL_SETUP.md)** - Configure email notifications

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion
- **Backend**: Flask (Python) serverless functions on Vercel
- **Database**: MongoDB Atlas
- **Email**: Flask-Mail with Gmail SMTP
- **Deployment**: Vercel

## ✨ Features

- ⚡ Modern, animated UI with dual-tone headings
- 🎨 Snake ladder timeline for Experience and Projects
- 📧 Contact form with email notifications
- 🗄️ MongoDB integration for message storage
- 📱 Fully responsive design
- 🚀 Automatic deployments via Git integration
- ⚙️ Serverless backend functions

## 📦 Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── submit-form.py     # Contact form API
│   └── requirements.txt   # Python dependencies
├── src/
│   ├── app/               # Next.js app router
│   ├── components/        # React components
│   └── data/              # Config files
├── scripts/               # Deployment scripts
├── vercel.json            # Vercel configuration
└── package.json           # Node.js dependencies
```

## 🔧 Environment Variables

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for complete setup.

**Required for Vercel:**
- `MONGODB_URI` - MongoDB Atlas connection string
- `MAIL_USERNAME` - Gmail address
- `MAIL_PASSWORD` - Gmail App Password
- `RECIPIENT_EMAIL` - Where to send notifications

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 License

© 2025 Abhishek Singh. All rights reserved.
