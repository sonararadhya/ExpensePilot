# 💰 ExpensePilot

ExpensePilot is a lightweight **Expense Tracking Web Applicationlication** crafted using **Node.js, Express, MongoDB, and EJS** that enables users to log and control daily expenses through a straightforward and secure interface.

---

## 📌 Overview

ExpensePilot is crafted as a learning-focused full-stack backend project demonstrating:

- Authentication handling
- MongoDB database integration
- Express routing
- Server-side presenting
- Form data processing

It delivers a minimal dashboard where users can log expenses and store them in a database.

---

## 🚀 Contains

- 🔐 Login authentication system  
- ➕ Add new expense entries  
- 🗂 MongoDB database storage  
- 🖥 Server-side presented UI (EJS)  
- 📁 Organized project structure  
- 🎯 Straightforward and clean interface  

---

## 🛠 Tech Stack

| Layer | Technology |
|------|-------------|
| Backend | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Templating | EJS |
| Middleware | body-parser |
| Frontend | HTML, CSS, JS |

---

## 📁 Project Structure

## 📁 Project Structure

```plaintext
ExpensePilot/
│
├── src/
│   ├── settings/                 # DB connection, environment settingss
│   │   └── db.js
│   │
│   ├── routes/                 # Express routes
│   │   └── expenseRoutes.js
│   │
│   ├── controllers/            # Route logic
│   │   └── expenseController.js
│   │
│   ├── models/                 # Database schemas
│   │   └── expenseModel.js
│   │
│   ├── middleware/             # Auth / validation middleware
│   │
│   └── application.js                  # Express application settings
│
├── views/                      # EJS templates
│   ├── login.ejs
│   └── tracker.ejs
│
├── public/                     # Static assets
│   ├── css/
│   ├── js/
│   └── images/
│
├── .env                        # Environment variables
├── .gitignore
├── package.json
└── server.js                   # Applicationlication entry point
```


---

## ⚙ Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

---

### Settings Steps

```bash
git clone https://github.com/sonararadhya/ExpensePilot.git
cd ExpensePilot
npm install