const Discord = require("discord.js")

exports.run = function(nexus, msg) {
	msg.channel.send(`Pong! ${nexus.ping.toFixed(0)}ms`)
}