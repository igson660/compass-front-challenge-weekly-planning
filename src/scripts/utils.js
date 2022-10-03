const $selector = document.querySelector.bind(document);
const $selectorAll = document.querySelectorAll.bind(document);
const $createEl = document.createElement.bind(document);

const sunday = [];
const monday = [];
const tuesday = [];
const wednesday = [];
const thursday = [];
const friday = [];
const saturday = [];

export let allTasks = [];

export const getDate = () => {
  const fullMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const data = new Date();
  return `${data.getDay()} de ${
    fullMonths[data.getMonth()]
  } de ${data.getFullYear()}`;
};

export const getHour = () => {
  const data = new Date();
  return `${data.getHours()}:${
    data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
  }`;
};

export const insertContent = (
  childEl,
  contentEl,
  parentEl,
  rPrecious,
  addClass
) => {
  const childTag = document.createElement(`${childEl}`);
  const content = document.createTextNode(`${contentEl}`);
  const parentTag = $selector(`${parentEl}`);

  rPrecious ? (parentTag.innerHTML = "") : false;
  addClass ? childTag.classList.add(addClass) : false;
  childTag.appendChild(content);
  parentTag.appendChild(childTag);
};

export const removeClassActive = () => {
  $selectorAll(".button-weekday").forEach((button) =>
    button.classList.remove("active")
  );
};

export const isValid = (task, weekday, hours) => {
  if (!task || !weekday || !hours) return false;
  return true;
};

export const insertTaskTable = (hour, task, parentEl, bColor) => {
  const tr = $createEl("tr");
  const tdHours = $createEl("div");
  const tdTask = $createEl("div");
  const button = $createEl("button");

  tdHours.innerText = hour;
  tdHours.classList.add("card-hours");
  tr.appendChild(tdHours);

  tdTask.innerText = task;
  tdTask.classList.add("card-task");
  tdTask.style.borderColor = bColor;
  tr.appendChild(tdTask);

  button.innerText = "Apagar";
  button.classList.add("card-button");
  tdTask.appendChild(button);

  const parentTag = $selector(`${parentEl}`);

  parentTag.appendChild(tr);
};

export const insertTaskInMemory = (weekday, hour, task) => {
  if (weekday === "Domingo") {
    sunday.push({ task, hour });
    allTasks.sunday = sunday;
  }

  if (weekday === "Segunda-feira") {
    monday.push({ task, hour });
    allTasks.monday = monday;
  }

  if (weekday === "Terça-feira") {
    tuesday.push({ task, hour });
    allTasks.tuesday = tuesday;
  }

  if (weekday === "Quarta-feira") {
    wednesday.push({ task, hour });
    allTasks.wednesday = wednesday;
  }

  if (weekday === "Quinta-feira") {
    thursday.push({ task, hour });
    allTasks.thursday = tuesday;
  }

  if (weekday === "Sexta-feira") {
    friday.push({ task, hour });
    allTasks.friday = friday;
  }

  if (weekday === "Sábado") {
    saturday.push({ task, hour });
    allTasks.saturday = saturday;
  }
};

export const inserTaskInWeekday = (target) => {
  if (target.innerText === "Domingo") {
    if (allTasks.sunday) {
      allTasks.sunday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#ff6666")
      );
    }
  }

  if (target.innerText === "Segunda-feira") {
    if (allTasks.monday) {
      allTasks.monday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#ffa246")
      );
    }
  }

  if (target.innerText === "Terça-feira") {
    if (allTasks.tuesday) {
      allTasks.tuesday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#35e185")
      );
    }
  }

  if (target.innerText === "Quarta-feira") {
    if (allTasks.wednesday) {
      allTasks.wednesday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#6688ff")
      );
    }
  }

  if (target.innerText === "Quinta-feira") {
    if (allTasks.thursday) {
      allTasks.thursday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#b266ff")
      );
    }
  }

  if (target.innerText === "Sexta-feira") {
    if (allTasks.friday) {
      allTasks.friday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#66d1ff")
      );
    }
  }

  if (target.innerText === "Sábado") {
    if (allTasks.saturday) {
      allTasks.saturday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table", "#ff66d4")
      );
    }
  }
};
