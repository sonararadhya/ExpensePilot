# 💰 ExpensePilot

ExpensePilot is a lightweight **Expense Tracking Web Application** built using **Node.js, Express, MongoDB, and EJS** that allows users to log and manage daily expenses through a simple and secure interface.

---

## 📌 Overview

ExpensePilot is designed as a learning-focused full-stack backend project demonstrating:

- Authentication handling
- MongoDB database integration
- Express routing
- Server-side rendering
- Form data processing

It provides a minimal dashboard where users can log expenses and store them in a database.

---

## 🚀 Features

- 🔐 Login authentication system  
- ➕ Add new expense entries  
- 🗂 MongoDB database storage  
- 🖥 Server-side rendered UI (EJS)  
- 📁 Organized project structure  
- 🎯 Simple and clean interface  

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

ExpensePilot/
│
├── src/
│   ├── config/          # DB connection, environment configs
│   │   └── db.js
│   │
│   ├── routes/          # Express routes
│   │   └── expenseRoutes.js
│   │
│   ├── controllers/     # Logic for routes
│   │   └── expenseController.js
│   │
│   ├── models/          # Database schemas
│   │   └── expenseModel.js
│   │
│   ├── middleware/      # Auth / validation middleware
│   │
│   └── app.js           # Express app config
│
├── views/               # EJS templates
│   ├── login.ejs
│   └── tracker.ejs
│
├── public/              # Static assets
│   ├── css/
│   ├── js/
│   └── images/


---

## ⚙ Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

---

### Setup Steps

```bash
git clone https://github.com/sonararadhya/ExpensePilot.git
cd ExpensePilot
npm install
