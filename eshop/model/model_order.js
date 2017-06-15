var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({

	delivery_sn:String,
	order_sn:String,
	add_time:Number,
	shipping_name:String,//上门取货
	usr_id:Number,
	consignee:String,
	address:String,
	country:String,
	province:String,
	city:String，
	district:String,
	email:String,
	mobile:String,
	status:String,
	shipping_fee:Number,

});

module.exports = mongoose.model('order', OrderSchema);