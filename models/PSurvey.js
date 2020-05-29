const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pSurveySchema = new Schema({
  rarelyRaw: {
    type: [String]
  },
  rawCommodity: {
    type: [String]
  },
  valueAdded: {
    type: [String]
  },
  userID: {
    type: String
  }

});

module.exports = PSurvey = mongoose.model("psurveys", pSurveySchema)
