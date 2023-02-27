const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  class: Number,
  profile: String,
  system: String,
});
module.exports = mongoose.model("products", productSchema);
