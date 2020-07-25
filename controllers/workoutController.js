const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const filePath = path.join(__dirname, "./../public/");
const router = express.Router();
const db = require("../models");


router.get("/stats", (_, res) => {
  res.sendFile(`${filePath}stats.html`, (err, _) => {
    if (err) throw err;
  });
});

router.get("/exercise", (_, res) => {
  res.sendFile(`${filePath}exercise.html`, (err, _) => {
       if (err) throw err;
  });
});

// ==========================================
//route 1
router.get("/api/workouts", (_, res) => {
  db.Workout.find({})
    .then((work) => {
      console.log(work);
      res.json(work);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route 2
router.post("/api/workouts", (_, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route 3
router.put("/api/workouts/:id", async (req, res) => {
  const id = req.params.id;
  const work = await db.Workout.findByIdAndUpdate({ _id: id }, {$push:{exercises:body}})
    .then((work) => {
      res.json(work);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route 4
router.get("/api/workouts/range", (_, res) => {
  db.Workout.find({}).limit(7)
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
