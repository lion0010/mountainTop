var express = require('express');
var router = express.Router();
var User = require("../model/User");
var common = require("../")
router.get('/account', (req, res) => {
    res.render("account");
});

router.post("/account", (req, res) => {

    let { city, school, company, website } = req.body;
    User.update(username, city, function(err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc) {
            console.log("更改成功" + doc)；
        }
    })
});
module.exports = router;