const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./../public/");
const router = express.Router();
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// view routes
router.get("/", (_, res) => {
  fs.readFile(`${filePath}index.html`, "utf8", (err, res) => {
    if (err) throw err;
    else res.send(res);
  });
});

router.get("/stats", (_, res) => {
  fs.readFile(`${filePath}stats.html`, "utf8", (err, res) => {
    if (err) throw err;
    else res.send(res);
  });
});

router.get("/exercise", (_, res) => {
  fs.readFile(`${filePath}exercise.html`, "utf8", (err, res) => {
    if (err) throw err;
    else res.send(res);
  });
});

// "/api/workouts"
// ==========================================
router.get("/api/workouts", (_, res) => {
  db.Day.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// "/api/workouts/:id"
router.get("/api/workouts/:id", (req, res) => {
  db.Exercise.findOne({ _id: req.params.id })
    .populate("exercises")
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// "/api/workouts/range"
router.get("/api/workouts/range", (_, res) => {
  db.Exercise.find({})
    .populate("exercises")
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
