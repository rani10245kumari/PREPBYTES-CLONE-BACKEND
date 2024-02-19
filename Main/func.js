const mockData = require('../dataModel/data')
const videodata = require('../dataModel/videodata')
const { videoTutorial, datavideo, dashboardmockSchema1 } = require('../dataModel/MODEL/Schema')
const { mentorCollection } = require('../dataModel/MODEL/MentorSchema')


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

//==============mentors data==============
const mentordata = async (req, res) => {
    try {
        const Mentors = await mentorCollection.create(mentorData)
        res.send(Mentors);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}
const mentordatafind = async (req, res) => {
    try {
        const Mentorsfind = await mentorCollection.find({})
        res.send(Mentorsfind);
    }
    catch (err) {
        res.send("inncorect response", err.message)
    }
}

/*------------Mockdata-Page-DASHBOARD--------------------*/
datapushtodasboard = async (req, res) => {
    const data = req.body;
    const learning = await dashboardmockSchema1.create(data);
    res.send(learning);
};

getdashpboardmock = async (req, res) => {
    const data = await dashboardmockSchema1.find({});
    res.send(data);
};



module.exports = { alldata, alldatafind, mockd, mockdfind, getdashpboardmock, datapushtodasboard, mentordata, mentordatafind };