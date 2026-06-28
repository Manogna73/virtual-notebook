 const leftPage = document.querySelector('.left-page textarea');
const rightPage = document.querySelector('.right-page textarea');
const leftNum = document.querySelector('.left-page .page-num');
const rightNum = document.querySelector('.right-page .page-num');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const totalPages = 10;
const notes = Array(totalPages).fill('');
let currentSpread = 0;

function loadSpread() {
  const l = currentSpread * 2;
  const r = l + 1;
  leftNum.textContent = l + 1;
  rightNum.textContent = r + 1;
  leftPage.value = notes[l];
  rightPage.value = notes[r];
  prevBtn.disabled = currentSpread === 0;
  nextBtn.disabled = currentSpread === 4;
}

leftPage.addEventListener('input', () => {
  notes[currentSpread * 2] = leftPage.value;
});

rightPage.addEventListener('input', () => {
  notes[currentSpread * 2 + 1] = rightPage.value;
});

nextBtn.addEventListener('click', () => {
  if (currentSpread < 4) {
    currentSpread++;
    loadSpread();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSpread > 0) {
    currentSpread--;
    loadSpread();
  }
});

loadSpread();
