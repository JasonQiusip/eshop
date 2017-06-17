var express = require('express');
var router = express.Router();
var validator = require('validator');
var eventproxy = require('eventproxy');
/* GET users listing. */
router.post('/reg', function(req, resp) {

	var ep = new eventproxy();
    ep.fail(next);
    ep.on(pro_error, function (msg) {
        res.status(400).json({
            status: 40001,
            msg: msg,
        })
    });


  	var user = new user({
		phonenum:req.query.phone,
	    userpwd:req.query.pwd,
	    referee:req.query.referee,
	    realname:req.query.realname,
	    ID:req.query.identity,
	    IDPhotofront:req.query.id_front_photo,
	    IDPhotoback:req.query.id_back_phto,
	    address:req.query.address,
	    bankname:req.query.bankname,
	    bankaddress:req.query.bankaddress,
	    bankaccount:req.query.bankaccount,
	    agentclass:req.query.agentclass,
  	});

  	user.save(function(err, res)){
  		if (err) {
  			console.log("Error:" + err);
  			resp.status(500).send(err);
        }
        else {
        	resp.status(200).send("OK");
            console.log("Res:" + res);
        }
  	}
});

var checkReferee = function(phoneNumb, cb)
{

}

router.get("/admin/login", function(req, res){

	
});


router.get("/login", function(req, res){

	
});

router.get("/usrinfo", function(req, res){


});

module.exports = router;
