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

export let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

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
  if (!task || !weekday || hours.length <= 1) return false;
  return true;
};

export const insertTaskTable = (hour, tasks, parentEl, bColor, Tweekday) => {
  const tr = $createEl("tr");
  const tdHours = $createEl("div");

  tdHours.innerText = hour;
  tdHours.classList.add("card-hours");
  tr.appendChild(tdHours);

  if (tasks.length > 1) {
    const hr = $createEl("hr");
    tdHours.appendChild(hr);
  }

  tasks.forEach((task, id) => {
    const button = $createEl("button");
    const tdTask = $createEl("div");
    tdTask.innerText = task;
    tdTask.classList.add("card-task");
    tdTask.style.borderColor = bColor;
    tr.appendChild(tdTask);

    button.innerText = "Apagar";
    button.classList.add("card-button");
    button.setAttribute("weekday", Tweekday);
    button.setAttribute("index", id);
    button.addEventListener("click", () => deleteCard(Tweekday, id));
    tdTask.appendChild(button);

    if (tasks.length > 1) {
      tdTask.classList.add("card-task__reapeat");
      tdHours.classList.add("card-hours__reapeat");
    }
  });

  const parentTag = $selector(`${parentEl}`);

  parentTag.appendChild(tr);
};

export const insertTaskInMemory = (weekday, hour, task) => {
  if (weekday === "Domingo") {
    if (allTasks.sunday)
      return insertTaskWithHourIqual(allTasks.sunday, { hour, task });
    sunday.push({ task: [task], hour });
    allTasks.sunday = sunday;
  }

  if (weekday === "Segunda-feira") {
    if (allTasks.monday)
      return insertTaskWithHourIqual(allTasks.monday, { hour, task });
    monday.push({ task: [task], hour });
    allTasks.monday = monday;
  }

  if (weekday === "Terça-feira") {
    if (allTasks.tuesday)
      return insertTaskWithHourIqual(allTasks.tuesday, { hour, task });
    tuesday.push({ task: [task], hour });
    allTasks.tuesday = tuesday;
  }

  if (weekday === "Quarta-feira") {
    if (allTasks.wednesday)
      return insertTaskWithHourIqual(allTasks.wednesday, { hour, task });
    wednesday.push({ task: [task], hour });
    allTasks.wednesday = wednesday;
  }

  if (weekday === "Quinta-feira") {
    if (allTasks.thursday)
      return insertTaskWithHourIqual(allTasks.thursday, { hour, task });
    thursday.push({ task: [task], hour });
    allTasks.thursday = thursday;
  }

  if (weekday === "Sexta-feira") {
    if (allTasks.friday)
      return insertTaskWithHourIqual(allTasks.friday, { hour, task });
    friday.push({ task: [task], hour });
    allTasks.friday = friday;
  }

  if (weekday === "Sábado") {
    if (allTasks.saturday)
      return insertTaskWithHourIqual(allTasks.saturday, { hour, task });
    saturday.push({ task: [task], hour });
    allTasks.saturday = saturday;
  }
};

export const inserTaskInWeekday = (target) => {
  if (target.innerText === "Domingo") {
    if (allTasks.sunday) {
      allTasks.sunday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#ff6666",
          target.innerText
        )
      );
    }
  }

  if (target.innerText === "Segunda-feira") {
    if (allTasks.monday) {
      allTasks.monday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#ffa246",
          target.innerText
        )
      );
    }
  }

  if (target.innerText === "Terça-feira") {
    if (allTasks.tuesday) {
      allTasks.tuesday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#35e185",
          target.innerText
        )
      );
    }
  }

  if (target.innerText === "Quarta-feira") {
    if (allTasks.wednesday) {
      allTasks.wednesday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#6688ff",
          target.innerText
        )
      );
    }
  }

  if (target.innerText === "Quinta-feira") {
    if (allTasks.thursday) {
      allTasks.thursday.forEach((item) => {
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#b266ff",
          target.innerText
        );
      });
    }
  }

  if (target.innerText === "Sexta-feira") {
    if (allTasks.friday) {
      allTasks.friday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#66d1ff",
          target.innerText
        )
      );
    }
  }

  if (target.innerText === "Sábado") {
    if (allTasks.saturday) {
      allTasks.saturday.forEach((item) =>
        insertTaskTable(
          item.hour,
          item.task,
          "#table",
          "#ff66d4",
          target.innerText
        )
      );
    }
  }
};

const searchIqual = (weekday, taskHour) => {
  return weekday.some(({ hour }) => hour === taskHour);
};

const insertTaskWithHourIqual = (weekday, fullTask) => {
  if (searchIqual(weekday, fullTask.hour)) {
    let indexArray = 0;
    const repeatTask = weekday.find((task) => task.hour === fullTask.hour);
    weekday.forEach((item, index) =>
      item.hour === fullTask.hour ? (indexArray = index) : false
    );

    monday.splice(indexArray, 1);

    repeatTask.task.push(fullTask.task);
    monday.push(repeatTask);
    allTasks.monday = monday;
    return;
  }

  monday.push({ task: [fullTask.task], hour: fullTask.hour });
  allTasks.monday = monday;
};

export const deleteCard = (weekday, index) => {
  if (weekday === "Domingo") {
    console.log("aqui");
    allTasks.sunday.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Segunda-feira") {
    allTasks.monday.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Terça-feira") {
    allTasks.tuesda.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Quarta-feira") {
    allTasks.wednesday.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Quinta-feira") {
    allTasks.thursday.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Sexta-feira") {
    allTasks.friday.forEach(({ task }) => task.splice(index, 1));
  }

  if (weekday === "Sábado") {
    allTasks.saturday.forEach(({ task }) => task.splice(index, 1));
  }
};
