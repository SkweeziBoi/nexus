const Discord = require("discord.js")

exports.run = function(nexus, msg, config) {
	if (msg.author.id !== "328645619394543627") {
		msg.react("❌")
		msg.reply("You cannot execute this command as it is for my owner only!")
	}
	if (msg.author.id === "328645619394543627") {
		msg.channel.send("Rebooting...")
		setTimeout(function(){process.exit(1)}, 3000)
	}
}