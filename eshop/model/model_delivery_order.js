var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({

	delivery_id:String,
	delivery_sn:String,
	order_sn:String,
	orderid:String,
	invoice_no:String,
	add_time:Number,
	shipping_id:String,
	shipping_name:String,//上门取货
	usr_id:Number,
	consignee:String,
	address:String,
	country:String,
	province:String,
	city:String，
	district:String,
	email:String,
	zipcode:String,
	tel:String,
	mobile:String,
	status:String,
	insure_fee:Number,//保险费用
	shipping_fee:Number,//送货费用

});

module.exports = mongoose.model('order', OrderSchema);