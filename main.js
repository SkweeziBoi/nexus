const Discord = require("discord.js")
var nexus = new Discord.Client()
var chalk = require("chalk")
var config = require("./config.json")
const package = require("package.json")

nexus.on("ready", () => {
	console.log(chalk.blue(
    'nexus ' +
    chalk.white.underline('in') +
    ` ${nexus.guilds.size} servers ` +
    chalk.white.underline(`and ${nexus.users.size} users!`)
));
  nexus.user.setPresence({
    game: {
    name: `nxhelp | Nexus v${package.version} | ${nexus.guilds.size} servers`,
    type: 0
    }
  });
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
