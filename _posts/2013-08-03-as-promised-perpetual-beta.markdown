---
published: true
title: As Promised, Perpetual Beta
layout: post
thumbnail: "images/jekyll-logo@2x.jpg"
description: "I’ve made a few aesthetic and stuctural changes to this website. The biggest decision I made was to ditch Wordpress and use Jekyll to compile the site."
---

![The Jekyll Logo](/images/jekyll-logo@2x.png "The Jekyll Logo")

I’ve made a few aesthetic and stuctural changes to this website. The biggest decision I made was to ditch Wordpress and use Jekyll to compile the site. I realize when I released my last update, building on Wordpress was a documented and intentional decision. Most of the motivation behind that decision was choosing a development path I have experience with.

As a designer, I wrestle with learning technology and executing presentation. For this reason, I moved off Wordpress. Managing a local install of Wordpress and keeping things consistent with the copy on the production server was getting in the way of making design decisions. I know there are methods to deal with this problem but I feel like the scale of my website is too small to ‘go there’. Wordpress has too many files related to each other; too many moving parts that need consideration when making simple design decisions. You can read more about tech vs design on [Fast Company – Design](http://www.fastcodesign.com). Search down the article [20 Tech Trends That Will Define 2013](http://www.fastcodesign.com/1671397/20-tech-trends-that-will-define-2013-selected-by-frog#1) for the header *The Art Of Innovation Gets Even More Artful* by Reena Jana.

![Website Model](/images/website-model.jpg "Website Model")

I know there are good use cases for Wordpress. I’m glad I know how to work with it. Wrangling content with PHP has given me a mental model for complex dynamic web environments. On Wordpress, I can confidently translate any design into a Wordpress theme. There’s no level of graphic complexity, no worry of understanding dynamic content or confusion in delivering this content in a flexible and scalable layout. Most of my work as a designer involves tweaking CSS values and getting my markup as clean and flexible as possible so adding more content to the stream is easy. The formula is:
content is entered with ease & presented in a striking way = motivated content creators & happy content consumers.

![Transmit Logo](/images/bigtruckins.jpg "Transmit Logo")

In a way, I am the creator and consumer(I know my analytics).The Jekyll framework gives me motivation, makes me happy, enables me to make bolder decision with layouts, and worry less about the backbone of how things function. I can work in a local environment and mirror my changes to my webhost using [Transmit](http://panic.com/transmit/) — easy.

![Salome](/images/salome.png "Salome Display")

As for the changes I’ve made to my presentation of content, I’ve included the new [Salome Display](http://www.salomefont.com/) for my h1.logo treatment and all the h2’s throughout the site. Salome was designed by the Spanish multidiscipliary design studio, [Atipo](http://www.atipo.es/). I centred my nav, made the text-content a comfortable max-width: 600px at desktop and tablet for a comfortable line-length, and allowed images to go to a width: 100% to a max-height: 600px. I think these layout choices make for a good experience when viewing images. They can go wide when they need to and scale down for the phone. I also ditched FitVids.js for a CSS solution for responsive video. You can get the markup and CSS for this this trick in [John Surdakowski’s blog post](http://avexdesigns.com/responsive-youtube-embed/) on the __Avex Web Development and Design__ site. There is no more need for a javascript plugin but I’m currently seeking an easy solution for including videos in my markdown. There’s something funny about how the iframe embed is converted from markdown to HTML that is giving Jekyll a stroke.

Welcome to my new, flat, static, responsive, and performant website.