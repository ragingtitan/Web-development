const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Discord = require("discord.js");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000; // Use a port number above 1024

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.login("aca85569715a64695565fa8824d661d00f21f00cb94c3a604a9e866c99875b39");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
