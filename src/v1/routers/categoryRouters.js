const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/categoryController');

router
	/**
	 * @swagger
	 * /:
	 *   get:
	 *     summary: Listar todas las categorias
	 *     description: descripcion lista.
	*/
	.get('/', categoriesController.getAllCategories)
	/**
	 * @swagger
	 * /{categoryId}:
	 *   get:
	 *     summary: Listar una sola categoria
	 *     description: descripcion lista.
	*/
	.get('/:categoryId', categoriesController.getOneCategory)
	/**
	 * @swagger
	 * /category_insert:
	 *   post:
	 *     summary: Inserta una sola categoria
	 *     description: descripcion lista.
	*/
	.post(
		'/category_insert',
		express.json({ type: 'application/json' }),
		categoriesController.postInsertCategories
	);

module.exports = router;
