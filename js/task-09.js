function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btnChangeColorEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const bgColorEl = document.querySelector('.color');

  const colorNow = getRandomHexColor();
  console.log(colorNow);

  bodyEl.style.backgroundColor = `${colorNow}`;
  bgColorEl.textContent = `${colorNow}`;

}
