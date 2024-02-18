const express = require('express');
const router = express.Router();
const { alldata, alldatafind, mockd, mockdfind, getdashpboardmock, datapushtodasboard } = require('./Main/func');


router.get('/', (req, res) => {
    res.send("home page")
})

// router.get('/login', (req, res) => {
//     res.send("login page")
// })
router.post('/videodata', alldata)
router.get('/videodatafind', alldatafind);
router.post('/mockdatas', mockd);
router.get('/mockdatasfind', mockdfind);
router.post("/dashboardpush", datapushtodasboard);
router.get("/dashboardget", getdashpboardmock)


module.exports = router;