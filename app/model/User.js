const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return validator.isEmail(email);
      },
      message: function () {
        return "Invalid email format";
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (user.isNew) {
    bcryptjs.genSalt(10).then((salt) => {
      bcryptjs.hash(user.password, salt).then((encryptedPassword) => {
        user.password = encryptedPassword;
        next();
      });
    });
  } else {
    next();
  }
});

//own static method
userSchema.statics.findByCredentials = function (email, password) {
  const User = this;
  //if email field is empty
  if (!email) {
    return Promise.reject({ errors: "email field cannot be empty" });
  } else {
    //if email field is not empty find user in the DB whose email matches the entered email
    return User.findOne({ email })
      .then((user) => {
        if (!user) {
          return Promise.reject({errors: "invalid email/password"});
        }
        //if email is correct perforn the below operation
        //compare the incomming password with the DB users password
        return bcryptjs.compare(password, user.password).then((result) => {
          if (result) {
            return Promise.resolve(user);
          } else {
            return Promise.reject({errors: "invalid email/password"});
          }
        });
      })
      .catch();
  }
};

//own instance method
userSchema.methods.generateToken = function () {
  const user = this;
  const tokenData = {
    _id: user._id,
    username: user.name,
    createdAt: Number(new Date()),
  };

  const token = jwt.sign(tokenData, "shera_.786");

  return token;
};

userSchema.statics.findByToken = function (token) {
  const User = this;
  let tokenData;
  try {
    tokenData = jwt.verify(token, "shera_.786");
  } catch (err) {
    return Promise.reject(err);
  }
  return User.findOne({
    _id: tokenData._id,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
