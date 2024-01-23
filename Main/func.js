const mockData = require('../dataModel/data')
const videodata = require('../dataModel/videodata')
const { videoTutorial, datavideo } = require('../dataModel/MODEL/Schema')


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
module.exports = { alldata, alldatafind };