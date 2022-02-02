const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5002
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/posts', postRouter)
app.use('/api/userss', userRouter)

//database address
const mongoDB = "mongodb+srv://kavitatandel:47fC8r768tP6Q1aE@wbskavitacluster.ipzy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//connect with mongodb database
mongoose.connect(mongoDB, { useNewUrlParser: true });

//create connection object
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => res.send("hello world"));
app.listen(PORT, () => console.log("connected" + PORT));
