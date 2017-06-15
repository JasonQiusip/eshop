var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    phonenum:{type: String},
    userpwd:{type: String},
    tradepwd:{type: Number},
    referee:{type: String},
    realname:{type: String},
    ID:{type: String},
    IDPhotofront:(type: String),
    IDPhotoback:{type: String},
    address:{type: String},
    bankname:{type: String},
    bankaddress:{type: String},
    bankaccount:{type: String},
    isactive:{type: Number},
    shopid:{type: String},
    agentclass:{type: Number, default:0},
    points:{type: Number, default:0},
    permission:{type: Number, default:0}
});

module.exports = mongoose.model('user', UserSchema);
