const express = require('express');
const router = express.Router();
const { alldata, alldatafind } = require('./Main/func');

router.get('/', (req, res) => {
    res.send("home page")
})

router.get('/login', (req, res) => {
    res.send("login page")
})
router.post('/videodata', alldata)
router.get('/videodatafind', alldatafind)
module.exports = router;