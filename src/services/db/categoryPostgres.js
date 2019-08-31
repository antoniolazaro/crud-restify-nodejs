
const categories = deps => { 
 
  return {
    all: () => {
      return new Promise((resolve,reject)=>{
        const {client,errorHandler} = deps      
        client.query('SELECT id,name FROM category ORDER BY name ASC', (error, results) => {
          if (error) {
            errorHandler(error,'Falha ao listar as categorias',reject);
          }else{
            resolve({categories: results.rows})    
          }         
        })
      })
    },
    save: (name) => {
      return new Promise((resolve,reject)=>{
        const {client,errorHandler} = deps    
        client.query('insert into category (name) values($1) RETURNING *',[name], (error, results) => {
          if (error) {
            errorHandler(error,`Falha ao salvar a categoria ${name}`,reject);
          }else{
            resolve({categories: results.rows})    
          }         
        })
      })
    },
    update: (id,name) => {
      return new Promise((resolve,reject)=>{
        const {client,errorHandler} = deps    
        client.query('update category set name = $1 where id = $2',[name,id], (error, results) => {
          if (error) {
            errorHandler(error,`Falha ao salvar a categoria ${name}`,reject);
          }else{
            resolve({message:'Categoria atualizada com sucesso'})    
          }         
        })
      })
    },
    del: (id) => {
      return new Promise((resolve,reject)=>{
        const {client,errorHandler} = deps    
        client.query('delete from category where id = $1',[id], (error, results) => {
          if (error) {
            errorHandler(error,`Falha ao salvar a categoria ${id}`,reject);
          }else{
            resolve({message:'Categoria removida com sucesso'})    
          }         
        })
      })
    },
  }
}

module.exports = categories



