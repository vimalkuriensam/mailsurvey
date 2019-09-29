const express = require("express");
require("./views/db/mongoose");
require("./views/models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

const googleRoute = require("./routes/authRoutes");
const apiRoute = require("./routes/apiRoutes");
const billingRoute = require("./routes/billingRoutes");

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth/google", googleRoute);
app.use("/api", apiRoute);
app.use("/api", billingRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
