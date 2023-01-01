const yeartxt = document.querySelector(`#year`);
const now = new Date();
const yearNow = now.getFullYear();

yeartxt.textContent = yearNow;

//
