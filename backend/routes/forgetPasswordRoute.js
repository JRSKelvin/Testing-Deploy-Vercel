const router = require('express').Router();
let ForgetPasswords = require('../models/forgetPasswordModel');

//Untuk Get
router.route('/').get((req, res) => {
    ForgetPasswords.find()
    .then(userdata => res.json(userdata))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Untuk Add 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const admin = req.body.admin;
    const questionrecovery = req.body.questionrecovery;
    const answerrecovery = req.body.answerrecovery;
    const location = {location: {$geoWithin:{$centerSphere: [[77.4520708,28.68467], 15/3963.2]}}}

    const newUser = new ForgetPasswords({username, password, email, admin, questionrecovery, answerrecovery, location});

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Ambil ID Untuk Edit
router.route('/:id').get((req, res) => {
    ForgetPasswords.findById(req.params.id)
    .then(userdata => res.json(userdata))
    .catch(err => res.status(400).json('Error: ' + err));
})

//Untuk Update Dari Ambil ID Untuk Edit
router.route('/update/:id').post((req, res) => {
    ForgetPasswords.findById(req.params.id)
    .then(userdata => {
        userdata.password = req.body.password;
        userdata.location = req.body.location;

        userdata.save()
        .then(() => res.json('User Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;