var config = require("./bdconfig")
const sql = require("mssql")

async function getcategoria() {
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("SELECT * FROM TMP_CATEGORIA")
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getcategoria_x_id(cat_id) {
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request()
        .input("input_parameter", sql.Int, cat_id)
        .query("SELECT * FROM TMP_CATEGORIA where cat_id = @input_parameter")
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}


async function insert_categoria(categoria) {
    try {
        let pool = await sql.connect(config);
        let Insertcate = await pool.request()
        .input("cat_id", sql.Int, categoria.cat_id)
        .input("cat_nom", sql.VarChar, categoria.cat_nom)
        .input("cat_obs", sql.VarChar, categoria.cat_nom)
        .execute("nps_inset_cat")
        return Insertcate.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function update_categoria(categoria) {
    try {
        let pool = await sql.connect(config);
        let Updatecate = await pool.request()
        .input("cat_id", sql.Int, categoria.cat_id)
        .input("cat_nom", sql.VarChar, categoria.cat_nom)
        .input("cat_obs", sql.VarChar, categoria.cat_nom)
        .execute("nps_update_cat")
        return Updatecate.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getcategoria: getcategoria,
    getcategoria_x_id: getcategoria_x_id,
    insert_categoria: insert_categoria,
    update_categoria: update_categoria
}