
const categories = deps => { 
 
  return {
    all: () => {
      const {client,errorHandler} = deps
      return new Promise((resolve,reject)=>{
        client.query('SELECT id,name FROM category ORDER BY name ASC', (error, results) => {
          if (error) {
            errorHandler(error,'Falha ao listar as categorias',reject);
          }else{
            resolve({categories: results.rows})    
          }         
        })
      })
    },
    save: (name) => {},
    update: (id,name) => {},
    del: (id) => {},
  }
}

module.exports = categories



