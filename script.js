const inputText = document.getElementById('carta-texto');
const buttonLetter = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');

const classesGroup = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'] };

function randomClasses() {
  const classList = [];
  let randomClass;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in classesGroup) {
    if (Object.prototype.hasOwnProperty.call(classesGroup, key)) {
      randomClass = Math.floor(Math.random() * classesGroup[key].length);
      classList.push(classesGroup[key][randomClass]);
    }
  }
  return classList.join(' ');
}

function changeClasses(event) {
  const element = event.target;
  element.className = randomClasses();
}

function generateWord(word) {
  const element = document.createElement('span');
  element.innerText = word;
  element.className = randomClasses();
  element.addEventListener('click', changeClasses);
  letter.appendChild(element);
}

function clearLetter() {
  while (letter.firstChild) {
    letter.removeChild(letter.firstChild);
  }
}

function generateLetter() {
  clearLetter();
  let letterText = inputText.value;
  const regex = / +/gm;
  letterText = letterText.trim().replace(regex, ' ').split(' ');

  if (letterText[0] === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  wordCounter.innerText = letterText.length;

  for (let i = 0; i < letterText.length; i += 1) {
    generateWord(letterText[i]);
  }
}

buttonLetter.addEventListener('click', generateLetter);
