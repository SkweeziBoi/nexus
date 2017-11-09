const Discord = require("discord.js")

exports.run = function(nexus, msg) {
	msg.channel.send({embed: {
		color: 0xFF7C00,
		description: "Hello! :wave: Im nexus, the advanced but simple to use moderation bot!\n" +
		"There are some other things I can do, but you can find that out by using `nxhelp`! :smile:\n\n" +
		"If I react with :x: it means you dont have permission to use the issued command.\n" +
		"But if I react with :negative_squared_cross_mark: it means i dont have permission to execute the issued command! \n\nExample: if a ban command is issued, and you have the correct permissions. But I cant ban the person. It means that either I dont have permission to ban the person, or their role is higher than me." +
		"\n\nTo see my statistical information, use `nxstats` to see things such a server count, servers and all kinds of stuff!"
	}})
}