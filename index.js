require('dotenv').config();
const Discord = require("discord.js")
const client = new Discord.Client()
const cron = require(`cron`)

//
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//Magic words

client.on("message", msg => {
  if (msg.content.toLowerCase().includes("watermelon")) {
    msg.reply("https://tenor.com/buFfG.gif");
  }
})

client.on("message", msg => {
  if (msg.content.toLowerCase().includes(" ping")) {
    msg.reply("Pong");
  }
})
client.on("message", msg => {
  if (msg.content.toLowerCase().includes("mayo")) {
    msg.reply("oh no, we're not doing that again");
  }
})
client.on("message", msg => {
  if (msg.content.toLowerCase().includes("party")) {
    msg.reply("LOOK! https://imgur.com/gallery/Lpx5jC2");
  }
})

//Meeting Alerts
function sme() {
  client.channels.cache.get("846942895340388355").send('@everyone go to the SME huddle here: https://zoom.us/j/95049494290?pwd=SmRRMUluZ01wUzV1czE3c0RLcERUUT09')
  console.log('reminded f7 about the SME meeting!')
}
function scrum() {
  client.channels.cache.get("846942895340388355").send('@everyone go to the Morning meeting!')
  console.log('reminded f7 about the morning meeting!')
}
function eod() {
  client.channels.cache.get("846942895340388355").send('@everyone go to the End of Day meeting!')
  console.log('reminded f7 about EOD')
}
function outcomes() {
  client.channels.cache.get("846942895340388355").send('@everyone go to the Outcomes meeting here: https://strategiced.zoom.us/j/94122540258')
  console.log('reminded f7 about outcomes!')
}

let smeHuddle = new cron.CronJob('00 25 12 * * 1-5', sme)

let goToScrum = new cron.CronJob('00 55 07 * * 1-5', scrum)

let goToEOD = new cron.CronJob('00 40 14 * * 1-5', eod)

let goToOutcomes = new cron.CronJob('00 25 13 * * 5', outcomes)

smeHuddle.start()
goToScrum.start()
goToEOD.start()
goToOutcomes.start()


client.login(process.env.CLIENT_TOKEN)