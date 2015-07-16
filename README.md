<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [node-notifier][notify] plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults) to see the available options.

> This plugin also allows you to specify a [devicons](http://vorillaz.github.io/devicons/#/dafont) icon by prefixing the
icon that you want to use with `dev:`. [octicons](https://octicons.github.com/) support planned as well.

### Install
```a
npm install -D fly-notify
```

### Example

#### ES6
```js
export default function* () {
  yield this.clear("build")
  yield this
    .source(paths.scripts)
    .babel({ stage: 0 })
    .uglify()
    .concat("all.min.js")
    .notify({
      title: "Fly Default",
      message: "Completed default task",
      icon: "dev:code_badge"
    })
    .target("build/js")
}
```
#### Earl Grey
```earl-grey
provide: default
default = *->
  yield this.clear("build")
  yield chain this:
    @source("src/*.eg")
    @earl()
    @concat("index.js")
    @notify with {
      title = "Fly Default"
      message = "Completeled default task."
      icon = "dev:code_badge"
    }
    @target("lib")
```

### Requirements
Here are [node-notifier][notify]'s requirements:
- **Mac OS X**: >= 10.8 or Growl if earlier.
- **Linux**: notify-osd installed (Ubuntu should have this by default)
- **Windows**: >= 8, task bar balloon if earlier or Growl if that is installed.
- **General Fallback**: Growl


# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[notify]:       https://github.com/mikaelbr/node-notifier
[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/fly-notify/graphs/contributors
[releases]:     https://github.com/MadcapJake/fly-notify/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-notify
[npm-ver-link]: https://img.shields.io/npm/v/fly-notify.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-notify.svg?style=flat-square
[travis-link]:  https://travis-ci.org/MadcapJake/fly-notify
[travis-badge]: http://img.shields.io/travis/MadcapJake/fly-notify.svg?style=flat-square
