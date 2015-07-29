const path = require("path")
const test = require("tape").test
const FlyNotify = require("../")
const defaults = {
  title: "Fly",
  message: "Task completed.",
  icon: path.resolve(__dirname, "..", "fly-logo.png"),
}

test("Testing `fly-notify`", function (t) {
  t.plan(2)
  const plugin = new FlyNotify()
  t.ok(plugin.notify, "Fly-Notify `notify` method exists ~~%")
  t.equal(typeof plugin.notify, "function", "Fly-Notify `notify` method is a function ~~%")
  t.end()
})

test("Testing bad options", function(t) {
  t.plan(3)
  const badOptions = {
    bad: NaN,
    badder: undefined,
    baddest: null,
  }
  const plugin = new FlyNotify()
  const notify = plugin.notify(badOptions)
  t.equal(notify.options.title, defaults.title, "Default Title still exists.")
  t.equal(notify.options.message, defaults.message, "Default Message still exists.")
  t.equal(notify.options.icon, defaults.icon, "Default Icon still exists.")
  t.end()
})

test("Testing default options", function(t) {
  t.plan(1)
  const plugin = new FlyNotify()
  const notify = plugin.notify({})
  t.deepEqual(notify.options, defaults, "Empty object `{}` respects default options")
  t.end()
})

test("Testing custom message", function(t) {
  t.plan(1)
  const options = {
    message: "My Custom Message",
  }
  const plugin = new FlyNotify()
  const notify = plugin.notify(options)
  t.equal(notify.options.message, options.message, "Updates default message")
  t.end()
})
