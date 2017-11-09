const Discord = require("discord.js")

exports.run = function(nexus, msg) {
	msg.channel.send({embed: {
		color: 0xFF8700,
		description: "Nexus - Command List\n\n" +
		"**NOTE:** `<>` is required and `[]` are optional\n",
		fields: [
		{
			name: "nxhelp",
			value: "This help command"
		},
		{
			name: "nxping",
			value: "Check my response time"
		},
		{
			name: "nxinfo",
			value: "Get information about me"
		},
		{
			name: "nxstats",
			value: "Get my statistical info"
		}
		]
	}})
}