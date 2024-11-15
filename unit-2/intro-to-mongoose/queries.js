/*------------------------------- Starter Code -------------------------------*/
const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose')
console.log(process.env.MONGODB_URI)

const Todo = require('./models/todo.js')

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  // const todoData = {
  //   text: 'Learn JS',
  //   isComplete: false
  // }

  // cost Todo = await Todo.create(todoData)
  // console.log(todo)

  // !! print everything in the curent database to your console
  // const todos = await Todo.find({})
  // console.log(todos)

  // const newTodo = await Todo.create({text:'deleteme', isComplete:false})
  // console.log(newTodo)
  // const foundTodo= await Todo.findById('673648cfb2e73e65013c88ad')
  // console.log(foundTodo)
  //!! delete  by id
  // const foundTodo = await Todo.findByIdAndDelete('6736541e02ab63fac20c8f7e')
  

  // const updatedTodo = await Todo.findByIdAndUpdate(
  //   '673648cfb2e73e65013c88ad',
  //   {text: 'This was UPDATED!', isComplete: true},
  //   {new: true}
  // )
  // console.log(updatedTodo)

  // const yabadabado = await Todo.create ({
  //   text: "Willllllmmmmaaaaa!",
  //   isComplete: true,
  // })


  captureId = prompt('please put id here')
  console.log(captureId)
  mongoose.connection.close()


}



connect()
/*------------------------------ Query Functions -----------------------------*/
