import * as utils from "./scripts/utils.js";

const $selector = document.querySelector.bind(document);
const $selectorAll = document.querySelectorAll.bind(document);

utils.insertContent("time", utils.getDate(), ".full-date");
setInterval(() =>
  utils.insertContent("time", utils.getHour(), ".full-hours", true)
);

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

fullWeeks.forEach((week) =>
  utils.insertContent("button", week, "#buttons-group", false, "button-weekday")
);

$selector("#delete-storage").addEventListener("click", () =>
  console.log("teste")
);

$selector("#save-storage").addEventListener("click", () =>
  console.log("teste")
);

$selectorAll(".button-weekday").forEach((button) =>
  button.addEventListener("click", (e) => {
    utils.removeClassActive();
    button.classList.add("active");
  })
);
