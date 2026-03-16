const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      airline: "Syrian Air",
      from: "Damascus",
      to: "Dubai",
      price: 350
    },
    {
      id: 2,
      airline: "Cham Wings",
      from: "Damascus",
      to: "Istanbul",
      price: 280
    }
  ]);
});

module.exports = router;
