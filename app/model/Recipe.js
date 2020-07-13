const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  images: {
    type: Array,
    default: undefined,
  },
  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: Array,
    default: undefined,
  },
  steps: {
    type: Array,
    default: undefined,
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
