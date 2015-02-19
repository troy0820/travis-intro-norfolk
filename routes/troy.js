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
	res.render('troy',{ name: 'Troy\'s ID page', title: 'Troy\'s id page', id:id, num:num });	
	}
); 
module.exports = router;

