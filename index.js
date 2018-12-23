const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "l!";

Client.on('ready', ()=>{
    console.log("Bot is online, fellow.");

    Client.user.setPresence({ game: { name: 'l!help 📣', type: 1 } });

})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "info")){
        message.channel.send("**What's Lucy?** - Lucy is a soundboard bot with different sounds you can play in voice channels.")

    }

    if(message.content.startsWith(prefix + "support")){
        message.channel.send('Need help? Join our official support channel.\n**https://discord.gg/pcYbebA**')

    }
    
    if(message.content.startsWith(prefix + "plus")){
        message.channel.send('Plus is currently in development.')

    }

    if(message.content.startsWith(prefix + "help")){
        message.channel.send(`Check your DMs, ${message.author.tag}`)
        const helpembed0 = new Discord.RichEmbed()
        .setTitle('**Help**')
        .addField('Basic Commands', '`info`, `support`, `plus`, `help`, `serverinfo`, `avatar`, `bugreport`')
        .setColor('#ffffff')

        const helpembed1 = new Discord.RichEmbed()
        .addField('Music Configuration', '`connect`, `disconnect`, `stop`')
        .setColor('#ffffff')
        

        const helpembed2 = new Discord.RichEmbed()
        .addField('**Music Commands**', 'Usage: `l!music <name>`')
        .addField('`alone`, `despacito`, `flamingo`, `hope`, `invincible`, `notfornothing`, `ppap`, `ifonly`', `**Only eight?** - Yes, because Lucy is in beta and we are always going to add more music.`)
        .setColor('#ffffff')

    const helpembed3 = new Discord.RichEmbed()
    .addField('Soundboard Commands', 'Usage: ``l!soundboard <name>``')
    .addField('`airhorn`, `alia`, `begonethot`, `buzzer`, `clapping`, `notify`, `dramatic`, `gameover`, `pieceofgarbage`, `jeopardy`', '**And more sounds...**')
    .addField('`latd`, `nani`, `oof`, `reee`, `shuffling`, `slap`, `iliketrains`, `knowthewae`, `fail`, `smokeweed`, `whatarethose`, `windowsxp`, `yeehaw`, `yeet`', '**More coming soon!**')
    .setColor('#ffffff')


    message.author.send(helpembed0)
    message.author.send(helpembed1)
    message.author.send(helpembed2)
    message.author.send(helpembed3)

    }



    if(message.content.startsWith(prefix + "avatar")){
      const avatarembed = new Discord.RichEmbed()
      .setTitle(`**${message.author.username}'s** avatar:`, `*Avatar*`)
      .setImage(`${message.author.displayAvatarURL}`)
      .setColor('RANDOM')
      message.channel.send({embed: avatarembed})

    }

    if(message.content.startsWith(prefix + "serverinfo")){
      let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      let day = message.guild.createdAt.getDate()
      let month = 1 + message.guild.createdAt.getMonth()
      let year = message.guild.createdAt.getFullYear()
       let sicon = message.guild.iconURL;
       let human = message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size
       let bot = message.guild.members.filter(m => m.user.bot).size

       const server = new Discord.RichEmbed()
       .addField('**Server Information**', `${message.guild.name}`)
       .addField('Name', `${message.guild.name}`)
       .addField(`ID`, `${message.guild.id}`)
       .addField(`Owner`, `${message.guild.owner.user.tag}`)
       .addField(`Server Created`, `**${month}/${day}/${year}**`)
       .addField('Server Count', `${message.guild.memberCount}`)
       .addField('Humans', `${human}`)
       .addField('Bots', `${bot}`)
       .setImage(`${sicon}`)
       .setColor(`BLACK`)

       message.channel.send(server)

    }
