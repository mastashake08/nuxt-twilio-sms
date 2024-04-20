const fs = require("fs");
require('dotenv').config();
const { parse } = require("csv-parse");
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const pplToMessage = []
fs.createReadStream("./sheet2.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
    try {

  console.log("Sending messages")
      var message = client.messages.create({
        body: `Thank you everyone who attended today's LouiEvolve Love event! - CTCT`,
        from: process.env.TWILIO_NUM,
        mediaUrl: ['https://raw.githubusercontent.com/mastashake08/jcompsolu-call-center/master/IMG_7725.JPG'],
        to: row[1]
      })
      .then(message =>  console.log(message.status))
     
    } catch (error) {
      console.log(error)
    }
  }).done();


  export default defineEventHandler(async (event) => {
    // ... Do whatever you want here
  })
  