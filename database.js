const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'doctero_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '123',
  logging: console.log, // Enable logging to see SQL queries
  pool: {
    max: 100,     // Maximum connections for high load
    min: 10,      // Always keep 10 connections ready
    acquire: 60000,
    idle: 10000
  }
});

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
    console.error('Please make sure PostgreSQL is running and credentials are correct.');
    // Don't exit, let the app continue and show better error messages
  }
};

module.exports = { sequelize, testConnection };