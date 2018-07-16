const config = require('../config');
const discord = require('discord.js');
const math = Math

module.exports = function(bot){
    bot.on('message', async message =>{
        if (message.content.startsWith(config.prefix+"roll")){
            var num = math.floor(math.random(0, 40) * 6);
            message.reply("You rolled a "+num);
            if (num == 0){
                const embed = new discord.RichEmbed()
                .setTitle("You got..")
                .setDescription("a big pile of nothing.")
                .setFooter("~JSBot");

                message.channel.send(embed);
            }
            if (num == 1){
                //gain 5 stones
                var id = message.author.id + message.guild.id
            }
        }
    })
}
