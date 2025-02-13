const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clicks = 0;
function handleClick() {
    clicks++;
    counter.textContent = clicks; // Обновляем отображение счётчика
    if (clicks % 2 === 0) {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
    } else {
        cookie.style.width = '180px';
        cookie.style.height = '180px';
    }
}
cookie.addEventListener('click', handleClick);