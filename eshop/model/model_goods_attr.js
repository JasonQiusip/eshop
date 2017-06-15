var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var GoodAttrSchema = new Schema({

	goods_id:String,
	attr_value:String,
	attr_price:Number,
	thumb_url:String,
	hex_color:String,
});

module.exports = mongoose.model('good_attr', GoodAttrSchema);