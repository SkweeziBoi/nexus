const Discord = require("discord.js")
const hd = require("humanize-duration")

exports.run = function(nexus, msg) {
	msg.channel.send({embed: {
		color: 0xFF7C00,
		description: "<:nexus:372141629160685568> nexus stats\n\n",
		fields: [
		{
			name: "Servers",
			value: `${nexus.guilds.size} Total`
		},
		{
			name: "Creator/Author",
			value: "Skweezi Leekz#2426"
		},
		{
			name: "Library - Version",
			value: `Discord.js - ${Discord.version}`
		},
		{
			name: "Uptime",
			value: `${hd(nexus.uptime, {round: true})}`
		}
		]
	}})
}