var express = require('express');
var router = express.Router();
var User = require('../models/User');
var common = require('../vendor/common');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
<<<<<<< HEAD
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

//注册逻辑
router.post('/register', (req, res) => {
    let { username, password } = req.body;
    password = common.encryption(password);

    User.findOne({ username }, (err, doc) => {
        if (err) {
            res.locals.message = common.errorMessage('查找用户异常');
            return;
        }
        if (doc) {
            res.locals.message = common.errorMessage('用户名已注册');
            return;
        }
        User.create({ username, password }, (err, doc) => {
            if (err) {
                res.locals.message = common.errorMessage('注册异常');
                return;
            }
            if (doc) {
                res.locals.message = "注册成功";
                return;
            }
            res.locals.message = common.errorMessage('注册用户失败');
            return;
        })
    })
});


=======
router.get('/account', (req, res) => {
    res.render("account");
});
router.get("/commitAQuestion", function(req, res) {
    res.render("commitAQuestion");
})
>>>>>>> 6955a4e8078673886e571d4cca1f3bbea748fdb5
module.exports = router;