const Discord = require("discord.js")
var nexus = new Discord.Client()
var chalk = require("chalk")
var config = require("./config.json")
const package = require("./package.json")

nexus.on("ready", () => {
	console.log(chalk.blue(
    'nexus in' +
    chalk.white.underline(` ${nexus.guilds.size}`) +
    ` servers and ` +
    chalk.white.underline(`${nexus.users.size} `) +
    'users!'
));
	setInterval(function(){
		let randomplayings = [
		"with my dad Skweezi Leekz",
		"Minecraft",
		"with my hammer", 
		"at my sister DynTina's house",
		"please love me ;-;",
		"sum por..i mmean security videos.. security videos!"]
		  nexus.user.setPresence({
    game: {
    name: `${randomplayings[Math.floor(Math.random() * randomplayings.length)]} | nxhelp | ${nexus.guilds.size} Servers and v${package.version}`,
    type: 0
    }
  });
		}, 10000)
});

nexus.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.split(" ");
  const command = args.shift().slice(config.prefix.length);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(nexus, msg, args, config);
  } catch (err) {
    console.error(err);
  }
});

nexus.login(config.token)
