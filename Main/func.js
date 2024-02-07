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
// const Addtocart = async (req, res) => {
//     const BuyNow = req.body
//     const duplicate = await cart.findOne({ testID: BuyNow.testID })
//     console.log(duplicate)
//     try {

//         const cartfind = await cart.create(BuyNow);
//         res.send(cartfind)
//         // console.log(cartfind);
//     }
//     catch (err) {
//         console.log("error");
//     }
// }

const Addtocart = async (req, res) => {

    try {
        console.log("heloooo")
        const BuyNow = req.body;
        const duplicate = await cart.findOne({ testID: BuyNow.testID });
        console.log(duplicate);

        if (duplicate) {
            console.log('Duplicate found:', duplicate);
            // Handle duplicate entry here if needed
            res.send({ msg: "Item is already in the cart" })
        } else {
            const cartfind = await cart.create(BuyNow);
            res.send({ msg: "Item is added " })
        }
    } catch (err) {
        console.log("Error:", err);
        res.status(500).send('Internal Server Error');
    }
}

const getCartdata = async (req, res) => {
    try {
        const cartfind = await cart.find({});
        res.send(cartfind)
        // console.log(cartfind);
    }
    catch (err) {
        console.log("error");
    }
}

const getdeleteCart = async (req, res) => {
    const data = req.body;
    console.log(data);
    const remove = await cart.findOneAndDelete({ testID: data.testID });
    console.log("item removed", remove);
    res.send("item data removed");
};



module.exports = { alldata, alldatafind, mockd, mockdfind, Addtocart, getCartdata, getdeleteCart };