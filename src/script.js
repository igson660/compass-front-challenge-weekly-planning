import { insertContent, getDate, getHour } from "./scripts/utils.js";

const $ = document.querySelector.bind(document);

// insert current date and time in html
insertContent("time", getDate(), ".full-date");
setInterval(() => insertContent("time", getHour(), ".full-hours"));
