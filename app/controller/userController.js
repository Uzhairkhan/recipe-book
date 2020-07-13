const { User } = require("../model/User");
const _ = require("lodash");

module.exports.register = (req, res) => {
  const body = req.body;

  User.findOne({ name: body.name })
    .then((user) => {
      if (user) {
        res.json({ errors: "User Already Exists" });
      } else {
        User.findOne({ email: body.email })
          .then((user) => {
            if (user) {
             return res.status(400).json({ errors: "User Already Exists" });
            } else {
              const user = new User(body);
              user
                .save()
                .then(function (user) {
                  res.json({ message: "Successfully Registered" });
                })
                .catch(function (err) {
                  res.send(err);
                });
            }
          })
          .catch((err) => res.send(err));
      }
    })
    .catch((err) => res.send(err));
};

module.exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findByCredentials(email, password)
    .then((user) => {
      return user.generateToken();
    })
    .then((token) => {
      //creating own custom header
      res.json({ token: token });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.account = (req, res) => {
  const { user } = req;
  res.send(_.pick(user, ["_id", "name", "email"]));
};

module.exports.logout = (req, res) => {
  const { user, token } = req;
  res.send({ notice: "succesfully logged out" });
  //   User.findByIdAndUpdate(user._id, { $pull: { tokens: { token } } })
  //     .then(() => {
  //       res.send({ notice: "succesfully logged out" });
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
};
