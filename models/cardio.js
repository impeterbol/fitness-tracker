const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required: 'Enter cardio workout name'
    },
    distance:{
        type:Number,
        required:'Enter Distance in miles!'
    },
    duration:{
        type:Number
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);
module.exports = Cardio;