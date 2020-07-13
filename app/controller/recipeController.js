const Recipe = require("../model/Recipe");

module.exports.list = (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.send(err));
};

module.exports.create = (req, res) => {
  const { body, user } = req;
  const recipe = new Recipe(body);
  recipe.user = user._id;
  recipe.images = req.file.path;
  recipe
    .save()
    .then((recipe) => res.json(recipe))
    .catch((err) => res.send(err));
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Recipe.findOne({ _id: id, user: req.user._id })
    .select("")
    .then((recipe) => res.json(recipe))
    .catch((err) => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Recipe.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true })
    .then((recipe) => res.json(recipe))
    .catch((err) => res.send(err));
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Recipe.findOneAndDelete({ _id: id, user: req.user._id })
    .then((recipe) => res.json(recipe))
    .catch((err) => res.send(err));
};
