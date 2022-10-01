const $selector = document.querySelector.bind(document);
const $selectorAll = document.querySelectorAll.bind(document);

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

export const insertTask = (hour, task, parentEl) => {
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
