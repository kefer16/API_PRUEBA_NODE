const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/categoryController');

router
	/**
		@swagger
		'/api/v1/category': {
	       'get': {
				'description': 'My numeric endpoint',
				'responses': {
					'200': {
						'description': 'Returns a mysterious number'
					}
				}
			}
		}
 	*/
	.get('/category/', categoriesController.getAllCategories)

	.get('/category/:categoryId', categoriesController.getOneCategory)
	.post(
		'/category/category_insert',
		express.json({ type: 'application/json' }),
		categoriesController.postInsertCategories
	);

module.exports = router;
