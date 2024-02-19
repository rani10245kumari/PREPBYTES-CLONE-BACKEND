const express = require('express');
const app = express();
const routes = require('./router')
const routing = require('./route')
const mockdata = require('./dataModel/data')
const cors = require('cors')
const videoData = require('./dataModel/videodata');
const connection = require('./Config/db')
const SyllabusData = require('./dataModel/syllabusData')
const MentorData = require('./dataModel/mentordata')

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
app.get("/syllabusdata", (req, res) => {
    res.send(SyllabusData)
})

app.post("/purchasedCourse", (req, res) => {
    console.log(res.body)
})
app.get("/mentors", (request, response) => {
    response.send(MentorData)
})

app.use('/user', routing);
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
