const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    day: {
        type: Number
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'What did type of workout did you do?'
        },
        name: {
            type: String,
            required: 'What is the name of your workout?',
            trim: true
        },
        duration: {
            type: Number,
            required: 'How many minutes did you workout?'
        },
        weight: {
           type : Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },

    }],
},
{
    versionKey: false
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;