const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
User.findOne({ email: req.body.email.toLowerCase() }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        farmname: req.body.farmname,
        admin: false
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email.toLowerCase();
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          admin: user.admin
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 7200 // 2 hours in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/profile/:token", (req, res) => {
  const userID = (jwt.decode(req.params.token)).id;
  // Get email/username of current user
  User.findOne({ _id: userID })
    .then(user => {
      if(user) {
        return res.json({
          email: user.email,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          farmname: user.farmname
        })
      } else {
        return res
          .status(500)
          .json({ profileNotFound: userID + " Not Found"});
      }
    })
    .catch(err => console.log(err));
});

router.put("/profile/edit/:token", (req, res) => {
  const userID = (jwt.decode(req.params.token)).id;
  // Get email/username of current user
  User.findOneAndUpdate(
    { _id: userID },
    {
      $set: {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        farmname: req.body.farmname
      }
    })
    .then(result => {
      return res.json({
        email: result.email,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        farmname: req.body.farmname
      })
    })
    .catch(err => console.log(err));
});

module.exports = router;
