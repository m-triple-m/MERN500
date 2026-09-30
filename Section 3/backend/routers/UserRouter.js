const express = require('express');
const Model = require('../models/UserModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

// getall
// getbyid
// getbyemail
// update
// delete

module.exports = router;