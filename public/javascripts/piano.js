const keys = document.querySelectorAll('.key');
const audio = document.getElementById('audio');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        audio.src = `sounds/${note}.mp3`; // 소리 파일의 경로를 설정하세요.
        audio.play();
    });
});