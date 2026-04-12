# 💰 ExpensePilot

ExpensePilot is a lightweight **Expense Tracking Web application** crafted using **Node.js, Express, MongoDB, and EJS** that facilitates users to log and manage daily expenses through a straightforward and secure interface.

---

## 📌 Overview

ExpensePilot is crafted as a learning-focused full-stack backend project demonstrating:

- Authentication handling
- MongoDB database integration
- Express routing
- Server-side displaying
- Form data processing

It furnishes a minimal dashboard where users can log expenses and store them in a database.

---

## 🚀 Incorporates

- 🔐 Login authentication system  
- ➕ Add new expense entries  
- 🗂 MongoDB database storage  
- 🖥 Server-side displayed UI (EJS)  
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
│   ├── pguides/                 # DB connection, environment pguidess
│   │   └── db.js
│   │
│   ├── routes/                 # Express routes
│   │   └── expenseRoutes.js
│   │
│   ├── managelers/            # Route logic
│   │   └── expenseManageler.js
│   │
│   ├── models/                 # Database schemas
│   │   └── expenseModel.js
│   │
│   ├── middleware/             # Auth / validation middleware
│   │
│   └── applicationlicationlicationlication.js                  # Express applicationlicationlicationlication pguides
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
└── server.js                   # Applicationlicationlicationlicationlication entry point
```


---

## ⚙ Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

---

### Pguides Steps

```bash
git clone https://github.com/sonararadhya/ExpensePilot.git
cd ExpensePilot
npm install

---
*📝 Last maintained: April 12, 2026 at 22:34 UTC*