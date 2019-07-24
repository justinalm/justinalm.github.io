---
title: Jostle Comment Actions
description: Improving the UX when taking action on comments in chat.
date: 2019-06-21
layout: workPost
thumbnail: /assets/jostle-comment-actions/comment-actions-menu-thumb.jpg
details: Product
categories: [Work, Jostle-corporation, Case-studies]
workplace: Jostle Corporation
published: true
---

<div class="mw-1024  u-mar-auto  u-mar-b05">
    {% include post-header.html %}
    <div class="project-metadata  u-mar-auto  u-mar-t05  u-mar-b00">
        <div class="objective">
            <h2 class="as-h5  u-noMargin  u-mar-b01"><strong>Objective</strong>:</h2>
            <p class="u-noMargin  u-mar-b02">Provide an easier to use, more accessible, scalable, and easier to implement actions menu on comments in Jostle chat threads.</p>
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
    <div class="Grid  Grid--withGutters  Grid--alignMiddle">
        <div class="Grid-cell  u-size1of2">
            <h2 class="u-mar-t00"><a></a>The problem</h2>
            <p>In Jostle, <strong>action menus on comments weren’t built to scale</strong> and <strong>customers were missing table-stake actions found in popular chat apps for the workplace</strong>. There was <strong>a sentiment</strong> across review sites <strong>that Jostle was “old-school”</strong>. We had a Jira backlog of feature requests for improving functionality in chat. <strong>Some of the most popular requests were</strong>:</p>
            <ul>
                <li>“I want to <strong>reply</strong> to a comment”</li>
                <li>“I want to <strong>edit</strong> my comment and see the history of edits”</li>
                <li>“I want to <strong>favourite</strong> a comment and see all of my favourite comments one place”</li>
                <li>“I want to <strong>create a task</strong> from a comment”</li>
            </ul>
        </div>
        <div class="Grid-cell  u-size1of2">
            <div class="u-rounded-corners  u-border-shadow  u-mar-b02" style="position: relative; background-image: url('/assets/jostle-comment-actions/jostle-comment-actions-problem.jpg'); background-size: cover; background-position: center; min-height: 400px; max-height: 400px;">
                <p class="image-caption-overlay" style="color: #86a1ac; background-color: #435760;"><em>Modified photo by Robin Worrall on Unsplash</em></p>
            </div>
        </div>
    </div>
    <div class="Grid  Grid--withGutters  Grid--alignMiddle">
        <div class="Grid-cell  u-size1of1">
            <p class="mw-600  bp1-u-textAlign-center  as-h3  u-mar-auto  u-mar-t05  u-mar-b02">Adding more actions on comments pulled on <strong>a thread of other interconnected issues</strong>.</p>
        </div>
        <div class="Grid-cell  u-size1of2">
            <div class="media  u-rounded-corners  u-border-shadow" style="padding-top: 37.5%;">
                <video autoplay loop muted playsinline type="video/mp4" src="/assets/jostle-comment-actions/likes-appearing-inline.mp4" poster="/assets/jostle-comment-actions/likes-appearing-inline-poster.jpg"></video>
            </div>
            <p class="c-grey03  u-mar-t01  u-mar-b00"><em>Comment Actions Menu before improvements.</em></p>
        </div>
        <div class="Grid-cell  u-size1of2">
            <ul class="u-mar-t00  u-mar-b05">
                <li><strong>Affordance</strong>. The tappable area for an action was small making the menu difficult to interact with on mobile.</li>
                <li><strong>Layout</strong>. After a comment received “likes”, a link appeared between the heart and link icons. Adding “replies” and “favorites” to the menu would put pressure on horizontal real estate. In addition, the timestamp on the comment already got covered after “likes” were given. This issue was even worse when text was localized into other languages.</li>
                <li><strong>Persistance</strong>. Reactions were display inline, which meant we persisted the entire action menu just because 1 person liked a comment. This forced actions like “Delete” to persist even though we didn’t want people to perform that action.  </li>
                <li><strong>Discoverability</strong>. We didn’t display tooltips when you hovered over an action, which made the menu confusing for new users.</li>
            </ul>
        </div>
    </div>
    <div class="Grid  Grid--withGutters  Grid--alignMiddle">
        <div class="Grid-cell  u-size1of2">
            <p class="as-h3  u-mar-t00">Enterprise internal communications apps like Slack, Workplace by Facebook, Google Hangouts, Microsoft Teams, and Telegram are now part of our workday. Chat is in collaboration tools like Asana, G Suite, and Dropbox. People are used to having multiple actions on a comment at their convenience.</p>
        </div>
        <div class="Grid-cell  u-size1of2">
            <img class="u-rounded-corners  u-border-shadow  u-mar-b05" src="/assets/jostle-comment-actions/internal-communications-g2crowd.jpg"/>
        </div>
    </div>
    <div class="Grid  Grid--withGutters  Grid--alignMiddle">
        <div class="Grid-cell  u-size1of2">
            <div class="media  u-rounded-corners  u-border-shadow  u-mar-b02" style="padding-top: 92.5%;">
                <video class="u-rounded-corners  u-border-shadow" autoplay loop muted playsinline type="video/mp4" src="/assets/jostle-comment-actions/comment-actions-menu.mp4" poster="/assets/jostle-comment-actions/comment-actions-menu-video-poster.jpg"></video>
                <p class="image-caption-overlay  c-grey03  u-border-shadow"><em>Final outcome.</em></p>
            </div>
        </div>
        <div class="Grid-cell  u-size1of2">
            <h2 class="u-mar-t00">The solution</h2>
            <p>We improved Comment Actions in Jostle by making the UI:</p>
            <ol>
                <li><strong>Scalable</strong>. Frequently used actions can be “pinned” in front of the overflow menu. Less frequently used actions can be relegated to the overflow menu.</li>
                <li><strong>Considerate of content</strong>. The menu got bigger so we popped it above the comment block. This way it doesn’t obscure the comment. Our solution still covers timestamps at narrow widths but we were okay with this trade-off. We figured, the timestamp may not be <em>that</em> important once you’ve decided to interact with the action menu.</li>
                <li><strong>Easier to interact with</strong>. We increased the tappable area of actions from 17pt to 40pt, which increased affordance on mobile and desktop.</li>
                <li><strong>Intentional</strong>. We separated <em>performing</em> an action from <em>viewing</em> reactions. This also also solved the issue of longer translations for labels breaking the layout. Translations in tooltips weren’t problematic because they appeared independently from the rest of the UI.</li>
                <li><strong>Enjoyable to use</strong>. We improved spacing, color, and animated transitions to make interacting with the menu feel smooth—all in adherance with The Jostle Style Guide.</li>
            </ol>
        </div>
    </div>
