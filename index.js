const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;
var prefix = "ik!";
var id_bot = "<@382875480451317760>";
var id_jyder = '361220724142112780';
var emoj_tak = '<:nohrianscum:377090236095791104>';
var emoj_rein = '<:rein:368038551482400788>';
var userp;

//Lancement bot
client.on('ready', () => {
  console.log("Bonjour, je suis Ike. Pour vous servir.");
  client.user.setGame("ETHER!!!");
});

//action message
client.on('message', message => { //*
  var msgc = message.content; //raccourci

  //si l'auteur du message n'est pas un bot
  if (!message.author.bot) {
    if (msgc == 'ping') { //message contient un ping
      message.channel.send('pong');
    } else if (msgc == 'pong') {
      message.channel.send('MDR');
    } else if (msgc.includes('Ike') || msgc.includes('ike')) {
      message.channel.send('ETHER !!!');
      // } else if (msgc.includes('Jul') || msgc.includes('jul')) {
      //   message.channel.send("On m'appelle l'ovni !");
    } else if (msgc.includes('Pain au chocolat') || msgc.includes('pain au chocolat') || msgc.includes('Chocolatine') || msgc.includes('chocolatine')) {
      message.channel.send('Chocolatine !');
    } else if (msgc.includes('cipher') || msgc.includes('Cipher')) {
      message.channel.send("J'adore ma SR : ETHER !!!");
    } else if (msgc.includes('ETHER') || msgc.includes('AETHER') || msgc.includes('Ether') || msgc.includes('ether')) {
      message.channel.send("Personne ne m'imite !");
    }
  }

  //Si l'auteur est un bot
  if (message.author.bot) {
    if (msgc.includes("T'AS DIT QUOI LÀ") || msgc.includes("TA GUEULE")) {
      message.channel.send("OMAE WA MOU SHINDEIRU " + emoj_rein + emoj_rein + emoj_rein);
    }
  }

  //si mention après le spréfix
  if (msgc.includes(prefix)) {
    userp = msgc.substr(prefix.length);

    switch (userp) {
      case 'cc':
        message.channel.send('Coucou');
        break;
      case 'jyder':
        message.channel.send('Moi aussi j\'aime les pâtes ♨');
      case 'rein':
        message.channel.send('Respect pour Reinhardt ' + emoj_rein);
        break;
      case 'takumi':
        message.channel.send('Takumerde ' + emoj_tak);
        break;
      case 'cute':
        message.channel.send('◕‿◕');
        break;
      case 'bear':
        message.channel.send('ʕ ᵔᴥᵔ ʔ');
        break;
      default:
        break;

    }

  }



}); //*

client.login(token);
