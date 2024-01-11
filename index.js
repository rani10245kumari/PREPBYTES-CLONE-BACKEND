const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("hello");
})
const port = 5000;
app.listen(port, () => {
    try {
        console.log("server is running")
    }
    catch {
        console.log("server is not running")
    }
})
