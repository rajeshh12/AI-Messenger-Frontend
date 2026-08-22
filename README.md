# 🤖 AI Messenger

<div align="center">

### A smarter way to chat with AI.

A modern AI-powered messaging application built with React.js,
designed to provide a clean, responsive and interactive conversational experience.

<br/>

![React](https://img.shields.io/badge/React.js-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-Integrated-6366F1?style=for-the-badge)
![Responsive](https://img.shields.io/badge/UI-Responsive-22C55E?style=for-the-badge)

</div>

---

## ✨ Overview

**AI Messenger** is a full-stack AI chat application with a modern messaging
interface.

The frontend is built using **React.js** and communicates with a backend REST
API to provide authentication, conversation management, AI-powered responses,
file uploads and account management.

The application is designed around a simple idea:

> **Ask questions. Explore ideas. Manage conversations. Interact with AI.**

The interface focuses on a clean dark-themed design, smooth interactions,
responsive layouts and an experience inspired by modern AI chat applications.

---

# 🖥️ Application Preview

## 🏠 Home Page

The landing page introduces the AI Messenger application and gives users
quick access to start chatting or log into an existing account.

<div align="center">

<img src="docs/screenshots/Home.png" width="900" alt="AI Messenger Home Page"/>

</div>

### Home Page Highlights

- Modern AI Messenger branding
- Clean dark-themed interface
- Responsive layout
- Animated / interactive visual elements
- Quick access to **Start Chatting**
- Login navigation
- Application feature highlights
- AI assistant preview section

---

# 🔐 Authentication

AI Messenger provides a dedicated authentication flow for users.

---

## 🔑 Login Page

Users can securely log into their AI Messenger account using their registered
email address and password.

<div align="center">

<img src="docs/screenshots/Login.png" width="700" alt="AI Messenger Login Page"/>

</div>

### Login Features

- Email-based authentication
- Password authentication
- Password visibility control
- Form validation
- Error handling
- Loading state during authentication
- Responsive login interface
- Navigation to registration

After successful authentication, the frontend stores the authentication token
and allows the user to access protected application features.

---

## 📝 Register Page

New users can create an AI Messenger account using their name, email and
password.

<div align="center">

<img src="docs/screenshots/Register.png" width="900" alt="AI Messenger Register Page"/>

</div>

### Registration Features

- User name input
- Email validation
- Password creation
- Password visibility control
- Password requirement guidance
- Form validation
- Loading state
- Error handling
- Login navigation

---

# 💬 AI Chat

The main part of AI Messenger is the conversational interface.

<div align="center">

<img src="docs/screenshots/Chat.png" width="1000" alt="AI Messenger Chat Page"/>

</div>

### Chat Features

- Create new conversations
- Send messages to AI
- Receive AI-generated responses
- Maintain conversation history
- Rename conversations
- Delete conversations
- Regenerate AI responses
- File upload support
- User authentication
- Responsive chat interface
- Loading indicators
- Error handling

The frontend communicates with the backend through REST APIs to send user
messages and retrieve AI-generated responses.

---

# 🧠 How AI Messenger Works

The application follows a simple full-stack communication flow.

```text
                    ┌──────────────────────┐
                    │      User Browser    │
                    │                      │
                    │     React Frontend   │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Node.js Backend   │
                    │      Express.js      │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
                 ▼             ▼             ▼
            MongoDB        Groq AI       File APIs
                 │             │             │
                 │             ▼             │
                 │        AI Response       │
                 │             │             │
                 └─────────────┼─────────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     React Frontend   │
                    │   Displays Response  │
                    └──────────────────────┘
