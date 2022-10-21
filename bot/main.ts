import { Client, GatewayIntentBits, Message } from "discord.js";

const bot = new Client({
    intents: [ 
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ]
});

bot.login(process.env.TOKEN);

bot.once('ready', () => {
    console.log('ready');
    console.log(bot.user?.username);
    bot.user?.setActivity('teste');
});

bot.on('messageCreate', (msg: Message) => {
    msg.reply((new Date).toDateString());
})