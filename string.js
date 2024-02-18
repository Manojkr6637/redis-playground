const client= require('./client');

async function init(){
  const result = await client.get('msg:1');
  // await client.expire('msg:1',5);
  console.log(result);

}

init();