const db = require('../services/db/connectionPostgres')

const routes = (server) => {
// define qual resposta para chamada do contexto default
  server.get('/', (req, res, next) => {
    res.send('Welcome to the Jungle')
    next()
  })

  server.get('/categorias', async(req, res, next) => {
    
    try{
      res.send(await db.categories().all())
      next()
    }
    catch(error){
      res.send(error)
      next()
    }

  })
  

  server.post('/categoria',async (req, res, next) => {

    const {name} = req.params
    try{
      res.send(await db.categories().save(name))
      next()
    }
    catch(error){
      res.send(error)
      next()
    }

  })

  // server.put('/categoria',async (req, res, next) => {

  //   const {id,name} = req.params
  //   try{
  //     res.send(await db.categories().update(id,name))
  //     next()
  //   }
  //   catch(error){
  //     res.send(error)
  //     next()
  //   }

  // })

  server.del('/categoria',async (req, res, next) => {

    const {id} = req.params
    try{
      console.log(id)
      res.send(await db.categories().del(id))
      next()
    }
    catch(error){
      res.send(error)
      next()
    }

  })
}

module.exports = routes
