const express = require("express");
const v1Router = require("./v1/routers/categoryRouters");

const app = express();
const PORT = process.env.PORT || 8090;

app.use("/api/v1/category", v1Router);

app.listen(PORT,() =>{
    console.log(`Server escuchando en el puerto ${PORT}`);
})