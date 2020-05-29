const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pcrSurveySchema = new Schema({
  manHumanConsumption: {
    type: Boolean
  },
  packHumanConsumption: {
    type: Boolean
  },
  processFood: {
    type: Boolean
  },
  packOffFarm: {
    type: Boolean
  },
  majorityFarmers: {
    type: Boolean
  },
  userID: {
    type: String
  }

});

module.exports = PCRSurvey = mongoose.model("pcrsurveys", pcrSurveySchema)
