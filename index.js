const express = require('express');
const app = express();
const routes = require('./router')
//     app.get('/', (req, res) => {
//         res.send("hello");
//     })

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
