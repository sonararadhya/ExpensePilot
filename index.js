const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS if not already set
app.set('view engine', 'ejs');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse request bodies (needed for form submissions)
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

// Define a route to render the login page
app.get('/', (req, res) => {
  res.redirect('/login'); // Redirect to the login page
});

app.get('/login', (req, res) => {
  res.render('login'); // Assuming you're using a template engine like EJS or Pug
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');  // This will show a page called "dashboard.ejs"
});

app.get('/logout', (req, res) => {
  res.render('login');  // This will show a page called "dashboard.ejs"
});

// Route for the Money Tracker App page
app.get('/tracker', (req, res) => {
  res.render('tracker');  // This will render the "tracker.ejs" page
});
  // Render the login.ejs page

// Define a POST route for handling login submissions
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check the username and password here (for now, a simple check)
  if (username === 'admin' && password === 'password') {
    //res.send('Login successful! Redirecting...');
    // Redirect to a dashboard or homepage after successful login
    res.redirect('/tracker');
  } else {
    res.send('Invalid username or password');
  }
});

// Start the server
const port = 3001;
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
//var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

//const app= express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/MoneyList')
var db = mongoose.connection
db.on('error', ()=> console.log("Error in connecting to the Database"))
db.once('open', () => console.log("Connected to Database"))

app.post("/add", (req,res) =>{
    var category_select = req.body.category_select
    var amount_input= req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var data={
        "Category": category_select,
        "Amount" : amount_input,
        "Info": info,
        "Date": date_input
    }
    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")

    })
})
app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
})


console.log("Listening on port 3001")