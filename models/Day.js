const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaySchema = new Schema({
  day: { type: Date, default: Date.now },
});
const Day = mongoose.model("Day", DaySchema);

module.exports = Day;
