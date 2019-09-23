const express = require("express");
require("./views/db/mongoose");
require("./views/models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

const googleRoute = require("./routes/authRoutes");
const apiRoute = require("./routes/apiRoutes");

const port = process.env.PORT;
const app = express();
app.enable("trust proxy");

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
