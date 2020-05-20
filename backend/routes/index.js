const router = require('express').Router();
const Mobility = require('../models/Mobility.js');


router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.get('/mobilities', (req, res, next) => {
  //res.status(200).json({ msg: 'Success!' });
  console.log('hello from backend!', req.query);
  Mobility.find({ sub_region_1: "Florida" ,  sub_region_2: ""}).then(dataFromDB => {
    // console.log(dataFromDB, dataFromDB.length)
    res.json({ mobilities: dataFromDB }); 
  })
});


module.exports = router;

// options: use a switch statement OR, create a const = {}, where each property is the abrev. of the state. i.e., FL: "Florida" --> query could be object.req.query.region (FL)