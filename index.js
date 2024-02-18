const express = require('express');
const app = express();
const routes = require('./router')
const routing = require('./route')
const mockdata = require('./dataModel/data')
const cors = require('cors')
const videoData = require('./dataModel/videodata');
const connection = require('./Config/db')
const SyllabusData = require('./dataModel/syllabusData')
const mentorCollection = require("./dataModel/mentordata")

app.use(express.json())
app.use(cors({
    origin: "*"
}))




const stripe = require("stripe")(
    "sk_test_51OFIomSI0xtOp9M48W366HBE5QDo7oR2HKZyLVW2Dg9YNvJ95E2aIVJbHen4bLdsrwsraF190ouIGyLXRta4GpFs00GW4XRqmb"
);

app.post("/out/create-checkout-session", async (req, res) => {
    const { Cartitem } = req.body;
    const lineItems = [{
        price_data: {
            currency: "inr",
            product_data: {
                name: Cartitem.testTitle,
            },
            unit_amount: Number(Cartitem.testPrice) * 100, // Replace with a valid amount
        },
        quantity: 1,
    }];
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "https://friendly-piroshki-b25051.netlify.app/",
        cancel_url: "https://friendly-piroshki-b25051.netlify.app/",
    });
    res.json({ id: session.id });
});


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
app.get("/mentors", async (request, response) => {
    const mentors = await mentorCollection.find({});
    return response.send(mentors)
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
