const express = require('express');
const router = express.Router();
const PSurvey = require('../../models/PSurvey');
const User = require("../../models/User");
const Food = require('../../models/Food');

//Import routes
//All routes in this file start as /food
//Look at server.js base rotue is set there

//Get survey for user
router.get('/:userID', async (req, res) => {
    try {
        const survey = await PSurvey.findOne({ userID: req.params.userID });
        let referenceArr = [];
        if(survey) {
          for(var i = 0; i < survey.rarelyRaw.length; i++) {
            let currentProduce = await Food.findOne({ name: survey.rarelyRaw[i] });
            if(currentProduce && currentProduce.references.length > 0) {
              for(var j = 0; j < currentProduce.references.length; j++) {
                if(!referenceArr.includes(currentProduce.references[j])) {
                  referenceArr.push(currentProduce.references[j]);
                }
              }
            }
          }
          for(var i = 0; i < survey.rawCommodity.length; i++) {
            let currentProduce = await Food.findOne({ name: survey.rawCommodity[i] });
            if(currentProduce && currentProduce.references.length > 0) {
              for(var j = 0; j < currentProduce.references.length; j++) {
                if(!referenceArr.includes(currentProduce.references[j])) {
                  referenceArr.push(currentProduce.references[j]);
                }
              }
            }
          }
        }
        for(var i = 0; i < survey.valueAdded.length; i++) {
          let currentProduce = await Food.findOne({ name: survey.valueAdded[i] });
          if(currentProduce && currentProduce.references.length > 0) {
            for(var j = 0; j < currentProduce.references.length; j++) {
              if(!referenceArr.includes(currentProduce.references[j])) {
                referenceArr.push(currentProduce.references[j]);
              }
            }
          }
        }
        res.json(referenceArr);
    } catch(err) {
        res.json({message: err});
    }
});

//Add new survey item to database
//We only want to maintain one survey per user at a time.
//Therefore if the user retakes it the existing survey will be replaced
//Requires a json file input
//ex: {"userID": 12312, "growsProduce": true, "lessThan25k": true, "manHumanConsumption": true, "packHumanConsumption": false}
router.post('/add', async (req,res) => {
    const user = await User.findById(req.body.userID);
    const surveyItem = new PSurvey({
        rarelyRaw: req.body.rarelyRaw,
        rawCommodity: req.body.rawCommodity,
        valueAdded: req.body.valueAdded,
        userID: user._id
    });
    try {
        const removedSurvey =  await PSurvey.remove({userID: user._id});
        const savedSurveyItem = await surveyItem.save();
        res.json(savedSurveyItem);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
