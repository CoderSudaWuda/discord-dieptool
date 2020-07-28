const Discord = require('discord.js');
const client = new Discord.Client();
const emojiRegex = require('emoji-regex')();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.channel.name !== 'emote-only') return;
    let s = msg.content;
    s = s.replace(/:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>/g, '').replace(emojiRegex, '').replace(/\s+/g, '');
    
    console.log(s);
    if (s) msg.delete();
});
client.login(process.env.TOKEN);