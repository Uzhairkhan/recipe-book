const express = require("express");
const router = express.Router();
const usersController = require("../app/controller/userController");
const { authenticateUser } = require("../app/middleware/authenticateUser");
const { upload } = require("../app/middleware/multer");

const recipeController = require("../app/controller/recipeController");

router.post("/users/register", usersController.register);
router.post("/users/login", usersController.login);
router.get("/users/account", authenticateUser, usersController.account);
router.delete("/users/logout", authenticateUser, usersController.logout);

router.post("/recipe/add", upload, authenticateUser, recipeController.create);
router.get("/recipe/list", recipeController.list);
router.get("/recipe/show/:id", authenticateUser, recipeController.show);
router.put(
  "/recipe/update/:id",
  upload,
  authenticateUser,
  recipeController.update
);
router.delete("/recipe/delete/:id", authenticateUser, recipeController.delete);

module.exports = router;
