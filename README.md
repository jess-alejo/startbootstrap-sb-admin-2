# [Start Bootstrap - SB Admin 2](https://startbootstrap.com/theme/sb-admin-2/)

[SB Admin 2](https://startbootstrap.com/theme/sb-admin-2/) is an open source admin dashboard theme for [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/).

> **This fork has been upgraded to Bootstrap 5 and is fully jQuery-free.** See [Bootstrap 5 Upgrade](#bootstrap-5-upgrade) for what changed. For the original Bootstrap 4 version, see the [upstream repository](https://github.com/StartBootstrap/startbootstrap-sb-admin-2). For the legacy Bootstrap 3 version, view the [last stable release](https://github.com/StartBootstrap/startbootstrap-sb-admin-2/releases/tag/v3.3.7%2B1).

## Preview

[![SB Admin 2 Preview](https://assets.startbootstrap.com/img/screenshots/themes/sb-admin-2.png)](https://jess-alejo.github.io/startbootstrap-sb-admin-2/)

**[Launch Live Preview (Bootstrap 5 fork)](https://jess-alejo.github.io/startbootstrap-sb-admin-2/)**

## Bootstrap 5 Upgrade

This fork migrates the theme from Bootstrap 4 to Bootstrap 5 and removes jQuery entirely. Highlights:

* **Bootstrap 4.6 -> 5.3** - markup migrated to `data-bs-*` attributes and BS5 class names throughout all pages.
* **jQuery removed** - `js/sb-admin-2.js` is rewritten in vanilla JavaScript (sidebar toggle, collapse via the native `bootstrap.Collapse` API, and native smooth scroll-to-top).
* **Chart.js 2 -> 4** - the demo charts use the current Chart.js API.
* **DataTables -> [simple-datatables](https://github.com/fiduswriter/simple-datatables)** - the tables demo now uses a zero-dependency, jQuery-free table library.
* **Dart Sass** - the build compiles with Dart Sass (`sass`) via `gulp-sass` 5.
* **Visual parity with BS4** - BS5 default changes (button/badge contrast, link underlines, card and dropdown spacing, form control and checkbox styling, `.small` sizing, table colors) were restored via variable overrides so the theme still looks like the original.

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-sb-admin-2/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-sb-admin-2.svg)](https://www.npmjs.com/package/startbootstrap-sb-admin-2)

## Download and Installation

To begin using this template, choose one of the following options to get started:

* Clone this Bootstrap 5 fork: `git clone https://github.com/jess-alejo/startbootstrap-sb-admin-2.git`
* [Fork, Clone, or Download this fork on GitHub](https://github.com/jess-alejo/startbootstrap-sb-admin-2)
* For the original Bootstrap 4 theme: [download on Start Bootstrap](https://startbootstrap.com/theme/sb-admin-2/) or `npm i startbootstrap-sb-admin-2`

## Usage

After installation, run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

### Gulp Tasks

* `gulp` the default task that builds everything
* `gulp watch` browserSync opens the project in your default browser and live reloads when changes are made
* `gulp css` compiles SCSS files into CSS and minifies the compiled CSS
* `gulp js` minifies the themes JS file
* `gulp vendor` copies dependencies from node_modules to the vendor directory

You must have npm installed globally in order to use this build environment. This Bootstrap 5 build was developed on node v21 with the Gulp CLI v2.x. If Gulp is not running properly after running `npm install`, you may need to update node and/or the Gulp CLI locally.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-sb-admin-2/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](https://startbootstrap.com/theme/sb-admin-2/).

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* <https://startbootstrap.com>
* <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

* <https://davidmiller.io>
* <https://twitter.com/davidmillerhere>
* <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2021 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE) license.
