var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var GoodTypeSchema = new Schema({

	cat_name:String,
	enabled:{type:Number, default:1},

});

module.exports = mongoose.model('good_type', GoodTypeSchema);