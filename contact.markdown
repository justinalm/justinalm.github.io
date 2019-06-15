---
layout: default
title: Contact
description: Get a quote for design services on your next project.
date: 2016-09-12 22:19:00 -07:00
thumbnail: /assets/know-ideas/know-ideas-cover.jpg
---

<div class="mw-600  u-mar-auto  u-mar-b05">
    <h1 class="u-noMargin  u-mar-b01"><strong>Need deisgn?</strong></h1>
    <p class="as-h3  u-noMargin  u-mar-b05"><strong>Call on me</strong> and <strong>I will respond</strong>. Share <strong>a few details about</strong> yourself, your company, <strong>your project</strong> in need of design services.</p>
    <div class="mw-600  u-mar-b05">
    <form action="{{% site.url %}}/success/" name="contact" method="POST" data-netlify="true" class="u-mar-b05">
        <div class="u-mar-b02">
            <label><strong>Your name</strong> <span class="c-grey03">(Required)</span><br>
            <input class="Input--block  u-mar-t01" type="text" name="name" placeholder="Jane Appleseed" required="required" /></label>
        </div>
        <div class="u-mar-b02">
            <label><strong>Your email</strong> <span class="c-grey03">(Required)</span><br>
            <input class="Input--block  u-mar-t01" type="email" name="email" placeholder="jane@acme.com" required="required" /></label>
        </div>
        <div class="u-mar-b02">
            <label><strong>Company name</strong> <span class="c-grey03">(Required)</span><br>
            <input class="Input--block  u-mar-t01" type="text" name="company-name" placeholder="Acme Corporation" required="required" /></label>
        </div>
        <div class="u-mar-b02">
            <strong>Type of project</strong>:<br>
            <input type="checkbox" id="web-app" name="type-of-project" value="web-app"><label for="web-app">&nbsp;Web</label><br>
            <input type="checkbox" id="ios-app" name="type-of-project" value="ios-app"><label for="ios-app">&nbsp;iOS</label><br>
            <input type="checkbox" id="android-app" name="type-of-project" value="android-app"><label for="android-app">&nbsp;Android</label>
        </div>
        <div class="u-mar-b02">
            <strong>Estimated budget</strong> <span class="c-grey03">(Required)</span>:<br>
            <input type="radio" id="under-5k" name="budget" value="under-5k" required><label for="under-5k">&nbsp;Under $5k</label><br>
            <input type="radio" id="5k-to-25k" name="budget" value="5k-to-25k"><label for="5k-to-25k">&nbsp;$5k – $25k</label><br>
            <input type="radio" id="over-25k" name="budget" value="over-25k"><label for="over-25k">&nbsp;Over $25k</label>
        </div>
        <div class="u-mar-b04">
            <label><strong>Message</strong> <span class="c-grey03">(Required)</span><br><textarea class="Input--block  u-mar-t01" name="message" rows="4" placeholder="Tell me about your project." required="required"></textarea></label>
        </div>
        <div>
            <button class="Btn  Btn--block  Btn--confirm" type="submit">Send</button>
        </div>
    </form>
</div>
</div>