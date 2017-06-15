var mongoose = require('../routes/mongodb.js'),
    Schema = mongoose.Schema;

var GoodSchema = new Schema({
   goodname:String,
   goodsn:String,
   is_onsale:{type:Number, default:0},
   is_refined:{type:Number, default:0},
   is_hot:{type:Number, default:0},
   recommand_rank:{type:Number, default:100},
   stock:{type:Number, default:100},
   sold_volume:{type:Number, default:0},
   goodcatid:String,
   goodpic:String,
   goodthumbnail:String,
   original_img:String,
   click_count:Number,
   market_price:Number,
   shop_price:Number,
   promote_price:Number,
   promote_start:{type:Number, default:0},
   promote_end:{type:Number, default:0},
   goodbrief:String,
   goods_desc:String,
   is_shipping:Number,
   integral:Number, //积分
   create_time:{type:Number, default:new Date().getTime()},
   is_promote:Number,
   last_update:Number,
   shopid:String,

});

module.exports = mongoose.model('good', GoodSchema);
