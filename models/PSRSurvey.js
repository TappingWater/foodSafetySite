const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let psrSurveySchema = new Schema({
  growsProduce: {
    type: Boolean
  },
  lessThan25k: {
    type: Boolean
  },
  commodityRareRaw: {
    type: Boolean
  },
  reducePathogens: {
    type: Boolean
  },
  lessThan500k: {
    type: Boolean
  },
  userID: {
    type: String
  }

});

module.exports = PSRSurvey = mongoose.model("psrsurveys", psrSurveySchema)
