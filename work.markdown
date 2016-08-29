---
title: Work
date: 2016-06-13 22:19:00 -07:00
position: 1
---

<div class="grid">
    <div class="col-1-3">
    	<h1>Work</h1>
		<p>Samples of work involving product strategy, information architecture (IA), wireframing, user interface design (UI), identity, and graphic design.</p>
	</div>
	<div class="col-2-3"></div>
</div>

<div class="grid">
    <div class="col-1-3">
    	<h2>Project Title</h2>
    	<p><em><small>UX, UI, Branding</small></em></p>
    	<p>Quick description of the project.</p>
	</div>
	<div class="col-2-3">
		<p><img src="http://placehold.it/1650x1096"></p>
    </div>
</div>

<div class="grid">
    <div class="col-1-3">
    	<h2>Project Title</h2>
    	<p><em><small>UX, UI, Branding</small></em></p>
    	<p>Quick description of the project.</p>
	</div>
	<div class="col-2-3">
		<p><img src="http://placehold.it/1650x1096"></p>
    </div>
</div>

<div class="grid">
    <div class="col-1-3">
    	<h2>Project Title</h2>
    	<p><em><small>UX, UI, Branding</small></em></p>
    	<p>Quick description of the project.</p>
	</div>
	<div class="col-2-3">
		<p><img src="http://placehold.it/1650x1096"></p>
    </div>
</div>

<h2>Sample projects</h2>
<ul class="workList">
{% for work in site.work %}
  <li><a href="{{ work.url }}" title="{{ work.title }}">{{ work.title }}</a></li>
{% endfor %}
</ul>