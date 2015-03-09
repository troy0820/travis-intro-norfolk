var express = require('express');
var router = express.Router();



router.get('/',function(req,res) {
	var num = Math.floor((Math.random() * 100) +1);
	res.render('troy',{ name: 'Troy Connor', title: 'Troy\'s Route page', num:num });
	}
);

router.get('/:id', function(req, res) { 
	var id = req.params.id;
	var num = Math.floor((Math.random() * 100) + 1);
	res.render('troy',{ name: 'Troy\'s ID page SON!!!!', title: 'Troy\'s id page', id:id, num:num });	
	}
); 

router.post('/', function(req,res, next) {
	var name = req.body.troy;
	var num = Math.floor((Math.random() * 100) +1);
	var id = 'This is the new ID for the Posted route';
	res.render('troy',{ name:name, title: 'Posted from the post route', id:'New page', num:num });
	
});



module.exports = router;

