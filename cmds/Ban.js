const disc = require('discord.js');
const config = require('../config.js');

module.exports = function(bot){
    bot.on('message', async message => {
        if (message.content.startsWith(config.prefix+'ban')){
            const args = message.content.split(" ").slice(1)
            if(!message.member.roles.some(r=>["Super Admin","Admin"].includes(r.name))) return message.reply("You dont have the valid rank to do this!")

            let member = message.mentions.members.first();
            if(!member) return message.reply("Invalid member of the server.");
            if(!member.bannable) return message.reply("You cannot ban this user.")

            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No reason provided";

            await member.ban(reason)
                .catch(error => message.reply('Sorry '+message.author+' there was an error!\n'+error));
                const embed = new disc.RichEmbed()
                .setTitle("User banned :(")
                .setDescription(member.user.tag+" has been banned.")
                .setFooter("JSBot")
                message.channel.send(embed);
        }
    })
}
