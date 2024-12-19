import express from 'express'
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';


const app = express()
const bot = new Telegraf(TOKEN)

bot.start(ctx => {
    ctx.reply('Welcome, bro')
})

bot.on('text', ctx => {
    ctx.reply('just text')
})

bot.launch();

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});