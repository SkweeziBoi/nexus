var Discord = require("discord.js")

exports.run = function(nexus, msg, args) {
		if (msg.author.id !== "328645619394543627") {
			 msg.react("❌").then(msg => {
			msg.channel.send("You dont have permission to execute eval! Only for my creator! >:l")
			})
		} else {
		  try {
		  	let code = args.join(" ")
    var evaled = eval(code);
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);
    if (code.includes("msg.delete()")) {
      msg.channel.send("```js\n" + clean(evaled) + "\n```")
    } else {
    msg.channel.send( {embed : {
      color: 0x49FC00,
      description: `Marvelous Code has been evaluated:\n\n\`\`\`js\n${clean(evaled)}\n\`\`\``
    }})
  }
  } catch (err) {
    msg.channel.send("`ERROR Found!`\n```js\n" +
      clean(err) +
      "\n```");
  }
	}
}

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}