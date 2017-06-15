var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({

	user_id:String,
	good_id:String,
	good_sn:String,
	good_name:String,
	market_price:Number,
	good_price:Number,
	goods_number:Number,
	is_shipping:{type: Number, default:0},
	enabled:{type:Number, default:1},

});

module.exports = mongoose.model('cart', CartSchema);