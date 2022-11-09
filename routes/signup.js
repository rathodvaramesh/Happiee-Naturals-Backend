var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log("get call from signup");
    res.send("get call from signup");
});

/* POST users listing. */
router.post("/", (req, res) => {
    const email = req.body.email;
    res.send({ email });
});

module.exports = router;