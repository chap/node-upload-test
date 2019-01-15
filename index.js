const express = require("express");
const app = express();
const port = process.env.PORT || 3000

app.post("/herokutest", function (req, res) {
  res.status(500).send("Here there should be an error with valuable information for the user");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
