var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  name: String,
  instock: Boolean,
  price: Number,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);
