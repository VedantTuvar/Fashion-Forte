let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateArrowsVisibility() {
    if (currentImageIndex === 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
    }

    if (currentImageIndex === images.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'block';
    }
}

function nextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    updateArrowsVisibility();
}

function previousImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
    updateArrowsVisibility();
}

updateArrowsVisibility();
