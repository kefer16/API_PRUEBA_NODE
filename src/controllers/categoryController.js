const categorieService = require("../services/categoryService");

const getAllCategories = async (req, res) => {
	const allCategories = await categorieService.getAllCategories();
	console.log(allCategories);
	res.send({ response: "OK", data: allCategories });
};

const getOneCategories = async (req, res) => {
	const oneCategories = await categorieService.getOneCategories(
		req.params.categorieId
	);

	req.send({ status: "OK", data: oneCategories });
};

module.exports = {
	getAllCategories,
	getOneCategories,
};
