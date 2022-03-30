import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    img: String,
    name: String,
    age: Number,
    adress: String
})

const Person = mongoose.model('person', personSchema);

export default Person;