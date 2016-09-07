---
title: Work
date: 2016-06-13 22:19:00 -07:00
position: 1
---

<div class="cf">
    <div class="fl w-100 w-40-ns ph4 f4-l lh-copy">
        <h1>Work</h1>
        <p>Samples of work involving product strategy, information architecture (IA), wireframing, user interface design (UI), identity, and graphic design.</p>
    </div>
</div>

{% for work in site.work %}

<div class="cf mb4">
    <div class="fl w-100 w-40-ns ph4 f4-l lh-copy">
        <h2 class="mv0"><a href="{{ work.url }}" title="{{ work.title }}">{{ work.title }}</a></h2>
        <p class="mt0"><em><small>{{ work.categories }}</small></em></p>
        <p>{{ work.summary }}</p>
        <a class="Btn pv2 ph4 ba b--light-gray br2" href="{{ work.url }}" title="{{ work.title }}">View project</a>
    </div>
    <div class="fl w-100 w-60-ns ph4 lh-copy">
        <a href="{{ work.url }}" title="{{ work.thumbnail }}"><img class="w-100" src="{{ work.thumbnail }}"/></a>
    </div>
</div>

{% endfor %}