import express from 'express'

const router = express()

router.route('/')
  /**
   *@swagger
   * /users:
   *  get: 
   *    description: return list of users
   *    responses:
   *      '200':
   *        description: an array of users
   *        content:
   *          application/json:
   *              schema:
   *                type: array
   *                items:
   *                  type: object
   *                  properties:
   *                    id:
   *                      type: integer
   *                      example: 1
   *                    name:
   *                      type: string
   *                      example: 'joe'
   *                    email:
   *                      type: string
   *                      example: 'joe@email.com'
   *                  
   */
  .get((req, res) => {
    res.status(200).json({ message: 'list of users' })
  })
  /**
   *@swagger
   * /users:
   *  post: 
   *    description: create a new user
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *                example: 'joe'
   *              email:
   *                type: string
   *                example: 'joe@email.com'
   *              password:
   *                type: string
   *                example: 'p@ssw06'
   *      responses:
   *        '201':
   *          description: created
   */
  .post((req, res) => {
    res.status(200).json({ message: 'create new user' })
  })

router.route('/:id')
  /**
   *@swagger
   * /users/{id}:
   *  get:
   *    description: return a user by their id
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        description: id of the user
   *        schema:
   *          type: integer
   *          minimum: 1
   *    responses:
   *      '200':
   *        description: a user object.
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      '400':
   *        description: invalid id number
   *      '404':
   *        description: a user with the specified id was not found
   *      default:
   *        description: unexpected error
   *
   */
  .get((req, res) => {
    res.status(200).json({ message: 'list of users' })
  })

  /**
   *@swagger
   * components:
   *  schemas:
   *    User:
   *      type: object
   *      properties:
   *        id:
   *          type: integer
   *          example: 1
   *        name:
   *          type: sting
   *          example: 'joe'
   *        email:
   *          type: string
   *          example: 'joe@email.com'
   *      required:
   *        - id
   *        - email
  */
export default router
