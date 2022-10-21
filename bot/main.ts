import { Client, GatewayIntentBits } from "discord.js";

const bot = new Client({
    intents: [ GatewayIntentBits.Guilds ]
});

bot.login(process.env.TOKEN);

bot.once('ready', () => {
    console.log('ready');
    console.log(bot.user?.username);
    bot.user?.setActivity('teste');
});