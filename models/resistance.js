const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:'enter the resistance workout name'
    },
    weight:{
        type:Number,
        required:'enter weight'
    },
    sets:{
        type:Number,
        required:'enter enter sets'
    },
    reps:{
        type:Number,
        required:'enter reps'
    },
    duration:{
        type:Number,
        required:'enter duration (min)'
    }
})

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;