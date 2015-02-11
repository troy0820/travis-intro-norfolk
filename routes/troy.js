var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
	res.render('troy',{ name: 'Troy Connor', title: 'Troy\'s Route page' });
	}
);
router.get('/:id', function(req, res) { 
	res.send("This is #" + req.params.id + " try");	
	}
); 
module.exports = router;

