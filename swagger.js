import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'swagger demo',
      version: '1.0.0',
      description: 'demo api to document using swagger'
    },
  },
  apis: [ './routes/*.js' ]
}

const specs = swaggerJsdoc(options)

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
