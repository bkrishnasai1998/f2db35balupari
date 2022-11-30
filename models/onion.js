const mongoose = require("mongoose")
const onionSchema = mongoose.Schema({ 
onion_weight: {type:String, maxLength:10},
onion_price: {type:Number,max:100,min:5},
onion_color: String
})
module.exports = mongoose.model("onion", onionSchema)