console.log("hello bro...hui hui");

require('dotenv').config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();//clint is a object which connects with discord api to run the bot
client.login(process.env.BOTTOKEN)
// on is to handle any perticular event
// client.on('ready', ()=>{
//     console.log('hii...hui hui hui');
// });
//host it on heroku or glitch
let reply = [
    'han bro bol na',
    'kya hua re madarchood',
    'namaste beta namaste',
    'abe laude apna kaam kaar'
]
client.on('message', async message =>{
    let tokens =  message.content.split(' ');//breaks the content into array of strings
    if(tokens[0] === 'hello dogeee'){
        const index = Math.floor(Math.random()*reply.length);
        message.channel.send(reply[index]);//it will send replys without mentioning the user(to mention just msg.reply)
    }
    
    //voice oly works on a guild(server)
    //if its not a server we will simply ignore it!
    if(!message.guild) return;

    //join the audio channel
    if(tokens[0]==='!join'){
        if(message.member.voice.channel){
            const connect = await message.member.voice.channel.join();
            // if(connect){
            //     message.channel.send('Open your eyes am already in!');
            // }
            message.channel.send('Swagat nehi karoge hamara!');
            const dispatcher = connect.play('Audio/oh yeah.mp3');
            
        }
        else{
            message.channel.send('You need to join a voice channel first!');
        }
    }
    // send gif
    else if(tokens[0]==='!gif'){
        let keywords = 'welcome';
        if(tokens.length>1){
            keywords = tokens.slice(1, tokens.length).join(' ');
            // slice will take strings from token index 1 to end and then join will join them back separated with space
        }
        let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random()*json.results.length);
        message.channel.send(json.results[index].url,'Tenor GIF: '+ keywords);
        // console.log(json)
    }
   

})



