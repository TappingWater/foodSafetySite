const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    foodType: {
        type: String
    },
    references: {
        type: [String]
    },
});

module.exports = Food = mongoose.model('foods', foodSchema);
