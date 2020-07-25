const db = require("../models");

module.exports = (app) => {
  //route 1
  app.get("/api/workouts", (_, res) => {
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
  app.post("/api/workouts", (_, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //route 3
  app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    db.Workout.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((work) => {
        res.json(work);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //route 4
  app.get("/api/workouts/range", (_, res) => {
    db.Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

