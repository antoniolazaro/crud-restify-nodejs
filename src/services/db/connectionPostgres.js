const {Client} = require('pg')

const client = new Client({
  user: 'node',
  host: 'localhost',
  database: 'demo',
  password: 'node',
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