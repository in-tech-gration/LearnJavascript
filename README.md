LearnJavascript: A list of resources
====================================

This list originated from this [discussion](http://www.linkedin.com/groupItem?view=&gid=121615&item=5909742634301140992&type=member&commentID=5909826380652113920&trk=eml-ntf-hero-like-my-discussion-cmt&midToken=AQG2dgaKId8xLA&fromEmail=fromEmail&ut=2sQj9Dud2coCo1#commentID_5909826380652113920) on LinkedIn's Javascript group.

Contributors:

Kudos to **[Dimitrios Michalakos](http://gr.linkedin.com/in/dmichalakos)** for suggesting the `Understand the Single Threaded Process & Event Loop` section and providing me with the links.

### LEARNING

* Understand type coercion
* Get a good understaning of `Functions`, [`Scope` and `Hoisting`](http://justinchmura.com/2014/08/20/become-a-better-javascript-developer/) 
* Study `Objects`, [`Prototypal Inheritance` and `OOP`](http://manuel.kiessling.net/2012/03/23/object-orientation-and-inheritance-in-javascript-a-comprehensive-explanation/)
* Understand `callbacks`, `IIFEs` and `asynchronicity` 
* Study the source code of popular libraries: [jQuery](http://jquery.com/), [underscore](http://underscorejs.org/), etc. 

 Here are 2 great videos on the subject by Paul Irish: 
 * [10 Things I Learned from the jQuery Source](http://www.youtube.com/watch?v=i_qE1iAmjFg)
 * [11 More Things I Learned from the jQuery Source](http://www.youtube.com/watch?v=ARnp9Y8xgR4)
* Watch every video by Douglas Crockford.
* Take the full course ['JavaScript The Good Parts'](http://frontendmasters.com/courses/javascript-the-good-parts/#toc) by Douglas Crockford on [Front End Masters](http://frontendmasters.com)
* Get a really good understanding of [closures](http://bonsaiden.github.io/JavaScript-Garden/#function.closures) and [this](http://bonsaiden.github.io/JavaScript-Garden/#function.this) 
* Study performance and code optimization

 Here is a good article by Nicholas Zakas: 
 [10 Javascript Performance Boosting Tips](http://jonraasch.com/blog/10-javascript-performance-boosting-tips-from-nicholas-zakas)

* Check every tip on the [A Drip of JavaScript](http://designpepper.com/js-drip-archive/) list and subscribe to it.
* Check [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/).

	**JavaScript Garden** *is a growing collection of documentation about the most quirky parts of the JavaScript programming language. It gives advice to avoid common mistakes and subtle bugs, as well as performance issues and bad practices, that non-expert JavaScript programmers may encounter on their endeavours into the depths of the language.*

* Read some books. You can find some great books for JS on the BOOKS section of this list.
* Learn how to debug your JS code. Here are some good links as a starting point:

 [Debugging JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging)
 [Chrome DevTools Command Line API Reference](https://developer.chrome.com/devtools/docs/commandline-api)

* Study JavaScript Patterns and Anti-Patterns:

 * [Learning JavaScript Design Patterns, Addy Osmani](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)
 * [Javascript Patterns, moderated by *Shi Chuan*](http://shichuan.github.io/javascript-patterns/)

* Understand the Single Threaded Process & Event Loop. 

 * [Concurrency model and Event Loop, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/EventLoop)
 * [The JavaScript Event Loop: Explained, By Erin  Swenson-Healey](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
 * [Understanding the node.js event loop, by *Mixu*](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)
 * [Introduction to Javascript Processes, by *Nico Valencia *](http://quickleft.com/blog/introduction-to-javascript-processes)
 * [How JavaScript Timers Work, By John Resig](http://ejohn.org/blog/how-javascript-timers-work/)

* Study some of the modern APIs: [WebRTC](https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC), [File API](https://developer.mozilla.org/en-US/docs/Web/API/File), [Blob API](https://developer.mozilla.org/en-US/docs/Web/API/Blob), etc. 
* Master `Regular Expressions`. 
* Get in the habit of testing. **(Crucial!)**. [QUnit](http://qunitjs.com/) is a good starting point. 
* Subscribe to these great YouTube channels and watch every video you can:

 * [CascadiaJS](https://www.youtube.com/user/cascadiajs)
 * [JSConf](https://www.youtube.com/user/jsconfeu)

* Learn some framework or library like [jQuery](http://jquery.com/), [Backbone.JS](http://backbonejs.org/), [underscore](http://underscorejs.org/), [Angular](https://angularjs.org/), [Ember](http://emberjs.com/), [Knockout.JS](http://knockoutjs.com/), etc. 
* [Try building a ToDo App using one of these libraries](http://todomvc.com/)
* Get to know [Node.JS](http://nodejs.org/) and start building apps. 
 * Try running server-side JS code usign `Node.JS` on [Runnable.com](http://runnable.com/)
 * Install [Node.JS](http://nodejs.org/) locally and start experimenting.
* Subscribe to Newsletters and stay up to date with JS and Node. *(See section `3.8 NEWSLETTERS`)*
* Become familiar with a Task Manager like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/).
* Start building Desktop Applications using HTML/JavaScript in [Node-Webkit](https://github.com/rogerwang/node-webkit).
* Follow some of the masters on Twitter. *(See `section 3.6` of the RESOURCES section)*

### 2. SUGGESTED CODING RULES AND BEST PRACTIVES

* Always use `var` when declaring a variable
* [Code using `"use strict"`](http://justinchmura.com/2014/08/20/become-a-better-javascript-developer/) 
* [Always use semicolons.](http://bonsaiden.github.io/JavaScript-Garden/#core.semicolon) 
* [Prefer using `===` over `==`](http://bonsaiden.github.io/JavaScript-Garden/#types.equality) 
* Always use curly braces 
* Comment your code
* [Avoid/Reduce global variables](http://justinchmura.com/2014/08/20/become-a-better-javascript-developer/) 
* Avoid using `with()` 
* [Avoid using `eval()`](http://bonsaiden.github.io/JavaScript-Garden/#core.eval)
* Pass functions instead of strings to setTimeout or setInterval, as this triggers eval() internally. 
* Use [JSHint](http://www.jshint.com/) / [JSLint](http://www.jslint.com/)
 * [Inline lint highlighting for the Sublime Text 2 editor](https://github.com/SublimeLinter/SublimeLinter-for-ST2)
 * [Interactive code linting framework for Sublime Text 3](https://github.com/SublimeLinter/SublimeLinter3)

*The difference between JavaScript and JavaScript with __use strict__*
![Alt text](/img/usestrict.jpg "Make a difference by coding with use strict")

### 3. RESOURCES

#### 3.1 BEGINNER RESOURCES

* [JavaScript For Cats, *by Max Ogden*](http://jsforcats.com/)
* [JavaScript Guide, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JAVASCRIPT FUNDAMENTALS, *by Azat Mardan*](http://gist.io/5955726)
* [5 Tips to Become a Better JavaScript Developer, *by JUSTIN CHMURA*](http://justinchmura.com/2014/08/20/become-a-better-javascript-developer/)
* [JS 101](http://www.teaching-materials.org/javascript/)
* [7 JavaScript Basics Many Developers Aren't Using (Properly)](http://tech.pro/tutorial/1453/7-javascript-basics-many-developers-aren-t-using-properly)
* [5 Tips to Become a Better JavaScript Developer](http://justinchmura.com/2014/08/20/become-a-better-javascript-developer/)
* [JavaScript Idiosyncrasies](https://github.com/miguelmota/javascript-idiosyncrasies)

> TESTING CODE

* [JSBin](http://jsbin.com/)
* [JSFiddle](http://jsfiddle.net/)

#### 3.2 GENERAL

* [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [Learn JavaScript Essentials (for all skill levels), by Eric Elliott](https://medium.com/javascript-scene/learn-javascript-b631a4af11f2)
* [JavaScript, The Right Way](http://www.jstherightway.org/)
* [Learn Javascript resources on MDN](https://developer.mozilla.org/en/learn/javascript)
* [Dos and Donts: Best Practices When Learning JavaScript](https://www.youtube.com/watch?v=zILmbcIYnfw)
* [The site of Dr. Axel Rauschmayer](http://www.2ality.com/)
* [David Walsh's Blog](http://davidwalsh.name/)
* [DailyJS](http://dailyjs.com/)
* [Understand JavaScript Closures With Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* [JavaScript the Right Way](http://jstherightway.org/)

> PERFORMANCE

* [JavaScript Performance Analysis: Keeping the Big Picture, *by Ariya Hidayat*](http://calendar.perfplanet.com/2013/javascript-performance-big-picture/)
* [Speeding up JavaScript: Working with the DOM](https://developers.google.com/speed/articles/javascript-dom)
* [Javascript optimization – high performance JS apps](http://www.mellowmorning.com/2008/05/18/javascript-optimization-high-performance-js-apps/)
* [Writing Efficient JavaScript: Chapter 7 - Even Faster Websites, *by Nicholas C. Zakas*](http://oreilly.com/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html)
* [A Couple of Quick Tips for JavaScript Optimization](https://mondaybynoon.com/a-couple-of-quick-tips-for-javascript-optimization/)
* [CSS TRIGGERS](http://csstriggers.com/)

> DEBUGGING

* [Debugging JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging)
* [Chrome DevTools Command Line API Reference](https://developer.chrome.com/devtools/docs/commandline-api)

> ADVANCED

* [JavaScript language advanced Tips & Tricks](https://code.google.com/p/jslibs/wiki/JavascriptTips)
* [Byte saving techniques: a collection of JavaScript wizardry that can shave bytes off of your code](https://github.com/jed/140bytes/wiki/Byte-saving-techniques)

#### 3.3 NODE

> BEGINNERS

* [Node.js for Beginnersby Maciej Sopyło](http://code.tutsplus.com/tutorials/node-js-for-beginners--net-26314)
* [Node School](http://nodeschool.io/)
* [Resources to Get You Up to Speed in Node.js](http://code.tutsplus.com/articles/resources-to-get-you-up-to-speed-in-nodejs--cms-21431)
* [Getting Started With NodeJS: Installing And Writing Your First Code](http://sub.watchmecode.net/getting-started-with-nodejs-installing-and-writing-your-first-code/)
* [UNDERSTANDING MODULE.EXPORTS AND EXPORTS IN NODE.JS](http://www.choskim.me/understanding-module-exports-and-exports-in-node-js/)
* [Introduction to the MEAN Stack](http://code.tutsplus.com/tutorials/introduction-to-the-mean-stack--cms-19918)
* [Felix's Node.js Beginners Guide](http://nodeguide.com/beginner.html)
* [8 NPM Tips for Better Node Development](http://scottksmith.com/blog/2014/06/25/8-npm-tips-for-better-node-development/)
* [Command-line utilities with Node.js](http://cruft.io/posts/node-command-line-utilities/)
* [Receiving Emails with Node](http://dailyjs.com/2014/06/05/mailin/)
* [Build a Killer Node.js Client for Your REST+JSON API](https://stormpath.com/blog/build-a-killer-node-dot-js-client-for-your-rest-plus-json-api/)
* [Beer Locker: Building a RESTful API With Node - Passport](http://scottksmith.com/blog/2014/05/29/beer-locker-building-a-restful-api-with-node-passport/)

> EXPRESS.JS

* [Express.js Fundamentals](http://modernweb.com/2013/11/11/express-js-fundamentals/)
* [The Basics of Express Routes](http://modernweb.com/2014/04/07/the-basics-of-express-routes/)
* [LEARNING EXPRESS 4](http://blog.modulus.io/learning-express-four)
* [Creating a REST API using Node.js, Express, and MongoDB](http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/)
* [Restful: A Better REST API Using Node.js With Express](http://benaugarten.com/blog/2013/01/31/restful-a-better-rest-api-using-node-dot-js-with-express/)
* [Using Express.js for APIs](http://strongloop.com/strongblog/using-express-js-for-apis/)
* [Build a Complete MVC Website With ExpressJS]()
* [Simple form handling with Express and Nodemailer](http://blog.ragingflame.co.za/2012/6/28/simple-form-handling-with-express-and-nodemailer)
* [Form Validation With ExpressJS](http://blogs.telerik.com/backendservices/posts/13-11-21/form-validation-with-expressjs)
* [Migrating Express.js 3.x to 4.x: Middleware, Route and Other Changes](http://webapplog.com/migrating-express-js-3-x-to-4-x-middleware-route-and-other-changes/)
* [Intro to Express.js: Parameters, Error Handling and Other Middleware](http://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/)

> ADVANCED

* [Using Node.js in Production](http://modernweb.com/2014/06/23/using-node-js-in-production/)
* [Node.js in Production](http://blog.carbonfive.com/2014/06/02/node-js-in-production/)
* [Scaling Node.js with recluster](https://medium.com/@garychambers108/scaling-node-js-with-recluster-f04dd346108c)
* [Comparison: Tools to Automate Restarting Node.js Server After Code Changes](http://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/)
* [Error Handling in Node.js](http://www.joyent.com/developers/node/design/errors)
* [Using Node.js to join audio files](http://blog.ragingflame.co.za/2013/5/31/using-nodejs-to-join-audio-files)

> BOOKS

* [Node: Up and Running, *by Tom Hughes-Croucher and Mike Wilson*](http://chimera.labs.oreilly.com/books/1234000001808/index.html)
* [The Node Beginner Book](http://www.nodebeginner.org/)

> VIDEOS

* [NodeTuts: Node.JS Video Tutorials](http://nodetuts.com/)

> HOSTING PLATFORMS

* [Modulus](https://modulus.io/)
* [Nitrous.IO](https://www.nitrous.io/)
* [Cloud9](https://c9.io/)
* [Heroku](https://www.heroku.com/)
* [OpenShift](https://www.openshift.com/)
* [NodeJitsu](https://www.nodejitsu.com/)

#### 3.4 FRAMEWORKS AND LIBRARIES

##### 3.4.1 BACKBONE.JS

* [Introduction to Backbone Js and Setting Up an Working Environment – Learning Backbone Js](http://www.codebeerstartups.com/2012/12/introduction-to-backbone-js-and-setting-up-an-working-environment/)
* [Single Page ToDo Application With Backbone.js](http://code.tutsplus.com/tutorials/single-page-todo-application-with-backbonejs--cms-21417)
* [Developing Backbone.js Applications, *by Addy Osmani*](https://github.com/addyosmani/backbone-fundamentals)
* [Your First Backbone.js App – Service Chooser, *by Martin Angelov*](http://tutorialzine.com/2013/04/services-chooser-backbone-js/)

> CODE

* [Super Simple Backbone Starter Kit and Boilerplate](https://github.com/azat-co/super-simple-backbone-starter-kit)

> BOOKS

* [Developing Backbone.js Applications, *By Addy Osmani*](http://addyosmani.github.io/backbone-fundamentals/)

##### 3.4.2 JQUERY

* [A tidy repository of jQuery plugins, *by @psnka*](http://unheap.com/)

##### 3.4.3 ANGULAR JS

> TUTORIALS

* [3 Reasons to Choose AngularJS for Your Next Project](http://code.tutsplus.com/tutorials/3-reasons-to-choose-angularjs-for-your-next-project--net-28457)
* [Comprehensive Beginner’s Guide to AngularJS](http://antjanus.com/blog/web-development-tutorials/front-end-development/comprehensive-beginner-guide-angularjs/)
* [Recipes with Angular.js](http://fdietz.github.io/recipes-with-angular-js/)
* [AngularJS for Absolute Beginners, *by David East*](http://medialoot.com/blog/angularjs-for-absolute-beginners/)
* [Learn AngularJS With These 5 Practical Examples](http://tutorialzine.com/2013/08/learn-angularjs-5-examples/)
* [How to Learn AngularJS - Your AngularJS Sherpa](http://www.ng-newsletter.com/posts/how-to-learn-angular.html)
* [ANGULARJS: SHOPPING LIST APPLICATION](http://return-true.com/2013/06/angularjs-shopping-list-application-part-1/)
* [Building a Spreadsheet in 20 Minutes with Angular.js, *by David Graunke*](http://thomasstreet.com/blog/legacy/spreadsheet.html)
* [Learning AngularJS by Example – The Customer Manager Application](http://weblogs.asp.net/dwahlin/learning-angularjs-by-example-the-customer-manager-application)
* [Web Spreadsheet in 99 lines using Angular](https://github.com/audreyt/500lines/blob/master/spreadsheet/chapter.md)
* [Fun with AngularJS!](http://devgirl.org/2013/03/21/fun-with-angularjs/)
* [AngularJS Cheat Sheet](http://www.cheatography.com/proloser/cheat-sheets/angularjs/)
* [Speeding up AngularJS apps with simple optimizations](http://www.binpress.com/tutorial/speeding-up-angular-js-with-simple-optimizations/135)
* [Optimizing AngularJS: 1200ms to 35ms](http://blog.scalyr.com/2013/10/angularjs-1200ms-to-35ms/)

> VIDEOS

* [AngularJS Fundamentals In 60-ish Minutes, *by Dan Wahlin*](https://www.youtube.com/watch?v=i9MHigUZKEM) 

> NEWSLETTERS

* [ng-newsletter: The free, weekly newsletter of the best AngularJS content on the web](http://www.ng-newsletter.com/)

#### 3.5 BOOKS

 * [JavaScript: The Good Parts, *by Douglas Crockford*](http://shop.oreilly.com/product/9780596517748.do)
 * [JavaScript, The Definitive Guide, *by David Flanagan*](http://shop.oreilly.com/product/9780596805531.do)
 * [High Performance JavaScript, *by Nicolas Zakas*](http://shop.oreilly.com/product/9780596802806.do)
 * [Secrets of the JavaScript Ninja, *by John Resig*](http://ejohn.org/blog/secrets-of-the-javascript-ninja-released/)
 * [Programming JavaScript Applications, *by Eric Elliot*](http://learn-javascript.ericelliott.me/programming-javascript-applications/)
 * [Professional JavaScript for Web Developers *by Nicolas Zakas*](http://www.wrox.com/WileyCDA/WroxTitle/Professional-JavaScript-for-Web-Developers-3rd-Edition.productCd-1118222199.html)

#### 3.6 ONLINE BOOKS

 * [JavaScript For Cats, *by Max Ogden*](http://jsforcats.com/javascript-for-cats.pdf) **(Free PDF)**
 * [Eloquent Javascript, *by Marijn Haverbeke*](http://eloquentjavascript.net/)	**(Free Online Version)**
 * [Speaking JavaScript: An In-Depth Guide for Programmers, by *Dr. Axel Rauschmayer*](http://speakingjs.com/) **(Free Online Version)**

#### 3.7 VIDEO & AUDIO

##### 3.7.1 VIDEO

 * [Javascript, the Good Parts, GoogleTechTalks, *Douglas Crockford*](https://www.youtube.com/watch?v=hQVTIJBZook)
 * [Douglas Crockford: The JavaScript Programming Language](https://www.youtube.com/watch?v=v2ifWcnQs6M)
 * [10 Things I Learned from the jQuery Source, *Paul Irish*](http://www.youtube.com/watch?v=i_qE1iAmjFg)
 * [11 More Things I Learned from the jQuery Source, *Paul Irish*](http://www.youtube.com/watch?v=ARnp9Y8xgR4)
 * [Paul Irish, "Delivering the goods"](https://www.youtube.com/watch?v=R8W_6xWphtw)
 * [Paul Irish, "JavaScript Development Workflow of 2013"](https://www.youtube.com/watch?v=f7AU2Ozu8eo)

##### 3.7.2 AUDIO

* [The Origin of Javascript with Brendan Eich](http://javascriptjabber.com/124-jsj-the-origin-of-javascript-with-brendan-eich/)
* [5 Minutes of JavaScript](http://five-js.envylabs.com/)

#### 3.8 NEWSLETTERS

 * [JavaScript Weekly](http://javascriptweekly.com/) 
 * [A Drip of JavaScript](http://designpepper.com/a-drip-of-javascript/)
 * [Node Weekly](http://nodeweekly.com/)
 * [ng-newsletter: The free, weekly newsletter of the best AngularJS content on the web](http://www.ng-newsletter.com/)

#### 3.9 DEVELOPERS (TWITTER, BLOGS)

DEVELOPER  | TWITTER | BLOG | VIDEO CHANNEL
------------- | ------------- | ------------- | -------------
Paul Irish | [Twitter](http://twitter.com/paul_irish) | |
Brendan Eich | [Twitter](http://twitter.com/BrendanEich) | |
Ariya Hidayat | [Twitter](http://twitter.com/ariyahidayat) | [Blog](http://ariya.ofilabs.com/) | [YouTube](https://www.youtube.com/user/ariyahidayat)
John Resig | [Twitter](http://twitter.com/jeresig) | |
Axel Rauschmayer | [Twitter](http://twitter.com/rauschma) |	|
Jeremy Ashkenas | [Twitter](http://twitter.com/jashkenas) | |
Nicholas Zakas | [Twitter](http://twitter.com/slicknet) | |
Addy Osmani | [Twitter](http://twitter.com/addyosmani) | |
Christian Heilmann | [Twitter](http://twitter.com/codepo8) | |
Remy Sharp | [Twitter](http://twitter.com/rem) | |
David Walsh | [Twitter](http://twitter.com/davidwalshblog) | |
Rebecca Murphey | [Twitter](http://twitter.com/rmurphey) | [Blog](http://rmurphey.com/) |
David Flanagan | [Twitter](http://twitter.com/__DavidFlanagan) | |
Ilya Grigorik | [Twitter](http://twitter.com/igrigorik) | |
Azat Mardan | [Twitter](https://twitter.com/azat_co) | |
Dmitry Baranovskiy | [Twitter](https://twitter.com/DmitryBaranovsk) | |
Pamela Fox | [Twitter](https://twitter.com/pamelafox) | [Blog](http://blog.pamelafox.org/) |

#### 3.10 TOOLS

##### 3.10.1 GIT

 * [Introduction to GitHub, youTube video *by Curran Kelleher*](https://www.youtube.com/watch?v=Q6HbQRWAMM4) 

#### 3.11 JAVASCRIPT COMPILED LANGUAGES

##### 3.11.1 COFFEESCRIPT

 * [CoffeeScript official site](http://coffeescript.org/)

> BOOKS

 * [Smooth CoffeeScript](http://autotelicum.github.io/Smooth-CoffeeScript/)
 * [The Little Book on CoffeeScript](http://arcturo.github.io/library/coffeescript/)

------

![Alt text](/img/javascript-please-work.jpg "JavaScript please work")