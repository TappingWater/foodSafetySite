const express = require('express');
const router = express.Router();
const PSRSurvey = require('../../models/PSRSurvey');
const User = require("../../models/User");

//Import routes
//All routes in this file start as /food
//Look at server.js base rotue is set there

//Get survey for user
router.get('/:userID', async (req, res) => {
    try {
        const survey = await PSRSurvey.findOne({ userID: req.params.userID });
        const surveyResult = {
          result: ""
        };
        if(survey) {
          if(!survey.growsProduce || survey.lessThan25k) {
            surveyResult.result = "Your farm is NOT covered by the Produce Safety Rule.";
          } else if(survey.commodityRareRaw) {
            surveyResult.result = "One or more of your produce is NOT covered by the Produce Safety Rule.";
          } else if(survey.reducePathogens) {
            surveyResult.result = "You may be eligible for exemption from the Produce Safety Rule.";
          } else if(survey.lessThan500k) {
            surveyResult.result = "You are qualified for an exemption from the Produce Safety Rule.";
          } else {
            surveyResult.result = "You are covered by the Produce Safety Rule.";
          }
        } else {
          surveyResult.result = "You have NOT filled out the questionnaire. Please navigate to the survey page and complete the Produce Safety Rule questionnaire."
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
    const surveyItem = new PSRSurvey({
        growsProduce: req.body.growsProduce,
        lessThan25k: req.body.lessThan25k,
        commodityRareRaw: req.body.commodityRareRaw,
        reducePathogens: req.body.reducePathogens,
        lessThan500k: req.body.lessThan500k,
        userID: user._id
    });
    try {
        const removedSurvey =  await PSRSurvey.remove({userID: user._id});
        const savedSurveyItem = await surveyItem.save();
        res.json(savedSurveyItem);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
