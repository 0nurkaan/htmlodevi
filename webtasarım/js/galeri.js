
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
