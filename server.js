const client= require('./client');
const express = require('express');
const axios = require('axios');
const app = express();
app.get('/', async function(req, res){
  const cacheValue = await client.get('todos');

  if(cacheValue) return res.json(JSON.parse(cacheValue));

  const {data}= await axios.get('https://dummyjson.com/users');
  await client.set('todos',JSON.stringify(data));
  await client.expire('todos', 30)
  return res.json(data);
});
app.listen(process.env.port|| 9000);

// async function init(){
 


// }
// init();