---
layout: post
published: true
title: Copy File Path In Finder
description: I often prep assets and leave them on DropBox for the engineer to implement later. Sharing the location of assets is annoying.
thumbnail: '{{ site.url }}/images/finder-automator.png'
date: 2014-01-09 12:56
---
<img src="{{ site.url }}/images/finder-automator.png" title="Finder app icon"/>
I often prep assets and leave them on DropBox for the engineer to implement later. Sharing the location of assets is annoying. For the past couple years, my work flow for this task has looked like this:
<ol class="numbered-list">
	<li>Opening a Finder window</li>
	<li>Press command+i on the keyboard to open the Info Window for a particular file</li>
	<li>Highlight the path for the file</li>
	<li>Press command+c on the keyboard to copy the path</li>
	<li>Paste the path into the GitHub Issue so the engineer can find the location of the asset later</li>
</ol>

For such a simple task, this involves too much opening and closing of windows and highlighting text. Another solution is to share the DropBox link. When DropBox.app is running, you can right-click on a file in Finder and find “Share DropBox Link” in the fly out menu. An issue I have with this method is the link is opened in the browser, which is really just another window with a representation of the file. This is not the best flow for the engineer to add assets to the Xcode project. Once again, too many windows to open and close…

I searched the Internet and found [MacYourself](http://www.macyourself.com/2011/12/31/copy-file-or-folder-path-to-the-clipboard-in-mac-os-x-lion/) has already come up with the solution. You can easily setup tasks for Finder to perform using Automator.app. Welcome to asset link sharing bliss!