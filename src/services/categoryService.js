const Categories = require('../databases/sql/category');

const getAllCategories = async () => {
	let allCategories = await Categories.getAllCategories();
	return allCategories[0];
};

const getOneCategory = async (cat_id) => {
	let oneCategories = await Categories.getOneCategory(cat_id);
	return oneCategories[0];
};

const postInsertCategory = async (categoria) => {
	let insertCategory = await Categories.postInsertCategories(categoria);
	return insertCategory[0][0];
};
module.exports = {
	getAllCategories,
	getOneCategory,
	postInsertCategory,
};
