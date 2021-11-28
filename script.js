const inputText = document.getElementById('carta-texto');
const buttonLetter = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

function generateWord(word) {
  const element = document.createElement('span');
  element.innerText = word;
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
  letterText = letterText.split(' ');

  for (let i = 0; i < letterText.length; i += 1) {
    generateWord(letterText[i]);
  }
}

buttonLetter.addEventListener('click', generateLetter);
