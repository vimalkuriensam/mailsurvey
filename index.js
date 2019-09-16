const express = require("express");

const PORT = process.env.port;
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "There" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
