var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({

	Comment_id:String,
	Comment_type:String,
	goodid:String,
	username:String,
	content:String,
	comment_rank:Number,
	create_time:{type:Number, default: new Date().getTime()},
	ip_address:String,
	status:Number,
	path:{type: String, index: true},//树结构物化路径
	usrid:String,
});

module.exports = mongoose.model('comment', CommentSchema);