// https://discordapp.com/api/webhooks/506262865167253540/PuQWXiIjXG5j-aOdFcjY1Xeo-2eBjmzzY5KIYvSErcN4JKvkz3NbNqz3n2M2TKM8XaLd
    if(message.content.startsWith(prefix + "bugreport")){
      let args = message.content.slice(prefix.length).trim().split(' ');
      let reason = args.slice(1).join(' ');
    const reporta = new Discord.WebhookClient('506262865167253540', 'PuQWXiIjXG5j-aOdFcjY1Xeo-2eBjmzzY5KIYvSErcN4JKvkz3NbNqz3n2M2TKM8XaLd');
    
    // Send a message using the webhook
    const reportaembed = new Discord.RichEmbed()
    .addField(`Report`, `TOKEN: #` + Math.floor(Math.random() * 10000000000 + 1))
    .addField(`Submitted by:`, `**${message.author.tag} - ID: ${message.author.id}**`)
    .addField(`Reason`, `${message.content}`)
    .setColor(`RANDOM`)
    //reporta.send(`User ${message.author.tag} [ID ${message.author.id}] has submited a bug report. Reason: **${reason}** | TOKEN: #` + Math.floor(Math.random() * 10000000000 + 1))
      reporta.send(reportaembed)
    message.channel.send(`Thank you for the report, ${message.author.username}.`)
    message.react('✅')
    }


    if(message.content.startsWith(prefix + "stop")){
      if(!message.member.voiceChannel) return message.channel.send('```You must be in a voice channel to stop music.```')
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./s/stop.mp3');
      message.channel.send(':thumbsup: Stopped.')
    })
    .catch(console.error);

  
// Backup Stop
    //if(message.content.startsWith(sprefix + "stop")){
     // if(!message.member.voiceChannel) return message.channel.send('```You need to be in a voice channel to stop music.```')
     // message.member.voiceChannel.leave();
     // message.channel.send("Stopped. :thumbsup:")
    
    
    }


    
    if(message.content.startsWith(prefix + "disconnect")){
      const voiceChannel = message.member.voiceChannel;
   if(!message.member.voiceChannel) return message.channel.send('```You must be in a voice channel to make me leave a channel.```')
  //if(!Client.user.voiceChannel) return message.channel.send('```I am not in a voice channel at the moment.```')
      message.member.voiceChannel.leave();
      message.channel.send("**Disconnected!**")
    }
    
    if(message.content.startsWith(prefix + "connect")){
      const voiceChannel = message.member.voiceChannel;
      if(!message.member.voiceChannel) return message.channel.send('```You must be in a voice channel to make me connect to a channel.```')
    if(Client.user.voiceChannel) return message.channel.send('```I am already in a voice channel.```')
      message.member.voiceChannel.join();
      message.channel.send('**Connected!** :thumbsup:')


    }

    if(message.content.startsWith(prefix + "music notfornothing")){
      if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
      const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./s/nothing.mp3');
      message.channel.send(':loudspeaker: Now playing: **Not for Nothing**')
    })
    .catch(console.error);
    
    }


    if(message.content.startsWith(prefix + "music alone")){
      if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
      const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./s/alone.mp3');
      message.channel.send(':loudspeaker: Now playing: **Alan Walker - Alone**')
    })
    .catch(console.error);
    
    }

    if(message.content.startsWith(prefix + "music despacito")){
      if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
      const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./s/despacito.mp3');
      message.channel.send(':loudspeaker: Now playing: **Despacito**')
    })
    .catch(console.error);

  }

  if(message.content.startsWith(prefix + "music invincible")){
    if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
    const voiceChannel = message.member.voiceChannel;
  voiceChannel.join()
  .then(connection => {
    const dispatcher = connection.playFile('./s/invincible.mp3');
    message.channel.send(':loudspeaker: Now playing: **Invincible**')
  })
  .catch(console.error);

}

