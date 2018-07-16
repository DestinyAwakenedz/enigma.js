const discord = require('discord.js')
const bot = new discord.Client();
const config = require('./config');
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('userData.json','utf8'))

bot.on('ready', ()=>{
    console.log('JSBot has started, with '+bot.users.size+', in '+bot.channels.size+' channels of '+bot.guilds.size)
    bot.user.setPresence({
        status: 'online',
        game: {
            name: "Botly stuff | "+config.prefix+"help"
        }
    })

    //setup ECO
    bot.on('message', message =>{
        let sender = message.author;
        if (!data[sender.id + message.guild.id]) data[sender.id + message.guild.id] = {}
        if (!data[sender.id + message.guild.id].monz) data[sender.id + message.guild.id].monz = 0;
        fs.writeFile()
    })
})

//cmds

require('./cmds/Ban')(bot);
require('./cmds/DiceRoll')(bot);

//end


bot.login(config.token);