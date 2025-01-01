document.addEventListener("DOMContentLoaded", function () {
    const car = document.getElementById("car");
    const gameArea = document.getElementById("game-area");

    gameArea.addEventListener("mousemove", (event) => {
        const randomX = Math.random() * (gameArea.clientWidth - car.clientWidth);
        const randomY = Math.random() * (gameArea.clientHeight - car.clientHeight);

        car.style.left = `${randomX}px`;
        car.style.top = `${randomY}px`;
    });
});



const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.close');


document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.textContent = this.alt;
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
