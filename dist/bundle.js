(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const students = [
  {
    "name": "Melissa Bell",
    "img": "assets/img/bell",
    "bio": "Gardening, jigsaw puzzles, hiking, baking",
    "github": "https://github.com/melissabell456",
    "linkedin": "https://www.linkedin.com/in/melissakehayesbell/",
    "site": "https://melissabell456.github.io/MelissaBell_Portfolio/",
    "cap1": "https://mygarden-f2283.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Likely to Ask a Question"
  },
  {
    "name": "Kenzie Bottoms",
    "img": "assets/img/bottoms",
    "bio": "(Not so) secretly competitive artist and feminist who enjoys puzzles",
    "github": "https://github.com/kenziebottoms",
    "linkedin": "https://www.linkedin.com/in/kenzie-bottoms/",
    "site": "http://kenzie.ink",
    "cap1": "http://kenzie.ink/nss-front-capstone-mixify/",
    "cap2": "https://artograph.herokuapp.com/",
    "superlative": "Most Unnecessary Commits"
  },
  {
    "name": "Jake Brose",
    "img": "assets/img/brose",
    "bio": "I am a musician turned software engineer with a interest in virtual and augmented reality.",
    "github": "https://github.com/JakeBrose",
    "linkedin": "https://www.linkedin.com/in/jake-brose/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Spend Hundreds of Dollars on a Stormtrooper Costume"
  },
  {
    "name": "Courtney Brothers",
    "img": "assets/img/brothers",
    "bio": "\"If art interprets our dreams, the computer executes them in the guise of programs.\"  - Alan J. Perlis",
    "github": "https://github.com/CourtneyBrothers",
    "linkedin": "https://www.linkedin.com/in/courtney-brothers-93893415a/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Have Listened to a Podcast About It"
  },
  {
    "name": "Jordan Castelloe",
    "img": "assets/img/castelloe",
    "bio": "I'll talk your ear off about interactive fiction, ballad traditions, and barbecue.",
    "github": "https://github.com/jordan-castelloe",
    "linkedin": "https://www.linkedin.com/in/jordan-castelloe/",
    "site": "https://jordan-castelloe.github.io/",
    "cap1": "https://nss-capstone-75d59.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Likely to Narrate Their Code with Made-Up Songs"
  },
  {
    "name": "Joe Chesney",
    "img": "assets/img/chesney",
    "bio": "I was born to create.",
    "github": "https://github.com/joechesney",
    "linkedin": "https://www.linkedin.com/in/joe-chesney-216846b2/",
    "site": "",
    "cap1": "https://fec-jammr.firebaseapp.com",
    "cap2": "https://github.com/joechesney/Scoop",
    "superlative": "Most Likely to Know How Superlatives Work"
  },
  {
    "name": "Tim A. Conner",
    "img": "assets/img/conner",
    "bio": "Creative writing, world-building, horticulture, game development, linguistics, chess, and pen-and-ink drawing",
    "github": "https://github.com/TimAConner",
    "linkedin": "https://www.linkedin.com/in/TimAConner",
    "site": "",
    "cap1": "http://timaconner.com/Squirrels-VS-Dwarves/",
    "cap2": "",
    "superlative": "Most Function Names Longer Than This Sentence"
  },
  {
    "name": "Eduardo DuQuesne",
    "img": "assets/img/duquesne",
    "bio": "I have an insatiable desire to learn and am constantly striving to improve.",
    "github": "https://github.com/EduardoDuQuesne",
    "linkedin": "https://www.linkedin.com/in/eduardoduquesne/",
    "site": "https://www.eduardoduquesne.com",
    "cap1": "http://terrible-techno.firebaseapp.com/",
    "cap2": "",
    "superlative": "Most Likely to Give a Great High Five"
  },
  {
    "name": "Valerie Freeman",
    "img": "assets/img/freeman",
    "bio": "Problem solving, UI/UX, art, food, games",
    "github": "https://github.com/Valerie-Freeman",
    "linkedin": "https://www.linkedin.com/in/valerie-freeman-327b18139/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Punch a Computer"
  },
  {
    "name": "Brandon Green",
    "img": "assets/img/green",
    "bio": "Likes: backcountry camping, hockey, IPAs, disc golf.  Dislikes: pimento cheese, 15th century feudal Japan.",
    "github": "https://github.com/BrandonAllenGreen",
    "linkedin": "https://www.linkedin.com/in/brandonallengreen/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Browse Netflix for 30 Minutes and Still End Up Watching Reruns of The Office"
  },
  {
    "name": "David Hazlett",
    "img": "assets/img/hazlett",
    "bio": "I think of myself as a creator. Regardless if it's a photo, video or web application, as long as someone gets joy out of it, then it's fullfilling to me.",
    "github": "https://github.com/dhazlettjr",
    "linkedin": "https://www.linkedin.com/in/david-hazlett-jr-8312516b/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Live in a Van Down by the River"
  },
  {
    "name": "Tucker Jackson",
    "img": "assets/img/jackson",
    "bio": "I'm cool nice and funny. I like good things and dislike bad ones. I'm a fan of television, movies, sports, music, and friendship.",
    "github": "https://github.com/EliOJackson",
    "linkedin": "https://www.linkedin.com/in/tuckerelijackson/",
    "site": "",
    "cap1": "https://tucker-jackson-capstone.firebaseapp.com/",
    "cap2": "",
    "superlative": "Best Friday Funnies"
  },
  {
    "name": "David Lars Ketch",
    "img": "assets/img/ketch",
    "bio": "Former: academic philosophy, current: software developer. DevOps, fintech, legal tech, open source.",
    "github": "github.com/davidlarsketch",
    "linkedin": "linkedin.com/in/davidlarsketch",
    "site": "https://davidlarsketch.github.io/",
    "cap1": "https://aardappel-nss.firebaseapp.com/",
    "cap2": "",
    "superlative": "Most Likely to Go Blind Because of High Screen Resolution"
  },
  {
    "name": "Ben Marcantel",
    "img": "assets/img/marcantel",
    "bio": "AI, animation, music—hopefully at the same time",
    "github": "https://github.com/ben-marcantel",
    "linkedin": "https://www.linkedin.com/in/ben-marcantel-7552a614/",
    "site": "https://ben-marcantel.github.io/",
    "cap1": "https://frontendcapstone-fe0b1.firebaseapp.com/",
    "cap2": "",
    "superlative": "Most Likely to Make a Singing Digital Plant"
  },
  {
    "name": "Griffin Markay",
    "img": "assets/img/markay",
    "bio": "No problem too problematic, no question too convoluted, no error too fatal, no requirement too vague. I live to solve problems, and problems live to be solved by me.",
    "github": "https://github.com/gmarkay",
    "linkedin": "https://www.linkedin.com/in/griffinmarkay/",
    "site": "",
    "cap1": "hangbot-9000.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Like to Create SkyNet"
  },
  {
    "name": "Sarah Morris",
    "img": "assets/img/morris",
    "bio": "Self-proclaimed wine connoisseur (WSET level two student); pursuing my private pilot's license; Apple cult member (kidding...sort of); mindfulness meditator",
    "github": "https://github.com/sarahmorris926",
    "linkedin": "https://www.linkedin.com/in/sarahmorris926",
    "site": "https://sarahmorris926.github.io/",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Become a Band Director"
  },
  {
    "name": "Trey Mosley",
    "img": "assets/img/mosley",
    "bio": "UI development, API/data enthusiast, dabbler of IoT, coffee addict, (/^Princes|Pepperfire$/).test(hotChicken) ? partyOn() : reEval()",
    "github": "https://github.com/iiimosley",
    "linkedin": "https://www.linkedin.com/in/iiimosley/",
    "site": "https://iiimosley.github.io",
    "cap1": "https://synthulx.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Likely to Use Flexbox"
  },
  {
    "name": "Craig Orcutt",
    "img": "assets/img/orcutt",
    "bio": "Backpacker, gardener, woodworker, styling enthusiast",
    "github": "https://github.com/Craig-Orcutt",
    "linkedin": "https://www.linkedin.com/in/craig-orcutt/",
    "site": "https://craig-orcutt.github.io/",
    "cap1": "https://scorecard-2a336.firebaseapp.com/#!/home",
    "cap2": "",
    "superlative": "Most Likely to Smile and Node"
  },
  {
    "name": "Hunter Phillips",
    "img": "assets/img/phillips",
    "bio": "Current interests: python, machine learning, Freakonomics Radio, Nashville breweries",
    "github": "https://github.com/hunterphillips",
    "linkedin": "https://www.linkedin.com/in/hunter-phillips-9770a612a/",
    "site": "https://hunterphillips.github.io/",
    "cap1": "https://github.com/hunterphillips/countdown/releases",
    "cap2": "",
    "superlative": "Most Likely to Open a Restaurant"
  },
  {
    "name": "Kate Rieger",
    "img": "assets/img/rieger",
    "bio": "Can I respond to this later?",
    "github": "https://github.com/krieger27",
    "linkedin": "https://www.linkedin.com/in/katherine-r-62698b44/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Know Everything About You"
  },
  {
    "name": "Kyle Saldana",
    "img": "assets/img/saldana",
    "bio": "I am result of intriguing accidents in life.",
    "github": "https://github.com/kylesaldana5",
    "linkedin": "https://www.linkedin.com/in/kyle-saldana-4264a4bb/",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": "Most Likely to Play Air Guitar at his Desk"
  },
  {
    "name": "Slade Utley",
    "img": "assets/img/utley",
    "bio": "I like lamp.",
    "github": "https://github.com/sladeutley",
    "linkedin": "https://www.linkedin.com/in/slade-utley-869a5815a/",
    "site": "http://sladeutley.com",
    "cap1": "https://balance-a7ec9.firebaseapp.com/",
    "cap2": "",
    "superlative": "Most Likely to Be at Baja Burrito"
  },
  {
    "name": "Eli Wilson",
    "img": "assets/img/wilson",
    "bio": "I like rock climbing and sky diving.",
    "github": "https://github.com/e-x-wilson",
    "linkedin": "https://www.linkedin.com/in/eli-wilson/",
    "site": "https://e-x-wilson.github.io",
    "cap1": "https://galaxy-game-blog.firebaseapp.com/",
    "cap2": "",
    "superlative": "Most Likely to Not Answer This Question"
  },
  {
    "name": "Aaron Wolfcale",
    "img": "assets/img/wolfcale",
    "bio": "I'm a musician turned software developer who loves to use logic and creativity to solve complex problems.",
    "github": "https://github.com/ajwolfcale",
    "linkedin": "https://www.linkedin.com/in/aaronwolfcale/",
    "site": "",
    "cap1": "https://macromaniac-nutrition.firebaseapp.com",
    "cap2": "",
    "superlative": ""
  },
  {
    "name": "Spencer York",
    "img": "assets/img/york",
    "bio": "Chocolate milk runs through my veins.",
    "github": "https://github.com/spenceryork",
    "linkedin": "https://www.linkedin.com/in/spencerwyork/",
    "site": "",
    "cap1": "https://our-stay.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Likely to be Friends With the Dog at a Party"
  }
];

const techStack = [
  {
    "name": "AngularJS",
    "link": "https://angularjs.org/",
    "img": "assets/img/angularjs.png"
  },
  {
    "name": "Bootstrap",
    "link": "https://getbootstrap.com/",
    "img": "assets/img/bootstrap.png"
  },
  {
    "name": "Firebase",
    "link": "https://firebase.google.com/",
    "img": "assets/img/firebase.png"
  },
  {
    "name": "Git",
    "link": "https://git-scm.com/",
    "img": "assets/img/git.png"
  },
  {
    "name": "Grunt",
    "link": "https://gruntjs.com/",
    "img": "assets/img/grunt.png"
  },
  {
    "name": "Materialize",
    "link": "http://materializecss.com/",
    "img": "assets/img/materialize.png"
  },
  {
    "name": "Mocha",
    "link": "https://mochajs.org/",
    "img": "assets/img/mocha.svg"
  },
  {
    "name": "Node.js",
    "link": "https://nodejs.org/en/",
    "img": "assets/img/node.png"
  },
  {
    "name": "Node Package Manager",
    "link": "https://www.npmjs.com/",
    "img": "assets/img/npm.png"
  },
  {
    "name": "PostgreSQL",
    "link": "https://www.postgresql.org/",
    "img": "assets/img/postgresql.png"
  },
  {
    "name": "Pug",
    "link": "https://pugjs.org/api/getting-started.html",
    "img": "assets/img/pug.png"
  },
  {
    "name": "Sass",
    "link": "https://sass-lang.com/",
    "img": "assets/img/sass.svg"
  },
  {
    "name": "Sequelize",
    "link": "http://docs.sequelizejs.com/",
    "img": "assets/img/sequelize.png"
  },
  {
    "name": "Slack",
    "link": "https://slack.com/",
    "img": "assets/img/slack.png"
  },
  {
    "name": "Trello",
    "link": "https://trello.com/",
    "img": "assets/img/trello.png"
  },
  {
    "name": "VS Code",
    "link": "https://code.visualstudio.com/",
    "img": "assets/img/vscode.png"
  }
];

module.exports = { students, techStack };

},{}],2:[function(require,module,exports){
"use strict";

let { students, techStack } = require('./data');

const classTemplate = require('../templates/class.hbs');
students = students.map(s => {
  s.slug = s.name.split(" ").reverse()[0];
  return s;
});
$('body').append(classTemplate({ students }));

const chartsTemplate = require('../templates/charts.hbs');
$('body').append(chartsTemplate());

const techTemplate = require('../templates/tech.hbs');
$('body').append(techTemplate({ techStack }));

$('body').append(require('../templates/footer.hbs'));
},{"../templates/charts.hbs":3,"../templates/class.hbs":4,"../templates/footer.hbs":5,"../templates/tech.hbs":6,"./data":1}],3:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id='charts' class='row'>\n  <div class='col-12'>\n    <h1>Statistics</h1>\n  </div>\n  <div class='percentage col col-sm-4'>\n    <div class='percent'>32%</div>\n    Native Tennesseans\n  </div>\n  <div class='percentage col col-sm-4'>\n    <div class='percent'>48%</div>\n    Professional Musicians\n  </div>\n  <div class='percentage col col-sm-4'>\n    <div class='percent'>60%</div>\n    Take 5 Fans\n  </div>\n  <div class='chart col col-sm-6 col-lg-3'>\n    <h4>Text Editors</h4>\n    <canvas id='editors' width='400' height='400'></canvas>\n  </div>\n  <div class='chart col col-sm-6 col-lg-3'>\n    <h4>Operating Systems</h4>\n    <canvas id='os' width='400' height='400'></canvas>\n  </div>\n  <div class='chart col col-sm-6 col-lg-3'>\n    <h4>Favorite Animals</h4>\n    <canvas id='animal' width='400' height='400'></canvas>\n  </div>\n  <div class='chart col col-sm-6 col-lg-3'>\n    <h4>Gender</h4>\n    <canvas id='gender' width='400' height='400'></canvas>\n  </div>\n</div>";
},"useData":true});

},{"hbsfy/runtime":26}],4:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class='student'>\n    <div class='imgs' data-toggle='modal' data-target='#"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "'>\n        <img src='"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "1.jpg'>\n        <img src='"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "2.jpg'>\n    </div>\n    <h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n    <div class='modal fade' tabindex='-1' role='dialog' id=\""
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n      <div class='modal-dialog'>\n        <div class='modal-content'>\n          <div class='modal-body'>\n            <div class='row'>\n              <div class='col col-6 col-lg-4'>\n                <img src='"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "2.jpg'>\n                <h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n              </div>\n              <div class='col col-6 col-lg-8'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.superlative : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <p>"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</p>\n                <div class='bottom-line'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.site : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cap1 : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cap2 : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.github : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.linkedin : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  <button class='close' type='button' data-dismiss='modal' aria-label='Close'>\n                    <span aria-hidden='true'>x</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <blockquote>"
    + container.escapeExpression(((helper = (helper = helpers.superlative || (depth0 != null ? depth0.superlative : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"superlative","hash":{},"data":data}) : helper)))
    + "</blockquote>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href='"
    + container.escapeExpression(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"site","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n                      <i class='material-icons'>link</i>\n                    </a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href='"
    + container.escapeExpression(((helper = (helper = helpers.cap1 || (depth0 != null ? depth0.cap1 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cap1","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n                      <i class='material-icons'>extension</i>\n                    </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href='"
    + container.escapeExpression(((helper = (helper = helpers.cap2 || (depth0 != null ? depth0.cap2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cap2","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n                      <i class='material-icons'>extension</i>\n                    </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href='"
    + container.escapeExpression(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"github","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n                      <img src='assets/img/github.png'>\n                    </a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href='"
    + container.escapeExpression(((helper = (helper = helpers.linkedin || (depth0 != null ? depth0.linkedin : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"linkedin","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n                      <img src='assets/img/linkedin.png'>\n                    </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.students : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":26}],5:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id='footer'>\n  &copy; 2018 NSS Cohort 23 | <a href='https://github.com/nss-day-cohort-23/nss-day-cohort-23.github.io' target='blank'>Source on GitHub</a>\n</div>";
},"useData":true});

},{"hbsfy/runtime":26}],6:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class='tech'>\n      <a href='"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n        <div class='img'>\n          <img src='"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "' alt='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n        </div>\n        <h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n      </a>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id='tech'>\n  <h1>Technologies</h1>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.techStack : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

},{"hbsfy/runtime":26}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":8,"./handlebars/exception":11,"./handlebars/no-conflict":21,"./handlebars/runtime":22,"./handlebars/safe-string":23,"./handlebars/utils":24}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":9,"./exception":11,"./helpers":12,"./logger":20,"./utils":24}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":10}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":24}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}


},{"./helpers/block-helper-missing":13,"./helpers/each":14,"./helpers/helper-missing":15,"./helpers/if":16,"./helpers/log":17,"./helpers/lookup":18,"./helpers/with":19}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":24}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


},{"../exception":11,"../utils":24}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":11}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];


},{"../utils":24}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];


},{}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../utils":24}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":24}],21:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}


},{"./base":8,"./exception":11,"./utils":24}],23:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],25:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime')['default'];

},{"./dist/cjs/handlebars.runtime":7}],26:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":25}]},{},[2]);
