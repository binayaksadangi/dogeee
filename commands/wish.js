let reply = [
  'han bro bol na',
  'kya hua re madarchood',
  'namaste beta namaste',
  'abe laude apna kaam kaar',
];

module.exports = async (message,args) => {
  const index = Math.floor(Math.random() * reply.length);
  message.channel.send(reply[index]); //it will send replys without mentioning the user(to mention just msg.reply)
};
