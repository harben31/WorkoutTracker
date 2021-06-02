const router = require('express').Router();

const Workout = require('../../models/Workout')

router.get('/', async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            { $addFields: {
                    totalDuration: {
                        $reduce: {
                            input: '$exercises', initialValue: 0, in: {
                                $add: ['$$value', '$$this.duration']
                            }
                        }
                    }
                }
            }
        ]);
        // console.log(workoutData);
        res.json(workoutData);
    } catch (err) {
        console.log('catch');
        res.json(err);
    };
});

router.get('/range', async (req, res) => {
    try {
        // const workoutData = await Workout.find({});
        const workoutData = await Workout.aggregate([
            { $addFields: {
                    totalDuration: {
                        $reduce: {
                            input: '$exercises', initialValue: 0, in: {
                                $add: ['$$value', '$$this.duration']
                            }
                        }
                    }
                }
            }
        ]);
        workoutData.forEach((workoutData) => {
            console.log(workoutData.exercises);
        })
        res.json(workoutData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        newWorkout = await Workout.create({...req.body, day: Date.now() });
        res.json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    console.log(req.body);
    try {
        const workoutData = await Workout.findById(req.params.id);
        workoutData.exercises.push(req.body);
        workoutData.save();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;