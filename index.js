const discord = require('discord.js')
const bot = new discord.Client();
const config = require('./config');
//const fs = require('fs')
//let data = JSON.parse(fs.readFileSync('./userData.json','utf8'));

bot.on('ready', ()=>{
    console.log('JSBot has started, with '+bot.users.size+', in '+bot.channels.size+' channels of '+bot.guilds.size)
    bot.user.setPresence({
        status: 'online',
        game: {
            name: "Botly stuff | "+config.prefix+"help"
        }
    })

    //setup ECO
    //bot.on('message', message =>{
      //if(bot.user.id === message.author.id) return;
      //let data = JSON.parse(fs.readFileSync('./userData.json','utf8'));//refresh
      //let userz = message.author.id + message.guild.id;
      //  if (!data[userz]) data[userz] = {}
        //if (!data[userz].monz) data[userz].monz = 0;
        //fs.writeFile('./userData.json', JSON.stringify(data),'utf8',(err)=>{
        //    if (err) console.log(err);
        //})
    //})
})

//cmds

require('./cmds/Ban')(bot);
require('./cmds/DiceRoll')(bot);
//require('./cmds/Stones')(bot);
require('./cmds/PlayMusic')(bot);
require('./cmds/StopMusic')(bot);

//end


bot.login(config.token);
