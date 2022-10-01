const $selector = document.querySelector.bind(document);
const $selectorAll = document.querySelectorAll.bind(document);

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

export const insertTaskTable = (hour, task, parentEl) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  const contentHours = document.createTextNode(`${hour}`);
  const contentTask = document.createTextNode(`${task}`);

  const tdHours = td.appendChild(contentHours);
  const tdTask = td.appendChild(contentTask);

  tr.appendChild(tdHours);
  tr.appendChild(tdTask);

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

export const inserTaskInWeeday = (target) => {
  if (target.innerText === "Domingo") {
    if (allTasks.sunday) {
      allTasks.sunday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Segunda-feira") {
    if (allTasks.monday) {
      allTasks.monday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Terça-feira") {
    if (allTasks.tuesday) {
      allTasks.tuesday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Quarta-feira") {
    if (allTasks.wednesday) {
      allTasks.wednesday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Quinta-feira") {
    if (allTasks.thursday) {
      allTasks.thursday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Sexta-feira") {
    if (allTasks.friday) {
      allTasks.friday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }

  if (target.innerText === "Sábado") {
    if (allTasks.saturday) {
      allTasks.saturday.forEach((item) =>
        insertTaskTable(item.hour, item.task, "#table")
      );
    }
  }
};
