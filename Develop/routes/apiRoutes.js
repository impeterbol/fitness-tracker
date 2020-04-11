const router = require('express').Router();
const db = require('../models')

//display on index page
router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(data => res.json(data))
        .catch(err => res.sendStatus(500))
})

// new ex to the cur workout
router.put("/workouts/:id", (req, res) => {
    console.log("HERE");
    db.Workout.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.sendStatus(500));
})


//add a new workout
router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500));
})

//data in the dashboard
router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500));
})


module.exports = router