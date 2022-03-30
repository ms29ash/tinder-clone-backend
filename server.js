import express from "express";
import mongoose from "mongoose";
import Cors from "cors"
const mongoUrl = 'mongodb+srv://ms29ash:w2za7Fbo91nnW1ws@cluster0.xskli.mongodb.net/tinder-my-clone?retryWrites=true&w=majority'
import Person from './dbModel.js'



// App Config
const app = express();
const port = process.env.PORT || 9000;


// Middleware
app.use(express.json());
app.use(Cors());


// Db Config
mongoose.connect(mongoUrl, () => {
    console.log('Connected to Mongo successfully')
}).catch(err => console.log(err))



// Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/get/person', (req, res) => {
    Person.find((err, data) => {
        res.status(200).json(data)
    })
})
app.post('/get/person', (req, res) => {
    Person.create(req.body, (err, data) => {
        res.status(201).json(data)
    })
})


//Listening 
app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})