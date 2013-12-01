# justinalm.com

## Jekyll
This site runs on [Jekyll](http://jekyllrb.com), that helps:

> Transform your plain text into static websites and blogs.

## CSS
For CSS, I’ve used [Nicolas Gallagher’s](http://nicolasgallagher.com) normalize.css to standardize web elements across browsers. You can read about Normalize.css on his [website](http://nicolasgallagher.com/about-normalize-css/) and clone his [github repo](https://github.com/necolas/normalize.css) for use on your own projects. It’s pretty amazing.

### CSS From Scratch
All the other mobile-first-responsive CSS I written from scratch. I was using grids from other CSS frameworks for previous iterations of my site but I got tired of combing through thousands of lines of CSS to make changes. Generally, I feel like those frameworks are overkill for a simple site like this. Writing from scratch forces me to focus on the essentials and keeps code elegant.

### SASS
I’m considering buttoning in a grid to layout portfolio entries in more interesting ways. When that happens, I’ll be chunking CSS into [SASS](http://sass-lang.com) files for concatenation.

## Typography
I use the web font service [Typekit](https://typekit.com).

The two fonts I use throughout the site are:

1. [Futura PT](https://typekit.com/fonts/futura-pt) by [ParaType](http://www.paratype.com) for headers.
2. [JAF Facit](https://typekit.com/fonts/jaf-facitweb) by [Just Another Foundry](http://justanotherfoundry.com) for body text.

## RSS
To generate my RSS feed, I use a [Sitemap Generator](https://github.com/kinnetica/jekyll-plugins) plugin by [Michael Levin](http://www.kinnetica.com).

## Deploying
To deploy the site, I have setup SSH and a `rake:deploy` task to Rsync my `_site` directory to my hosting.

Thanks to [Nathan Grigg](http://nathangrigg.net/2012/04/rsyncing-jekyll/) for sharing the script to [Rsync](http://rsync.samba.org) only changed files. After my blog started to grow, syncing directories with [Transmit](http://panic.com/transmit/) was starting to take a long time. Huge hi-five!