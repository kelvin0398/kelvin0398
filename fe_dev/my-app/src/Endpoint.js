const ngrok = require('@ngrok/ngrok')
require('dotenv').config();

async function myEndPoint(){
  
  const listener = await ngrok.forward(({
    addr : 3000,
    domain : process.env.SERVER_DOMAIN,
    authtoken : process.env.SERVER_AUTH_TOKEN, 
    traffic_policy : '{"on_http_request": [{"actions": [{"type": "oauth","config": {"provider": "google"}}]}]}'
  }))

  console.log("INFO: Your Portfolio Endpoint is running on: ", listener.url());
  process.stdin.resume();
}

myEndPoint();