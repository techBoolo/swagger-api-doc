import express from 'express'
import userRoute from './routes/user.js'
import swaggerUi from 'swagger-ui-express'
import swagger from './swagger.js'

const app = express()

app.use('/users', userRoute)

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
swagger(app)
app.listen(3001, () => {
  console.log('server running' );
})
