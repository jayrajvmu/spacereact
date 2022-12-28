const express = require('express');
const router = express.Router();
const db = require('../../db/mysql');
const moment = require('moment');


router.get('/',(req,res) => {
	let getWings = 'SELECT id,name FROM wings WHERE is_active = 0';
	let query = db.query(getWings, (err, result, fields) => {
		if (err) {
			res.send({"success":false,"message":"Something Went Wrong. Try Again Later."});
		} 
		else {
			res.send({"wing_name":result});
		}
	});	
});

module.exports = router;