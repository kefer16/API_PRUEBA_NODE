/* eslint-disable no-undef */
require('dotenv').config()

const config = 
{
    server: process.env.API_DB_SERVER,
    database: process.env.API_DB_DATABASE,
    user: process.env.API_DB_USUARIO,
    password: process.env.API_DB_PASSWORD,
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false
        //instancename : '<nombre instancia>' en caso tenga alguna instancia
    }
}
module.exports = config;