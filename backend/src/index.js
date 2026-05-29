const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body
app.use(express.json());

// Import routes for TODO APi
const todoRoutes = require('./routes/todos');

// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
});

// DB Connection
const dbConnect = require('./config/database');
dbConnect();

// Default Route
app.get('/', (req, res) => {
    res.send(`<h1>This is Homepage Baby</h1>`); 
});