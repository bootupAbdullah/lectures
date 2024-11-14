/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose')
console.log(process.env.MONGODB_URI)

const Todo = require('./models/todo.js')

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  const todoData = {
    text: 'Learn JS',
    isComplete: false
  }

  await Todo.create(todoData)
}

connect()
/*------------------------------ Query Functions -----------------------------*/
