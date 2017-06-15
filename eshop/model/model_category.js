var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({

	cat_name:String,
	keywords:String,
	cat_desc:String,
	parent_id:Number,
	sort_order:Number,
	show_in_nav:{type:Number, default:0},
	is_show:{type:Number, default:0},
	is_top_show:{type:Number, default:0},
	cat_icon:String,

});

module.exports = mongoose.model('category', CategorySchema);