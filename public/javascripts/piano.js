const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    audio.item.play();

    key.style.backgroundColor = 'red';
    setTimeout(() => {
      key.style.backgroundColor = key.classList.contains('white') ? 'white' : 'black';
    }, 100);
  });
});