var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
	res.render('troy',{ name: 'Troy Connor', title: 'Troy\'s Route page' });
	}
);

router.get('/:id', function(req, res) { 
	var id = req.params.id;
	res.render('troy',{ name: 'Troy Connor', title: 'Troy\'s id page', id:id });	
	}
); 
module.exports = router;

