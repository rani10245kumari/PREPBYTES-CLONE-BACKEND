const express = require('express');
const router = express.Router();
const { alldata, alldatafind, mockd, mockdfind, Addtocart, getCartdata,
    getdeleteCart } = require('./Main/func');


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
router.post('/addtocart', Addtocart)
router.get('/getcartdata', getCartdata);
router.post("/getdataRemove", getdeleteCart)

module.exports = router;