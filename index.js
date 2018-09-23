require('dotenv').config();
require('./functions.js');
const request = require('then-request');
const Promise = require("bluebird");
const Discord = require('discord.js');

const client = new Discord.Client();
p

var token = process.env.TOKEN;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content == 'testGet') {

    try {
      
      let res = request('GET', 'http://example.com').done(res => {

        let body = res.getBody();
        if(body) {
          var textResponse = coalesce(body.status,body.text));
          console.log(textResponse);
          return msg.reply(textResponse);
        }else{
          var vRes = coalesce('string',res,res.getBody(),res.text);
          throw new Error({message:vRes,code:res.getBody().status});
        }

      });

    }
    catch(e){
      let errorText = coalesce('string',e.message,e.body,e.text,e.toString());
      console.log(errorText);
      return msg.reply(errorText);
    }


  }
});

client.login(token);
