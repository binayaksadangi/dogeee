const gif = require('./commands/gif');
const wish = require('./commands/wish');
const voice = require('./commands/voice');
const meme = require('./commands/meme');

const commands = {wish,gif,voice,meme};

module.exports = async (message) => {
  let tokens = message.content.split(' '); //breaks the content into array of strings
  let command = tokens.shift();
  if(command.charAt(0)==="."){
    command= command.substring(1);
    commands[command](message,tokens);
  }

};