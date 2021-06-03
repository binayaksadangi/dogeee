const fetch = require('node-fetch');

module.exports = async (message, arg) => {
  let keywords = 'welcome';
  if (arg.length > 0) {
    keywords = arg.join(' ');
    // slice will take strings from token index 1 to end and then join will join them back separated with space
  }
  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  message.channel.send(json.results[index].url,`welcome`);
  // console.log(json)
};
