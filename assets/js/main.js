"use strict";

let { students, techStack } = require('./data');

const classTemplate = require('../templates/class.hbs');
students = students.map(s => {
  s.slug = s.name.split(" ").reverse()[0];
  return s;
});

$('body').append(classTemplate({ students, techStack }));