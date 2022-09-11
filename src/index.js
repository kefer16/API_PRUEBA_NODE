const express = require('express');
const v1Router = require('./v1/routers/categoryRouters');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8090;

app.use('/api/v1/category', v1Router);

app.listen(PORT, () => {
	console.log(`Server escuchando en el puerto ${PORT}`);
});


const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Express API Prueba',
		version: '1.0.0',
		description: 'Pruebas de API con Express y SQL',
		contact: {
			name: 'Kevin Morales',
			url: 'https://github.com/kefer16',
		}
	},
	servers: [
		{
			url: 'http://localhost:8090',
			description: 'Development server',
		}
	],
	basePath: '/api/v1'
};

const options = {
	swaggerDefinition,
	apis: ['./src/v1/routers/*.js']
};

const swaggerDocs = swaggerJsdoc(options);

app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
