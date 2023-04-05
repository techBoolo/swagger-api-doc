1. installation

 `npm i swagger-ui-express`

if we are using jsdoc

 `npm i swagger-jsdoc`

2. define our api options

./swagger.js

``` 
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
``` 

3. create a new swagger api using our api options

./swagger.js

``` 
  import swaggerJsdoc from 'swagger-jsdoc'
  const options: { // step 2. }
  const specs = swaggerJsdoc(options)
``` 

4. export a function that adds a swagger middleware to our express app
``` 
  import swaggerUi from 'swagger-ui-express'
  const options = { // step 2.}
  const specs = // step 3.
  export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
  }
  //it is also possible to export the specs and construct the middleware in the 'app.js' file.
``` 

5. add the middleware in our express app
'./app.js'

``` 
  import swagger from './swagger.js'
  ...
  const app = express()
  swagger(app)
  app.listen(3001)
``` 

6. start the server and visit the route defined in the swagger middleware

 `http://localhost:3001/api-docs`

7. define the openapi definitions for our api in the `routes/*.js` file, since we point
our apis definition there(see step 2)
