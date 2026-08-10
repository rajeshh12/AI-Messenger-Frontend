
# ✦ AI Messenger

> A modern, full-stack AI messaging application built with React, Node.js, Express, and MongoDB.

AI Messenger is a responsive AI chat platform designed with a clean, modern interface and a focus on smooth conversations, user authentication, file uploads, conversation management, and an intuitive messaging experience.

---

## 🚀 Live Demo

🌐 **Frontend:**  
https://rajesh-ai-messenger.netlify.app

---

## ✨ Features

### 💬 AI Chat
- Real-time AI-powered conversations
- Clean and responsive chat interface
- New conversation creation
- Conversation history
- Automatic conversation titles
- Regenerate AI responses
- Copy AI responses
- Smooth loading states

### 🔐 Authentication
- User registration
- User login
- Secure authentication flow
- Logout functionality
- Persistent user session
- Protected application experience

### 📁 File Uploads
- Upload files directly inside conversations
- File preview support
- File attachment information displayed in messages
- Support for different file types

### 🗂️ Conversation Management
- Create new conversations
- View previous conversations
- Search conversations
- Select conversations
- Delete conversations
- Automatically generate conversation titles

### 👤 User Account
- User profile section
- Account information
- Settings panel
- Logout functionality
- Account management

### ⚙️ Admin Features
- Admin area
- Administrative controls
- Admin-specific functionality

### 🎨 Modern UI
- Dark-themed interface
- Responsive design
- Mobile-friendly sidebar
- Collapsible desktop sidebar
- Modern gradients
- Smooth hover effects
- Loading animations
- Responsive chat composer
- Markdown-rendered AI responses
- Code block formatting
- Copy code functionality

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- React Markdown
- Remark GFM
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- REST APIs
- Authentication
- File Upload Handling

### Database

- MongoDB

### Deployment

- Netlify — Frontend
- Render — Backend

### Development Tools

- Git
- GitHub
- VS Code
- npm

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    │  Browser / Mobile   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │  • Authentication   │
                    │  • Chat UI          │
                    │  • Conversations    │
                    │  • File Upload      │
                    │  • Settings         │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │                     │
                    │  • Auth APIs        │
                    │  • Chat APIs        │
                    │  • User APIs        │
                    │  • File APIs        │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
       ┌──────────────────┐       ┌──────────────────┐
       │     MongoDB      │       │      AI Service  │
       │                  │       │                  │
       │ Users            │       │ AI Responses     │
       │ Conversations    │       │                  │
       │ Messages         │       │                  │
       └──────────────────┘       └──────────────────┘
