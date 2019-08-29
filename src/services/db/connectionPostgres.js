const {Client} = require('pg')

const client = new Client({
  user: 'consilium_pcp',
  host: 'localhost',
  database: 'consilium',
  password: 'consilium_pcp',
  port: 5432
})
client.connect()

const errorHandler = (error,msg,rejectFunction) =>{
  console.error(error);
  rejectFunction({error:msg})
}

const categoryModule =  require('./categoryPostgres')({client, errorHandler})

module.exports = {
   categories: () => categoryModule
}