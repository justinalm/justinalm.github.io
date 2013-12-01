# justinalm.com

## Jekyll
This site runs on [Jekyll](http://jekyllrb.com), that helps:

> Transform your plain text into static websites and blogs.

## CSS
For CSS, I’ve used [Nicolas Gallagher’s](http://nicolasgallagher.com) normalize.css to standardize web elements across browsers. You can read about Normalize.css on his [website](http://nicolasgallagher.com/about-normalize-css/) and clone his github repo – [https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css). All the other mobile-first, responsive CSS I wrote from scratch. I was using grids from other CSS frameworks for previous iterations of my site but I got tired of combing through thousands of lines of CSS to make changes. Writing from scratch forces me to focus on the essentials and keeps files elegant.

### SASS
I’m considering buttoning in a grid to layout portfolio entries in more interesting ways. When that happens, I’ll be chunking CSS into [SASS](http://sass-lang.com) files for concatenation.

## Typography
I use the web font service [Typekit](https://typekit.com).

The two fonts I use throughout the site are:

### Headers
__Futura PT__ by [ParaType](http://www.paratype.com)

### Body
__JAF Facit__ by [Just Another Foundry](http://justanotherfoundry.com)

## RSS
To generate my RSS feed, I use a Sitemap Generator plugin by [Michael Levin](http://www.kinnetica.com).

## Deploying My Site
To deploy the site, I have setup SSH and a *rake:deploy* task to Rsync my *_site* directory to my hosting.

Thanks to [Nathan Grigg](http://nathangrigg.net/2012/04/rsyncing-jekyll/) for sharing the script to [Rsync](http://rsync.samba.org) only changed files. After my blog started to grow, syncing directories with [Transmit](http://panic.com/transmit/) was starting to take a long time. Huge hi-five!