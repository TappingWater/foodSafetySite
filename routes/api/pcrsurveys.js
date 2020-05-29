const express = require('express');
const router = express.Router();
const PCRSurvey = require('../../models/PCRSurvey');
const User = require("../../models/User");

//Import routes
//All routes in this file start as /food
//Look at server.js base rotue is set there

//Get survey for user
router.get('/:userID', async (req, res) => {
    try {
        const survey = await PCRSurvey.findOne({ userID: req.params.userID });
        const surveyResult = {
          result: ""
        };
        if(survey) {
          if(!survey.manHumanConsumption || survey.packHumanConsumption || survey.processFood || survey.majorityFarmers) {
            surveyResult.result = "Your farm is NOT covered by the Preventive Controls Rule.";
          } else {
            surveyResult.result = "You are covered by the Preventive Controls Rule.";
          }
        } else {
          surveyResult.result = "You have NOT filled out the questionnaire. Please navigate to the survey page and complete the Preventive Controls Rule questionnaire."
        }
        res.json(surveyResult);
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
    const surveyItem = new PCRSurvey({
        manHumanConsumption: req.body.manHumanConsumption,
        packHumanConsumption: req.body.packHumanConsumption,
        processFood: req.body.processFood,
        packOffFarm: req.body.packOffFarm,
        majorityFarmers: req.body.majorityFarmers,
        userID: user._id
    });
    try {
        const removedSurvey =  await PCRSurvey.remove({userID: user._id});
        const savedSurveyItem = await surveyItem.save();
        res.json(savedSurveyItem);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
