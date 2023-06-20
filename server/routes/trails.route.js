const TrailController = require("../controllers/trails.controller");

module.exports = (app) => {
    app.get("/api/allTrails", TrailController.getAllTrails);
    app.get("/api/getOneTrail/:id", TrailController.getOneTrail);
    app.post("/api/addTrail", TrailController.addTrail);
    app.put("/api/updateTrail/:id", TrailController.editTrail);
    app.delete("/api/deleteTrail/:id", TrailController.deleteTrail);
};
