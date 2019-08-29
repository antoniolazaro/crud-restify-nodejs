const db = require('../services/db/connectionPostgres')

const routes = (server) => {
// define qual resposta para chamada do contexto default
  server.get('/', (req, res, next) => {
    res.send('Welcome to the Jungle')
    next()
  })

  server.get('/categorias', async(req, res, next) => {
    
    try{
      res.send(await db.categories().all());
      next()
    }
    catch(error){
      res.send(error)
      next()
    }
   
    // db.categories().all().then(categories => {
    //   res.send(categories)
    //   next()
    // }).catch(error => {
    //   res.send(error)
    //   next()
    // })
  })

  server.get('/categoria',(req, res, next) => {

    res.send(['1','lalala'])
    next()

  })

  server.post('/categoria',(req, res, next) => {

    const {name} = req.params
    res.send(name)
    next()

  })

//   server.put('/categoria',(req, res, next) => {

//     res.send()
//     next()

//   })

//   server.delete('/categoria',(req, res, next) => {

//     res.send()
//     next()

//   })
}

module.exports = routes
