const inputText = document.getElementById('carta-texto');
const buttonLetter = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

const classesGroup = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'] };

function randomClasses() {
  const classList = [];
  let randomClass;

  for (const key in classesGroup) {
    if (Object.prototype.hasOwnProperty.call(classesGroup, key)) {
      randomClass = Math.floor(Math.random() * classesGroup[key].length);
      classList.push(classesGroup[key][randomClass]);
    }
  }
  return classList.join(' ');
}

function generateWord(word) {
  const element = document.createElement('span');
  element.innerText = word;
  element.className = randomClasses();
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

  console.log(letterText);
  if (letterText[0] === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  for (let i = 0; i < letterText.length; i += 1) {
    generateWord(letterText[i]);
  }
}

buttonLetter.addEventListener('click', generateLetter);
