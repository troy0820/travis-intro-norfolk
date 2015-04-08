var express = require('express');
var router = express.Router();

var names = [];

router.get('/',function(req,res) {
	var num = Math.floor((Math.random() * 100) +1);
	res.render('troy',{ name: 'Troy Connor', title: 'Troy\'s Route page',id:'Get page ID', num:num, names:names });
	}
);

router.get('/:id', function(req, res) {
	var id = req.params.id.toUpperCase();
	var num = Math.floor((Math.random() * 100) + 1);
	res.render('troy',{ name: 'Troy\'s ID page SON!!!!', title: 'Troy\'s id page', id:id, num:num, names:names });
	}
);

router.post('/', function(req,res, next) {
	var name = req.body.troy;
	var num = Math.floor((Math.random() * 100) +1);
	var id = 'This is who posted to this route ' + name;
	names.push(name);
	res.render('troy',{ name:name, title: 'Troy\'s post route', id: id, num:num, names:names });


});



module.exports = router;
