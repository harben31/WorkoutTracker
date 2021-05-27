const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: 'enter your name'
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Workout"
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;