var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var AdminUserSchema = new Schema({
    username:{type: String},
    userpwd:{type: String},
    permission:{type: Number, default:0}
});

module.exports = mongoose.model('admin_user', AdminUserSchema);