</div>

<!-- <div class="mw-700  u-mar-auto  u-mar-b05">
    <p><strong>Improving scalability</strong><br>
    We already had 3 actions that appeared when you hovered over a comment. We didn’t want this menu to grow out of control.</p>
    <div class="Grid  Grid--withGutters">
        <div class="Grid-cell  u-size1of2">
            <figure class="bp1-u-textAlign-center  u-mar-t02">
                <img style="max-width: 320px;" class="w-auto  u-rounded-corners  u-border-shadow" src="/assets/jostle-comment-actions/old-layout-likes-between-actions.jpg"/>
                <figcaption>“Likes” count appeared between actions</figcaption>
            </figure>
        </div>
        <div class="Grid-cell  u-size1of2">
            <figure class="bp1-u-textAlign-center  u-mar-t02">
                <img style="max-width: 320px;" class="w-auto  u-rounded-corners  u-border-shadow" src="/assets/jostle-comment-actions/old-layout-likes-between-actions.jpg"/>
                <figcaption>“Likes” count appeared between actions</figcaption>
            </figure>
        </div>
    </div>
    <figure class="bp1-u-textAlign-center  u-mar-t02">
        <img style="max-width: 320px;" class="w-auto  u-rounded-corners  u-border-shadow" src="/assets/jostle-comment-actions/old-layout-likes-between-actions.jpg"/>
        <figcaption>“Likes” count appeared between actions</figcaption>
    </figure>
</div>


<div class="mw-1024  u-mar-auto">
    <div class="mw-700  u-mar-auto  u-pad-t05">
        <h3>An improved menu:</h3>
        <p>The action menu needed to work on the smallest supported mobile device, all the way up to the widest desktop screen. iPhone SE users force the greatest constraint with a display size of just 320x568 points. Considering this fact, I started to design mobile first. I made the assumption, if the design works for people tapping on “small” smart phones while walking to work, it will most likely work when they pick up where they left off sitting at their desk—on their desktop computer.</p>
    </div>
    <div class="Grid  Grid--withGutters">
        <div class="Grid-cell  u-size1of3">
            <img class="u-rounded-corners  u-border-shadow" src="/assets/jostle-comment-actions/comment-hover-state.jpg"/>
        </div>
        <div class="Grid-cell  u-size1of3">
            <img class="u-rounded-corners  u-border-shadow" src="/assets/jostle-comment-actions/comment-actions-menu-tooltips.jpg"/>
        </div>
        <div class="Grid-cell  u-size1of3">
            <img class="u-rounded-corners  u-border-shadow  u-mar-b02" src="/assets/jostle-comment-actions/comment-reactions-under.jpg"/>
        </div>
        <div class="Grid-cell  u-size1of1">
            <img class="u-rounded-corners  u-border-shadow  u-mar-b02" src="/assets/jostle-comment-actions/1024-comment-actions-menu-tooltips.jpg"/>
        </div>
    </div>
</div>

<div class="mw-700  u-mar-auto  u-mar-b05">
    <h2>Scalable so we can add more features</h2>
    <h2>Considerate of content</h2>
    <h2>Intentional by separating <em>performing</em> actions from <em>viewing</em> reactions</h2>
    <p>I decided to move reactions to Comments bottom-left of the Comment. These reactions had a few states:</p>
    <ul>
        <li>If you haven’t reacted to a Comment, the black outlined heart icon will appear will with the count beside it.</li>
        <li>This same black outlined heart icon will appear in the Comment Actions menu in the top-right corner of the Comment.</li>
        <li>After you’ve Liked a Comment, both hearts—in the Comment Actions and the response below the Comment—will fill red and a count will appear beside the below the Comment. You can click on the heart below the Comment or the heart in the Comment Actions to change your reaction.</li>
    </ul>
    <p>Jostle had a pesky usability problem with “likes”. The action to “like” a comment was  was next to the display of how many people already liked the comment. There was little affordance between these tap-able elements and they changed states based on whether or not you personally like the comment or the number of likes a comment received. On a mobile device, it was easy to mishit the like action and frustratedly find yourself in a modal view looking at a list of people who already liked a comment. I took this into consideration when design the new layout for the action menu.</p>
    <p>As with all Jostle components, we wanted the Comment Action Menu to be universal across desktop and mobile.</p>
    <p>To further complicate things, when people discovered I was designing a reusable, scalable, easy to implement component for Action Menus on Discussion Comments, developers from other product teams started to make plans for implementing this new component across other views. This was good news because components tend to deliver a more consistent user experience and make it easier to implement new features. The bad news was I had to work extra hard on building consensus in order for everyone to agree on a design.</p>
    <h2>Enjoyable to use</h2>
    <p>Feel free to contact me if there’s anything you noticed about this case study.</p>
</div> -->