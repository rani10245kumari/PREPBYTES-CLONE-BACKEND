const mongoose = require('mongoose');
const videoSchema = mongoose.Schema({
    videoPoster: String,
    videoTitle: String,
    videoDesc: String,
    videoCount: Number,
});
const dataSchema = new mongoose.Schema({
    testID: Number,
    testImg: String,
    testTitle: String,
    testCategory: String,
    testPrice: String,
});
const videoTutorial = mongoose.model("data", videoSchema);
const datavideo = mongoose.model("data2", dataSchema);

module.exports = {
    videoTutorial, datavideo
};