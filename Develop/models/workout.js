const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ['cardio', 'resistance'],
                required: "Must have a type"
            },
            name: {
                type: String,
                required: "Must have a name"
            },
            duration: {
                type: Number,
                required: "Must have a duration"
            },
            distance: {
                type: Number,
                required: function () {
                    return this.type === "cardio"
                }
            },
            weight: {
                type: Number,
                required: function () {
                    return this.type === "resistance"
                }
            },
            reps: {
                type: Number,
                required: function () {
                    return this.type === "resistance"
                }
            },
            sets: {
                type: Number,
                required: function () {
                    return this.type === "resistance"
                }
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;