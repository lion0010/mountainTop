var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/account', (req, res) => {
    res.render("account");
});
router.get("/commitAQuestion", function(req, res) {
    res.render("commitAQuestion");
})
module.exports = router;