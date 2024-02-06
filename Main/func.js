const mockData = require('../dataModel/data')
const videodata = require('../dataModel/videodata')
const { videoTutorial, datavideo, cart } = require('../dataModel/MODEL/Schema')

//--------------videodata-page---------
const alldata = async (req, res) => {
    try {
        const value = await videoTutorial.create(videodata)
        res.send(value);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}
const alldatafind = async (req, res) => {
    try {
        const value2 = await videoTutorial.find({})
        res.send(value2);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}

//------------mockdata-page----------
const mockd = async (req, res) => {
    try {
        const value3 = await datavideo.create(mockData)
        res.send(value3);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}
const mockdfind = async (req, res) => {
    try {
        const value4 = await datavideo.find({})
        res.send(value4);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}

/*------------Mockdata-Page-BuyNow--------------------*/
const Addtocart = async (req, res) => {
    try {
        const BuyNow = req.body
        const cartfind = await cart.create(BuyNow);
        res.send(cartfind)
        console.log(cartfind);
    }
    catch (err) {
        console.log("error");
    }
}

const getCartdata = async (req, res) => {
    try {
        const cartfind = await cart.find({});
        res.send(cartfind)
        console.log(cartfind);
    }
    catch (err) {
        console.log("error");
    }
}



module.exports = { alldata, alldatafind, mockd, mockdfind, Addtocart, getCartdata };