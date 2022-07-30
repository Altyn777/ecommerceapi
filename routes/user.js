const router = require("express").Router();

/** REST API
 * /api/user/usertest is an end point
 **/
router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("your username is: " + username);
});

module.exports = router;
