const express = require('express');
const app = express();
const routes = require('./router')
const mockdata = require('./dataModel/data')
const cors = require('cors')
const videoData = require('./dataModel/videodata')
const { videoTutorial, datavideo } = require('./dataModel/MODEL/Schema')
const connection = require('./Config/db')

app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.get("/", (req, res) => {

    res.send(mockdata)
})
app.get("/video", (req, res) => {
    res.send(videoData)
})

app.use('/pages', routes)


const port = 5000;
app.listen(port, async () => {
    try {
        await connection();
        console.log("Server started after connection");
    } catch (err) {
        console.log(err, "error ocuured");
    }
    console.log(`Server is running on http://localhost:${port}`);
});
