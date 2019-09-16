const express = require("express");

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "There" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
