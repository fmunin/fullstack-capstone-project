/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require("../models/db");

router.get('/', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase() ;//frm added

        // Task 2: use the collection() method to retrieve the gift collection
      const collection = db.collection('gifts') ; //frm added

        // Task 3: Fetch all gifts using the collection.find method. Chain with toArray method to convert to JSON array
        const gifts = await collection.find({}).toArray() ; //frm added

        // Task 4: return the gifts using the res.json method
        res.json(gifts); //frm added
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase() ;//frm added

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection('gifts') ; //frm added

        const id = req.params.id;

        // Task 3: Find a specific gift by ID using the collection.fineOne method and store in constant called gift
        const gift = await collection.findOne({id:id}); //frm added

        if (!gift) {
            return res.status(404).send('Gift not found');
        }
        //console.log(gift)
        res.json(gift);
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});



// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