if(message.content.startsWith(prefix + "music ppap")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/ppap.mp3');
  message.channel.send(':loudspeaker: Now playing: **Pen Pinapple Apple Pen**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "music ifonly")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/rookie.mp3');
  message.channel.send(':loudspeaker: Now playing: **Rook1e - If Only**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "music hope")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/hope.mp3');
  message.channel.send(':loudspeaker: Now playing: **Tobu - Hope**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "music flamingo")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/flamingo.mp3');
  message.channel.send(':loudspeaker: Now playing: **Kero Kero Bonito - Flamingo**')
})
.catch(console.error);

}


    

    if(message.content.startsWith(prefix + "soundboard latd")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/lookdude.mp3');
        message.channel.send(':loudspeaker: Now playing: **Look at this Dude**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard windowsxp")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/windowsxp.mp3');
        message.channel.send(':loudspeaker: Now playing: **Windows XP Startup Sound**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard pieceofgarbage")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/garbage.mp3');
        message.channel.send(':loudspeaker: Now playing: **Still a Piece of Garbage**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard clapping")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/clapping.mp3');
        message.channel.send(':loudspeaker: Now playing: **Clapping Sound**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard reee")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/re.mp3');
        message.channel.send(':loudspeaker: Now playing: **Reeeeeeeee!**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard begonethot")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/begonethot.mp3');
        message.channel.send(':loudspeaker: Now playing: **Begone Thot**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard alia")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/alia.mp3');
        message.channel.send(':loudspeaker: Now playing: **Ali-A Intro**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard airhorn")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/airhorn.mp3');
        message.channel.send(':loudspeaker: Now playing: **Airhorn**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard oof")){
        if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
        const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./s/oof.mp3');
        message.channel.send(':loudspeaker: Now playing: **Oof**')
      })
      .catch(console.error);

    }

    if(message.content.startsWith(prefix + "soundboard knowthewae")){
      if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
      const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./s/wae.mp3');
      message.channel.send(':loudspeaker: Now playing: **Do You Know De Wae**')
    })
    .catch(console.error);

  } 
  
  
  if(message.content.startsWith(prefix + "soundboard slap")){
    if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
    const voiceChannel = message.member.voiceChannel;
  voiceChannel.join()
  .then(connection => {
    const dispatcher = connection.playFile('./s/slap.mp3');
    message.channel.send(':loudspeaker: Now playing: **Slap Sound**')
  })
  .catch(console.error);


  }

  if(message.content.startsWith(prefix + "soundboard buzzer")){
    if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
    const voiceChannel = message.member.voiceChannel;
  voiceChannel.join()
  .then(connection => {
    const dispatcher = connection.playFile('./s/buzzer.mp3');
    message.channel.send(':loudspeaker: Now playing: **Buzzer Sound**')
  })
  .catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard whatarethose")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/whatarethose.mp3');
  message.channel.send(':loudspeaker: Now playing: **What Are Those**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard iliketrains")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/trains.mp3');
  message.channel.send(':loudspeaker: Now playing: **I Like Trains**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "soundboard yeet")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/yeet.mp3');
  message.channel.send(':loudspeaker: Now playing: **Yeet**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "soundboard yeehaw")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/yeehaw.mp3');
  message.channel.send(':loudspeaker: Now playing: **Yeehaw**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "soundboard fail")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/wah.mp3');
  message.channel.send(':loudspeaker: Now playing: **Wah Wah Wah Sound**')
})
.catch(console.error);



}

if(message.content.startsWith(prefix + "soundboard jeopardy")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/jeopardy.mp3');
  message.channel.send(':loudspeaker: Now playing: **Jeopardy Theme**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard nani")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/nani.mp3');
  message.channel.send(':loudspeaker: Now playing: **Omae Wa Mou Shindeiru**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard dramatic")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/dramatic.mp3');
  message.channel.send(':loudspeaker: Now playing: **Dramatic Sound**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard smokeweed")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/weed.mp3');
  message.channel.send(':loudspeaker: Now playing: **Smoke Weed Everyday**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard shuffling")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/shuff.mp3');
  message.channel.send(':loudspeaker: Now playing: **Everyday Im Shuffling**')
})
.catch(console.error);

}

if(message.content.startsWith(prefix + "soundboard notify")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/connect.mp3');
  message.channel.send(':loudspeaker: Now playing: **A sound...I guess.**')
})
.catch(console.error);

}


if(message.content.startsWith(prefix + "soundboard gameover")){
  if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
  const voiceChannel = message.member.voiceChannel;
voiceChannel.join()
.then(connection => {
  const dispatcher = connection.playFile('./s/gameover.mp3');
  message.channel.send(':loudspeaker: Now playing: **Super Mario Bros - Gameover**')
})
.catch(console.error);

}






    

})

Client.login()
