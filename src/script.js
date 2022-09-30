import * as utils from "./scripts/utils.js";

// insert current date and time in html
utils.insertContent("time", utils.getDate(), ".full-date");
setInterval(() =>
  utils.insertContent("time", utils.getHour(), ".full-hours", true)
);

//insert weekDays in element options
const fullWeeks = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

fullWeeks.forEach((week) =>
  utils.insertContent("option", week, "#select-weeks")
);
