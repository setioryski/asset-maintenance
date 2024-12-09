const express = require('express');  // Import Express
const { sequelize, connectDB } = require('./config/config');  // Correct path to your config.js
const Division = require('./models/division');
const User = require('./models/user');
// Import other models similarly

// Initialize Express app
const app = express();

// Middleware (if any)
app.use(express.json());  // To parse incoming JSON requests

const startServer = async () => {
  try {
    await connectDB(); // Establish database connection
    console.log('✅ Database connected successfully.');

    // Synchronize models with the database
    await sequelize.sync({ alter: true }); // Use { force: true } with caution!
    console.log('✅ All models were synchronized successfully.');

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error occurred:', error);
  }
};

// Start the server
startServer();
