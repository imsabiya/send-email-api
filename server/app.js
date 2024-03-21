//console.log("do it");

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey("SG.APIKEY");

app.post("/send-email", async (req, res) => {
  //console.log(req.body);
  const { to, subject, text } = req.body;

  try {
    await sgMail.send({ to, from: "example@test.com", subject, text });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

const port = 5001;

app.listen(port, () => {
  console.log(`server listening to ${port}`);
});
