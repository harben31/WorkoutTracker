const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    workoutName: {
        type: String,
        trim: true
    },
    time: {
        type: Number,
        required: 'How many minutes did you workout?' 
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;