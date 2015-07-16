const path = require("path")
const notifier = require("node-notifier")

const defaults = {
  title: "Fly",
  message: "Task filters completed.",
  icon: path.join(__dirname, "fly-logo.png")
}

function devicon (str) {
  if (str.slice(0, 3) === "dev") {
    return path.join(
      process.cwd(),
      "node_modules/fly-notify/node_modules/devicons/!SVG/",
      str.slice(4) + ".svg")
  } else {
    return str
  }
}

module.exports = function () {
  this.notify = function (opts) {
    opts = opts || {}
    for (var opt in defaults) { opts[opt] = opts[opt] || defaults[opt] }
    opts.icon = devicon(opts.icon)
    this.defer(notifier.notify(opts, function (err, response) {
      if (err) { this.err(err) }
      if (response) { this.debug(response) }
    }.bind(this)))
    return this
  }
}
