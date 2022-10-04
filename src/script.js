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

//insert weekdays in select
fullWeeks.forEach((week) =>
  utils.insertContent("option", week, "#select-weeks")
);

//insert buttons weekdays
fullWeeks.forEach((week) =>
  utils.insertContent("button", week, "#buttons-group", false, "button-weekday")
);

//remove local storage
$selector("#delete-storage").addEventListener("click", () =>
  localStorage.removeItem("tasks")
);

//add in local storage
$selector("#save-storage").addEventListener("click", () => {
  const teste = [...utils.allTasks];
  console.log(teste);
  console.log(utils.allTasks);
  localStorage.setItem("tasks", JSON.stringify(utils.allTasks));
});

//add and remove active class in buttons week days
$selectorAll(".button-weekday").forEach((button) =>
  button.addEventListener("click", () => {
    $selector("#table").innerHTML = "";
    utils.removeClassActive();
    button.classList.add("active");
  })
);

//add task and in screen
$selector("#add-task").addEventListener("click", (e) => {
  e.preventDefault();
  const task = $selector("#input-task").value;
  const weekday = $selector("#select-weeks").value;
  const hours = $selector("#select-hours").value.split(":");

  if (!utils.isValid(task, weekday, hours)) {
    return ($selector("span").innerText =
      "* Todos os capos devem ser preenchidos");
  }

  utils.insertTaskInMemory(weekday, `${hours[0]}h:${hours[1]}m`, task);
});

$selectorAll(".button-weekday").forEach((button) =>
  button.addEventListener("click", ({ target }) => {
    const task = $selector("#input-task").value;
    const weekday = $selector("#select-weeks").value;
    const hours = $selector("#select-hours").value;

    utils.isValid(task, weekday, hours)
      ? utils.inserTaskInWeekday(target)
      : false;
  })
);

//remove task
$selector("#delete-task").addEventListener("click", (e) => {
  e.preventDefault();
  $selector("#input-task").value = "";
  $selector("#select-weeks").value = "";
  $selector("#select-hours").value = "";
});
