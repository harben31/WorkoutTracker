const router = require('express').Router();
const path = require('path');
const Workout = require('../models/Workout')

router.get('/stats',  (req, res) => {
   console.log('route hit');
   res.sendFile(path.join(__dirname, '../public/stats.html' ))
});

router.get('/exercise',  (req, res) => {
   res.sendFile(path.join(__dirname, '../public/exercise.html' ))
});

module.exports = router;