const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const categoriesController = require("../../controllers/categoryController");


router
    .get("/", categoriesController.getAllCategories)
    .get("/:categoryId", categoriesController.getOneCategories)

module.exports= router;