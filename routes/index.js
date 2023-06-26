var express = require('express');
var router = express.Router();

const data = {
  title:  "express web server",
  description: "We are using express to serve htm using jade template",
  subtitle: "Jade and express",
  link:"https://bocacode.com",
  linkText:"Boca code",
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
