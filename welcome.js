module.exports = async member =>{
  // Create an event listener for new guild members
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === 'member-log'
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bhosdike ${member} tu bhi aagaya!`);
}