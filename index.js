const express = require('express');
const app = express();
const routes = require('./router')
const mockdata = require('./dataModel/data')
const cors = require('cors')


app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.get("/", (req, res) => {

    res.send(mockdata)
})

app.use('/pages', routes)


const port = 5000;
app.listen(port, () => {
    try {
        console.log("server is running")
    }
    catch {
        console.log("server is not running")
    }
})
