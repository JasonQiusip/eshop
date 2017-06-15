var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	cat_id:String,
	title:String,
	content:String,
	keywords:String,
	add_time:{type: Number, default:new Date().getTime()}
	file_url:String,
	desc:String,

});

module.exports = mongoose.model('article', ArticleSchema);