const swaggerJsDoc = require('swagger-jsdoc');
const swagerUiExpress = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'EJEMPLO',
            description: 'EJEMPLO',
            version: '1.0.0'
        },
        servers: [
            {
                url: '/api'
            },
        ]
    },
    apis: ['src/utils/documentation/specification.yaml']
}

const swaggerSpec = swaggerJsDoc(options);

module.exports = (path, app) => app.use(path, swagerUiExpress.serve, swagerUiExpress.setup(swaggerSpec));