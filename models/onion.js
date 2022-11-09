const mongoose = require("mongoose")
const onionSchema = mongoose.Schema({
onion_weight: String,
onion_price: Number,
onion_color: String
})
module.exports = mongoose.model("onion", onionSchema)