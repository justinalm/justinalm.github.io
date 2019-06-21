---
title: Action menus in Jostle
description: Improving the experience of reacting to content shared in Jostle.
date: 2019-05-25
layout: workPost
thumbnail: https://www.placehold.it/1280x720
details: Product
categories: [Work, Case-studies]
workplace: Jostle Corporation
published: false
---

<div class="mw-1024  u-mar-auto  u-mar-b05">
    {% include post-header.html %}
    <div class="project-metadata  u-mar-auto  u-mar-t05  u-mar-b00">
        <div class="objective">
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>Objective</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">Provide an easier to use, more accessible, scalable, and easier to implement menu for taking action on content shared in Jostle.</p>
        </div>
        <div>
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>Design</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">Justin Alm</p>
        </div>
        <div>
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>Dev</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">Yvonne Liu<br>Artem Jeman<br>Aman Sarai</p>
        </div>
        <div>
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>PM</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">Felipe Gasparino</p>
        </div>
        <div>
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>Status</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">In production</p>
        </div>
    </div>
</div>

<div class="mw-1024  u-mar-auto  u-mar-b05">
    <div class="mw-700  u-mar-auto  u-mar-b05">
        <p>With the rise of great chat apps like Slack, WhatsApp, iOS Messages, Facebook Messenger, HipChat, etc., people have become accustomed to having multiple ways to interact with comments in a chat timeline. These apps provide multiple ways to take action on or react to comments, which contributes to their ethos of being ‘modern’.</p>
    </div>
    <div class="Grid  Grid--withGutters  Grid--alignMiddle">
        <div class="Grid-cell  u-size1of2">
            <h2 class="u-mar-t00"><a></a>The problem</h2>
            <p>Throughout Jostle, <strong>action menus on comments weren’t built to scale</strong> and <strong>many customers wanted to be able to perform more actions on comments</strong>. This detracted from Jostle’s appearance as a ‘modern’ app. Jostle had a Jira backlog of feature requests to add this functionality. Some of the most popular requests were:</p>
            <ul>
                <li>“I want to <strong>reply</strong> to a comment”</li>
                <li>“I want to <strong>edit</strong> my comment and see the history of edits”</li>
                <li>“I want to <strong>favourite</strong> a comment and see all of my favourite comments one place”</li>
                <li>“I want to <strong>create a task</strong> from a comment”</li>
            </ul>
        </div>
        <div class="Grid-cell  u-size1of2">
            <img class="u-rounded-corners  u-border-shadow" src="https://source.unsplash.com/1600x1600/?ios"/>
        </div>
        <div class="Grid-cell  u-size1of2">
            <img class="u-rounded-corners  u-border-shadow" src="https://source.unsplash.com/1600x1600/?app"/>
        </div>
        <div class="Grid-cell  u-size1of2">
            <p><strong>Shoe-horning more actions into the front of Jostle’s exist comment actions wasn’t the right solution</strong>. 3 actions already appeared on each comment: “Like”, “Copy link”, and “Delete”. As I do when I start every project, <strong>I started asking questions, which turned into challenges, and then turned into goals</strong> to design toward. My questions were:</p>
            <ul>
                <li>How do we add <strong>more actions without obscuring content</strong> shared in the timeline?</li>
                <li><strong>How many actions is too many</strong> actions in a menu?</li>
                <li><strong>When will the menu be too long or wide</strong> on small devices?</li>
                <li><strong>Should some actions be easier to access</strong>?</li>
                <li>The current menu is finicky on mobile. How can we <strong>separate <em>performing</em> an action from <em>viewing</em> reactions</strong>?</li>
            </ul>
        </div>
    </div>
</div>

<div class="mw-700  u-mar-auto  u-mar-b05">
    <h2>Goals</h2>
    <p><strong>Finding the answers to these questions was how we could measure the success of the design</strong>. Thus, <strong>our goals were to make actions menus</strong>:</p>
    <ul>
        <li><strong>Easy and enjoyable to use</strong></li>
        <li><strong>Universally accessible</strong></li>
        <li><strong>Scalable</strong></li>
    </ul>
    <h2>The solution</h2>
    <p>The action menu needed to work on the smallest supported mobile device, all the way up to the widest desktop screen. iPhone SE users force the greatest constraint with a display size of just 320x568 points. Considering this fact, I started to design mobile first. I made the assumption, if the design works for people tapping on “small” smart phones while walking to work, it will most likely work when they pick up where they left off sitting at their desk—on their desktop computer.</p>
    <h2 class="u-mar-t00">Exploration</h2>
    <p>Jostle had a pesky usability problem with “likes”. The action to “like” a comment was  was next to the display of how many people already liked the comment. There was little affordance between these tap-able elements and they changed states based on whether or not you personally like the comment or the number of likes a comment received. On a mobile device, it was easy to mishit the like action and frustratedly find yourself in a modal view looking at a list of people who already liked a comment. I took this into consideration when design the new layout for the action menu.</p>
    <h3>Making the action menu accessible across desktop and mobile</h3>
    <p>As with all Jostle components, we wanted the Comment Action Menu to be universal across desktop and mobile.</p>
    <p>To further complicate things, when people discovered I was designing a reusable, scalable, easy to implement component for Action Menus on Discussion Comments, developers from other product teams started to make plans for implementing this new component across other views. This was good news because components tend to deliver a more consistent user experience and make it easier to implement new features. The bad news was I had to work extra hard on building consensus in order for everyone to agree on a design.</p>
    <p>Reactions</p>
    <p>I decided to move reactions to Comments bottom-left of the Comment. These reactions had a few states:</p>
    <ul>
        <li>If you haven’t reacted to a Comment, the black outlined heart icon will appear will with the count beside it.</li>
        <li>This same black outlined heart icon will appear in the Comment Actions menu in the top-right corner of the Comment.</li>
        <li>After you’ve Liked a Comment, both hearts—in the Comment Actions and the response below the Comment—will fill red and a count will appear beside the below the Comment. You can click on the heart below the Comment or the heart in the Comment Actions to change your reaction.</li>
    </ul>
    <h2>Reflection</h2>
    <p>Feel free to contact me if there’s anything you noticed about this case study.</p>
</div>