var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log("get call from login");
    res.send("get call from login");
});

/* POST users listing. */
router.post("/", (req, res) => {
    let userid = req.body.userid;
    let password = req.body.password;
    // console.log(req.body);
    if (req.body.userid === "rathodramesh213@gmail.com" && req.body.password === "Ramesh@123") {
        console.log({
            userid: userid,
            password: password,
            allowlogin: true,
            status: 200,
        });
        res.send({
            userid: userid,
            password: password,
            allowlogin: true,
            status: 200,
        });
    }
});

module.exports = router;