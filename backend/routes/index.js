const router = require('express').Router();
const Mobility = require('../models/Mobility.js');


router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.get('/mobilities', (req, res, next) => {
  //res.status(200).json({ msg: 'Success!' });
  //console.log('hello from backend!');
  Mobility.find().then(dataFromDB => {
    res.json({ mobilities: dataFromDB }); 
  })
});


module.exports = router;
