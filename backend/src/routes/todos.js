const express = require('express');
const router = express.Router();

// Import Controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo, getTodoById} = require('../controllers/getTodo');
const {updateTodoById} = require('../controllers/updateTodo');
const {deleteTodoById} = require('../controllers/deleteTodo');

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodoById);
router.delete("/deleteTodo/:id", deleteTodoById);

module.exports = router;