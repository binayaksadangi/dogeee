const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async (message, args) => {
    fetch('https://meme-api.herokuapp.com/gimme')
      .then((res) => res.json())
      .then( async json =>{
          let msg = await message.channel.send('ee lo bhosdike.. aab se full memebazi');
          const memeEmbed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url);
            msg.edit(memeEmbed)
      })

    }