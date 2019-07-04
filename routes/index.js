import index from '../conctrollers/index'
import authoriz from '../conctrollers/authoriz'

export default app => {
  app.get('/', index)
  app.get('/authoriz', authoriz.singout)
}