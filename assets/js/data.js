"use strict";

const students = [
  {
    "name": "Melissa Bell",
    "img": "assets/img/bell",
    "bio": "Gardening, jigsaw puzzles, hiking, baking",
    "github": "https://github.com/kenziebottoms",
    "linkedin": "https://www.linkedin.com/in/kenzie-bottoms/",
    "site": "https://melissabell456.github.io/MelissaBell_Portfolio/",
    "cap1": "https://mygarden-f2283.firebaseapp.com",
    "cap2": "",
    "superlative": "Most Likely to Ask a Question"
  },
  {
    "name": "Kenzie Bottoms",
    "img": "assets/img/bottoms",
    "bio": "(Not so) secretly competetive artist and feminist who enjoys puzzles",
    "github": "https://github.com/kenziebottoms",
    "linkedin": "https://www.linkedin.com/in/kenzie-bottoms/",
    "site": "http://kenzie.ink",
    "cap1": "http://kenzie.ink/nss-front-capstone-mixify/",
    "cap2": "",
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
    "superlative": "Most Kikely to Spend Hundreds of Dollars on a Stormtrooper Costume"
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
    "cap2": "",
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
    "bio": "",
    "github": "",
    "linkedin": "",
    "site": "",
    "cap1": "",
    "cap2": "",
    "superlative": ""
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
    "github": "www.github.com/sarahmorris926",
    "linkedin": "www.linkedin.com/in/sarahmorris926",
    "site": "",
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
    "site": "",
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
