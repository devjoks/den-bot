module.exports = {
  apps: [{
    name: "Alcremie-B",
    script: "./index.js",
    cwd: "/home/pi/DiscordBots/Den-Bot/",
    error_file: "./data/logs/error.log",
    out_file: "./data/logs/out.log",
    log_file: "./data/logs/combined.log",
    time: true
  }]
};