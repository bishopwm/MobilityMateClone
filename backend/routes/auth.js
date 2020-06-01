const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => { 
        req.login(user, function(err,result){
          res.status(201).json(user)
        })
    })
    .catch((err) => { 
      console.log(err)
      res.status(500).json({ err })
    });
});


//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {  
  res.json(req.user)
})


router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json(user);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/saved-grocery-data/', isAuth, (req, res, next) => {
  const today = new Date();
  const query = { _id: req.user._id };
  let groceryData = {
      data: req.body[0],
      savedDate: today,
      savedLocation: req.body[1],
      dataStartDate: req.body[2],
      dataEndDate: req.body[3]
  }
  const options = {upsert: true};
  User.findOneAndUpdate(query, { "$push": { "userGroceryData": groceryData } }, options).then(response => {
    res.json({message:"success", lastUpdatedUserId: response._id}) 
  }).catch(err => res.json({err}))  
})

router.post('/saved-parks-data', isAuth, (req, res, next) => {
  const today = new Date();
  const query = { _id: req.user._id };
  let parksData = {
      data: req.body[0],
      savedDate: today,
      savedLocation: req.body[1],
      dataStartDate: req.body[2],
      dataEndDate: req.body[3]
  }
  const options = {upsert: true};
  User.findOneAndUpdate(query, { "$push": { "userParksData": parksData } }, options).then(response => {
    res.json({message:"success", lastUpdatedUserId: response._id}) 
  }).catch(err => res.json({err}))  
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
