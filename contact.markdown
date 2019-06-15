---
layout: default
title: Contact
description: Get a quote for design services on your next app.
date: 2016-09-12 22:19:00 -07:00
thumbnail: /assets/know-ideas/know-ideas-cover.jpg
---

<div class="mw-600  u-mar-auto  u-mar-b05">
    <h1 class="u-noMargin  u-mar-b01"><strong>Need a beautiful app?</strong></h1>
    <p class="as-h3  u-noMargin  u-mar-b05"><strong>Call on me</strong> and <strong>I will respond</strong>. Share <strong>a few details about</strong> yourself, your company, and <strong>your project</strong> in need of design.</p>
    <div class="mw-600  bgc-grey01  u-mar-auto  u-mar-b05  u-rounded-corners  u-border-shadow">
        <form action="/success" netlify-honeypot="bot-field" name="contact" method="POST" data-netlify="true">
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field"></label>
            </p>
            <p class="u-mar-t00  u-mar-b02">
                <label><strong>Your name</strong> <span class="c-grey03">(Required)</span><br>
                <input class="Input  Input--block  u-mar-t01" type="text" name="name" placeholder="Jane Appleseed" required="required" /></label>
            </p>
            <p class="u-mar-t00  u-mar-b02">
                <label><strong>Your email</strong> <span class="c-grey03">(Required)</span><br>
                <input class="Input  Input--block  u-mar-t01" type="email" name="email" placeholder="jane@acme.com" required="required" /></label>
            </p>
            <p class="u-mar-t00  u-mar-b02">
                <label><strong>Company name</strong> <span class="c-grey03">(Required)</span><br>
                <input class="Input  Input--block  u-mar-t01" type="text" name="company-name" placeholder="Acme Corporation" required="required" /></label>
            </p>
            <div class="Grid">
                <div class="Grid-cell  u-size1of2">    
                    <p class="u-mar-t00  u-mar-b02">
                        <strong>Type of project</strong>:<br>
                        <input type="checkbox" name="Type of project" id="web-app" value="web-app"><label for="web-app">&nbsp;Web</label><br>
                        <input type="checkbox" name="Type of project" id="ios-app" value="ios-app"><label for="ios-app">&nbsp;iOS</label><br>
                        <input type="checkbox" name="Type of project" id="android-app" value="android-app"><label for="android-app">&nbsp;Android</label>
                    </p>
                </div>
                <div class="Grid-cell  u-size1of2">
                    <p class="u-mar-t00  u-mar-b02">
                        <strong>Estimated budget</strong> <span class="c-grey03">(Required)</span>:<br>
                        <input type="radio" name="Budget" id="under-5k" value="Under $5k" required><label for="under-5k">&nbsp;Under $5k</label><br>
                        <input type="radio" name="Budget" id="5k-to-25k" value="$5k to $25k"><label for="5k-to-25k">&nbsp;$5k – $25k</label><br>
                        <input type="radio" name="Budget" id="over-25k" value="Over $25k"><label for="over-25k">&nbsp;Over $25k</label>
                    </p>
                </div>
            </div>
            <p class="u-mar-t00  u-mar-b04">
                <label><strong>Message</strong> <span class="c-grey03">(Required)</span><br><textarea class="Input  Input--block  u-mar-t01" name="message" rows="4" placeholder="Tell me about your project." required="required"></textarea></label>
            </p>
            <div>
                <button class="Btn  Btn--block  Btn--confirm" type="submit">Send</button>
            </div>
        </form>
    </div>
    <p class="u-textAlign-center">Don’t need design but still want to chat? Email me: <a href="mailto:almjustin@gmail.com" title="almjustin@gmail.com">almjustin@gmail.com</a>.</p>
</div>