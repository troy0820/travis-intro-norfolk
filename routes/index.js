var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	var num = Math.floor((Math.random() *100) +1 );
        var quote = 'To avoid criticism say nothing, do nothing, be nothing. - Aristotle';
	res.render('index', { 
	title: 'Welcome to ', 
	name: 'Troy\'s New App', 
	num:num, 
	quote:quote
	 });
});

module.exports = router;
