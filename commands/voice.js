module.exports = async (message,arg)=>{
    if (!message.guild) return;
    
    if (message.member.voice.channel) {
      const connect = await message.member.voice.channel.join();
      // if(connect){
      //     message.channel.send('Open your eyes am already in!');
      // }
      message.channel.send('Swagat nehi karoge hamara!');
      const dispatcher = connect.play('Audio/oh yeah.mp3');
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
}


