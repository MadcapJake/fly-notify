const path = require("path")
const assign = require("object-assign")
const notifier = require("node-notifier")

module.exports = function () {
  this.notify = function (options) {
    notifier.notify(assign(options, {
      title: "Fly",
      message: "Task completed.",
      icon: options.icon
        ? devicon(options.icon)
        : path.join(__dirname, "fly-logo.png")
    }),
    function (error, response) {
      if (error) this.error(error)
      if (response) this.debug(response)
    }.bind(this))
    return this
  }
}

function devicon (s) {
  const ICONS_PATH = "node_modules/fly-notify/node_modules/devicons/!SVG/"
  return s.slice(0, 3) === "dev"
    ? path.join(process.cwd(), ICONS_PATH, s.slice(4) + ".svg") : s
}
