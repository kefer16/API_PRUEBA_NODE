const bdconfig = require("./bdconfig");
const sql = require("mssql");

const  getAllCategories = async () => {
	try {
		let pool = await sql.connect(bdconfig);
		let categorias = await pool.request().query("SELECT * FROM TMP_CATEGORIA");
		return categorias.recordsets;
		
	} catch (error) {
		console.log(error);
	}

};

const getOneCategories = async (cat_id) => {
	try {
		let pool = await sql.connect(bdconfig);
		let categorias = await pool
			.request()
			.input("input_parameter", sql.Int, cat_id)
			.query("SELECT * FROM TMP_CATEGORIA where cat_id = @input_parameter");
			return categorias.recordsets;
	} catch (error) {
		console.log(error);
	}
};


module.exports = {
	getAllCategories,
	getOneCategories,
};
