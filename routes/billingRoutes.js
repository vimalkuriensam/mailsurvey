const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const requireLogin = require("../middlewares/requireLogin");

const billingRoutes = express.Router();

billingRoutes.post("/stripe", requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 credits",
    source: req.body.id
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = billingRoutes;
