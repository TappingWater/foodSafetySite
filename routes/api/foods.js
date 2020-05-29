const express = require('express');
const router = express.Router();
const Food = require('../../models/Food');

//Import routes
//All routes in this file start as /food
//Look at server.js base rotue is set there

//Get all foods in the database
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch(err) {
        res.json({message: err});
    }
});

//Add new food item to database
//Requires a json file input
//ex: {"name": 'Tomatoes', "type": 'produce'}
router.post('/add', async (req,res) => {
    const foodItem = new Food({
        name: req.body.name,
        foodType: req.body.foodType,
        references: req.body.references
    });
    try {
    const savedFoodItem = await foodItem.save();
    res.json(savedFoodItem);
    } catch(err) {
        res.json({message: err});
    }
});

//Get specific food item
router.get('/name/:foodName', async (req, res) => {
    try {
        const food = await Food.find({name : req.params.foodName});
        res.json(food);
    }
    catch(err) {
        res.json({message: err});
    }
});


//Get specific food item by id
router.get('/id/:foodID', async (req, res) => {
    try {
        const food = await Food.findById(req.params.foodID);
        res.json(food);
    }
    catch(err) {
        res.json({message: err});
    }
});

//Remove a specific food item
router.delete('/delete/:foodName', async (req, res) => {
    try {
        const removedFood =  await Food.remove({name : req.params.foodName});
        res.json(removedFood);
    }
    catch (err) {
        res.json({ message: err });
    }
});

//Update a specific food item
//Only the type of food can be updated since food name is unique
//Requires json input {"type" : "produce"}
router.patch('/update/:foodName', async (req, res) => {
    try {
        const updatedFood =  await Food.update({name : req.params.foodName},
          {
            $set: {
              foodType: req.body.foodType,
              references: req.body.references
            }
          });
        res.json(updatedFood);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
