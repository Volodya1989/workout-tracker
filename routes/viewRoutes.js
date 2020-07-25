const path = require("path");
const filePath = path.join(__dirname, "./../public/");
module.exports = (app)=>{
    app.get("/", (_, res) => {
        res.sendFile(`${filePath}index.html`, (err, _) => {
          if (err) throw err;
        });
      });
    app.get("/stats", (_, res) => {
        res.sendFile(`${filePath}stats.html`, (err, _) => {
          if (err) throw err;
        });
      });
      
      app.get("/exercise", (_, res) => {
        res.sendFile(`${filePath}exercise.html`, (err, _) => {
          if (err) throw err;
        });
      });
};