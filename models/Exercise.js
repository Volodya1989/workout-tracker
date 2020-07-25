const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    require: "Type is Required",
  },
  name: {
    type: String,
    trim: true,
    require: "Name is Required",
  },
  duration: {
    type: Number,
    min: 1,
    max: 600,
  },
  weight: {
    type: Number,
    min: 1,
    max: 600,
  },
  reps: {
    type: Number,
    min: 1,
    max: 600,
  },
  sets: {
    type: Number,
    min: 1,
    max: 600,
  },
},opts);


const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports=Exercise;