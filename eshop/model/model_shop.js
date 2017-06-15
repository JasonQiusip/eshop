var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var ShopSchema = new Schema({

	shopid:String,
	shopname:String,
	userid:String,
	shopimg:String,
	shopimg_thumnail:String,
});

module.exports = mongoose.model('shop', ShopSchema);