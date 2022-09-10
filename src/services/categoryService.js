const Categories = require("../databases/categorySQL");

const getAllCategories = async () => {
	let allCategories = await Categories.getAllCategories();
	return allCategories[0];
};

const getOneCategories = async () => {
	const oneCategories = await Categories.getOneCategories();
	return oneCategories[0];
};

module.exports = {
	getAllCategories,
	getOneCategories,
};
