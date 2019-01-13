const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("over my Brothers", { type: "WATCHING" })

    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
        // chat-without-randozos channel 345701161401188355
        // btr channel 329765270564634624
    })

    let generalChannel1 = client.channels.get("329765270564634624")
    /* const attachment = new Discord.Attachment("Luke.jpg") 
     generalChannel1.send(attachment) will send attachment */
    // generalChannel1.send("") will send a message
})

client.on('message', (receivedMessage) => {
    // Prevents the bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return 
    }
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ") // will return an array containing each word
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("Unknown command. Try `!help`")
    }
}

function 

function helpCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
    } else {
        receivedMessage.channel.send("You okay dood? Looks like you need help with " + arguments)
    }
}

client.login("NTMzNzYyNzAwNzI4MjA1MzIz.Dxvw6A.z15HvwBcDFZskOtYgqU5yh2gUUQ")





















