// Получаем ссылку на аудио элемент
const tickSound = document.getElementById('tickSound');

function updateTimer() {
    const endDate = new Date('2024-12-06T00:00:00');
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Воспроизводим звук
    tickSound.currentTime = 0; // Сбрасываем время воспроизведения
    tickSound.play().catch(function(error) {
        console.log("Ошибка воспроизведения звука:", error);
    });
}

setInterval(updateTimer, 1000);
updateTimer(); 