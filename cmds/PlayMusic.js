const ytdl = require('ytdl-core');
const ffmpeg=require('ffmpeg-binaries')
const discord = require("discord.js");
const config = require('../config');

module.exports = function(bot){
    bot.on('message', async message =>{
        //if(message.author.id = discord.User.id) return;
        if(message.content.startsWith(config.prefix+"play")){
            if(!message.guild) return message.channel.send("This only works inside a guild!");
            if (!message.member.voiceChannel) return message.channel.send('You have to be connected to a voice channel inorder to play music.')
            const args = message.content.split(1).join(' ');
            if(!args) return message.channel.send("Please put a url after the command.")
            let valid = await ytdl.validateURL(args);
            if(!valid) return message.channel.send("Please put a valid url.")
            let info = await ytdl.getInfo(args);
            const connection = await message.member.voiceChannel.join();
            const dispatcher = connection.playArbitraryInput(ytdl(args,{filter: 'audioonly'})).catch(console.log(error));
            message.channel.send("Now playing:\n"+info.title)
        }
    })
}