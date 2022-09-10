var Categoria = require("./categoria");
const bbocategoria = require("./dbcategoria");
// requerido en todos
var express = require("express");
var bodyParset = require("body-parser");
var cors = require("cors");
const { request, response } = require("express");
const dbcategoria = require("./dbcategoria");

var app = express();
var router = express.Router();
app.use(bodyParset.urlencoded({extended : true}));
app.use(bodyParset.json());
app.use(cors());
app.use("/api", router); // ruta principal

// ruta por categoria
router.route("/categoria").get((request,response) =>{
    dbcategoria.getcategoria().then(result =>{
        response.json(result[0]);
    } )
})


//ruta por id
router.route("/categoria/:id").get((request,response) =>{
    dbcategoria.getcategoria_x_id(request.params.id).then(result =>{
        response.json(result[0]);
    } )
})

//ruta por id
router.route("/categoria/guardar").post((request,response) =>{
    let categoria = {...request.body}
    dbcategoria.insert_categoria(categoria).then(result =>{
        response.json(result[0]);
    } )
})

//ruta por id
router.route("/categoria/actualizar").post((request,response) =>{
    let categoria = {...request.body}
    dbcategoria.update_categoria(categoria).then(result =>{
        response.json(result[0]);
    } )
})


var port = process.env.port || 8090;
app.listen(port);
console.log("categoria API Iniciado en el pueto:" + port); // Mensaje de incio de servicio