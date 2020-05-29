const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require("path");

const app = express();

//Middle ware
app.use(bodyParser.json())


// Express Route
const userRoute = require('./routes/api/users');
//Middle Ware: Import routes
const foodRoute = require('./routes/api/foods');
const psrSurveyRoute = require('./routes/api/psrsurveys');
const pcrSurveyRoute = require('./routes/api/pcrsurveys');
const pSurveyRoute = require('./routes/api/psurveys');


const dbConfig = require('./config/keys').db;
// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", userRoute);
app.use('/api/foods', foodRoute);
app.use('/api/psrsurveys', psrSurveyRoute);
app.use('/api/pcrsurveys', pcrSurveyRoute);
app.use('/api/psurveys', pSurveyRoute);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
