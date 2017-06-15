var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var ArticleCatSchema = new Schema({

	cat_id:String,
	cat_name:String,
	cat_type:String,
	keywords:String,
	parent_id:String
	show_in_nav:Number,
	cat_desc:String,

});

module.exports = mongoose.model('article_cat', ArticleCatSchema);