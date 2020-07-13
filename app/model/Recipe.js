const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  images: {
    type: String,
  },

  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  steps: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Recipe = mongoose.model("Recipe", recipeSchema);
