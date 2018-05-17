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