// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
   await client.connect() ; //frm added

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName) ; //frm added 

    // Task 3: Return database instance
   return dbInstance ; //frm added
}

module.exports = connectToDatabase;
