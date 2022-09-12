const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const v1Router = require('./src/v1/routers/categoryrouters');
const cors = require('cors')
require('dotenv').config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.API_SV_PORT;

const options = {
	swaggerDefinition : {
		openapi: '3.0.0',
		info: {
			title: 'Express API Prueba',
			version: '1.0.0',
			description: 'Pruebas de API con Express y SQL',
			contact: {
				name: 'Kevin Morales',
				url: 'https://github.com/kefer16',
			},
			license: {
				name: 'Apache 2.0',
				url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
			}
		},
		servers: [
			{
				url: 'http://localhost:8090',
				description: 'Development server',
			},
		],
	},
	apis: [ __dirname + '/src/v1/routers/categoryrouters.js'],
};

const swaggerDocs = swaggerJsdoc(options);
app.use(cors())
app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', v1Router);

app.listen(PORT, () => {
	console.log(`Server escuchando en el puerto ${PORT}`);
	console.log(options.apis);
	console.log(__dirname);
	console.log(swaggerUi);
});

