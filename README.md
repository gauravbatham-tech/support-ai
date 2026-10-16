# SupportWave — AI Customer Support Platform

> Automate customer support with **AI-powered answers, business-specific knowledge, and an embeddable chat widget.**

SupportWave is an AI-powered customer support platform that enables businesses to configure chatbots using their business information, FAQs, and support policies.

The platform uses Google Gemini to generate context-aware answers and provides an embeddable JavaScript chat widget that businesses can integrate into their websites using a script tag.

## 🚀 Use Cases

- **Answer customer questions** using business-specific FAQs and policies.
- **Provide instant support** through an AI-powered chatbot.
- **Manage business information** through a centralized dashboard.
- **Integrate chat support** into external websites with minimal setup.
- **Redirect unanswered queries** to the business's support email.

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 AI Chatbot | Generates responses using Google Gemini API |
| 📚 Business Knowledge Base | Uses business information, FAQs, and policies |
| 🌐 Embeddable Widget | Integrates with external websites using a script tag |
| 🔌 REST API | Handles chatbot requests through Next.js API routes |
| 🔒 Authentication | Protects dashboard access using Scalekit |
| 🗄️ Database | Stores business configuration using MongoDB and Mongoose |
| 🔄 CORS Support | Enables requests from authorized external origins |
| 📱 Responsive Dashboard | Provides a responsive interface using Tailwind CSS |

## 🏗️ Architecture

```text
             ┌─────────────────────┐
             │   Business Owner    │
             │ Configure Chatbot   │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │   Next.js Dashboard │
             │   React + TypeScript│
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ MongoDB + Mongoose  │
             │ Business Knowledge  │
             └─────────────────────┘


             ┌─────────────────────┐
             │ Website Visitor     │
             │ Ask a Question      │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Embeddable JS Widget│
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Next.js REST API    │
             │ CORS + Validation   │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Google Gemini API   │
             │ Contextual Answer   │
             └──────────┬──────────┘
                        ↓
             ┌─────────────────────┐
             │ Answer or Email     │
             │ Support Fallback    │
             └─────────────────────┘
```

## 🛠️ Tech Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion

**Backend**
- Next.js App Router
- REST APIs
- CORS
- Node.js

**Database**
- MongoDB
- Mongoose

**AI**
- Google Gemini API (`gemini-2.5-flash`)
- Prompt Engineering
- Business-context-grounded responses

**Authentication**
- Scalekit
- Cookie-based Sessions

## 📁 Project Structure

The structure below is illustrative. Adjust it to match your actual repository.

```text
SupportWave/
│
├── app/                  # Next.js application and dashboard
├── components/           # Reusable UI components
├── lib/                  # Database and utility functions
├── models/               # Mongoose data models
├── public/
│   └── chatBot.js         # Embeddable chat widget (if located here)
├── app/api/              # REST API routes (if organized here)
├── package.json
├── .env.example
└── README.md
```

## ⚙️ Running Locally

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd SupportWave
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the variables required by your implementation.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
SCALEKIT_CLIENT_ID=your_scalekit_client_id
SCALEKIT_CLIENT_SECRET=your_scalekit_client_secret
SCALEKIT_ISSUER_URL=your_scalekit_issuer_url
```

Use the exact variable names expected by your code. Never commit real API keys, database credentials, or authentication secrets.

### 4. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🌐 Embedding the Chat Widget

SupportWave is designed to let businesses add the chatbot to external websites through a JavaScript script tag.

Example integration pattern:

```html
<script src="https://YOUR_DEPLOYED_DOMAIN/chatBot.js"></script>
```

Replace the example URL with the actual deployed widget URL. Include any required configuration or business identifier specified by your implementation.

## 🔐 Security

- Protect dashboard routes using server-side authentication and session validation.
- Store secrets in environment variables.
- Configure CORS to allow only intended origins.
- Validate incoming API requests and handle failures safely.
- Avoid exposing private business information or credentials to unauthorized users.

## 🎯 Problem Solved

Traditional customer support often requires businesses to answer repetitive questions about policies, products, and services manually.

SupportWave allows businesses to configure an AI chatbot using their own support information, helping visitors receive relevant answers quickly while providing an email-support fallback when the chatbot cannot answer.
