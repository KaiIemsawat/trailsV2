const Trail = require("../models/trails.model");

module.exports.getAllTrails = (req, resp) => {
    Trail.find()
        .then((allTrails) => {
            resp.json(allTrails);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.getOneTrail = (req, resp) => {
    console.log(req.params);
    Trail.findById({ _id: req.params.id })
        .then((oneTrail) => {
            resp.json(oneTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.addTrail = (req, resp) => {
    Trail.create(req.body)
        .then((newTrail) => {
            resp.status(201).json(newTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.editTrail = (req, resp) => {
    console.log(req.params);
    Trail.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateTrail) => {
            resp.json(updateTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.deleteTrail = (req, resp) => {
    Trail.deleteOne({ _id: req.params.id })
        .then((resu) => {
            resp.json(resu);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};
