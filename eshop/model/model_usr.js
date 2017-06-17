var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    phonenum:{type: String},
    userpwd:{type: String},
    tradepwd:{type: Number},
    referee:{type: String},
    realname:{type: String},
    ID:{type: String},
    IDPhotofront:{type:String},
    IDPhotoback:{type: String},
    address:{type: String},
    bankname:{type: String},
    bankaddress:{type: String},
    bankaccount:{type: String},
    isactive:{type: Number, default:0},
    shopid:{type: String},
    agentclass:{type: Number, default:0},
    points:{type: Number, default:0},
    permission:{type: Number, default:0}, //权限目前就3个等级， 0普通， 1高级， 2管理员
    referee_path:{type:String, default:null}
});

module.exports = mongoose.model('user', UserSchema);
