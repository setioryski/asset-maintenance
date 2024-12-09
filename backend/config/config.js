require('dotenv').config();
const { Sequelize } = require('sequelize');

// Set up Sequelize instance using environment variables from .env file
const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,     // Read from .env file
  password: process.env.DB_PASSWORD,     // Read from .env file
  database: process.env.DB_NAME,         // Read from .env file
  host: process.env.DB_HOST,             // Read from .env file
  dialect: 'mysql',                      // Specify your database dialect (e.g., MySQL)
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    throw error;  // Rethrow the error so it can be caught in app.js
  }
};

// Export the sequelize instance and the connectDB function
module.exports = {
  sequelize,
  connectDB,
};
