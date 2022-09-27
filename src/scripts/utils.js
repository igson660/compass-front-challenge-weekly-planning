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
  return `${data.getHours()}:${data.getMinutes()}`;
};

export const insertContent = (childEl, contentEl, parentEl) => {
  const childTag = document.createElement(`${childEl}`);
  const content = document.createTextNode(`${contentEl}`);
  const parentTag = document.querySelector(`${parentEl}`);

  childTag.appendChild(content);
  parentTag.appendChild(childTag);
};
