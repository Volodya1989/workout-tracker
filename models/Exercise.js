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
    max: 600,
  },
  distance: {
    type: Number,
    max: 600,
  },
  sets: {
    type: Number,
    max: 600,
  },
},opts);
ExerciseSchema.virtual("totalWeight").get(()=>{
  return this.weight
});
ExerciseSchema.virtual("totalDistance").get(()=>{
  return this.distance;
});
ExerciseSchema.virtual("totalSets").get(()=>{
  return this.sets;
});
ExerciseSchema.virtual("totalReps").get(()=>{
  return this.reps;
});
ExerciseSchema.virtual("totalDuration").get(()=>{
  return this.duration;
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports=Exercise;