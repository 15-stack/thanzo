const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env"});

const serverless = require("serverless-http");

const router = express.Router();





// Serving static files from React

app.use(express.static(path.join(__dirname, "client/build")));

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// API endpoint

router.get("/api/memberAdd", (req, res) => {
    mailchimp
        .post(`/lists/${list_id}/members/`, {
            email_address: req.query.email,
            status: "subscribed"
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
});

app.use("./.netlify/functions/api", router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
})


const port = process.env.PORT || 5000 ;
app.listen(port);

console.log(`Express listening on ${port}`)

module.exports.handler = serverless(app)