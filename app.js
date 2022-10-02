const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

// mongoose.connect('mongodb://localhost:27017/online-learning',{
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/signin', (req,res) => {
    res.render('signin')
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})