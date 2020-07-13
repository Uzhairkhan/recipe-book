const { User } = require("../model/User");
const _ = require("lodash");

const authenticateUser = (req, res, next) => {
  //get the token from the header
  const token = req.header("authToken");

  User.findByToken(token)
    .then((user) => {
      if (user) {
        req.user = _.pick(user, ["_id", "name", "email"]);
        req.token = token;
        next();
      } else {
        res.status("401").send("token not available");
      }
    })
    .catch((err) => {
      res.status("401").send(err);
    });
};

module.exports = {
  authenticateUser,
};
