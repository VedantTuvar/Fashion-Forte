let currentImageIndex = 0;
const images = document.querySelectorAll(".image-container img");
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

function startImageRotation() {
    setInterval(nextImage, 4000);
}

document.querySelector(".right-arrow").addEventListener("click", nextImage);
document.querySelector(".left-arrow").addEventListener("click", previousImage);

startImageRotation();

document.addEventListener("DOMContentLoaded", function () {
    const addToBagButtons = document.querySelectorAll(".add-to-bag");

    addToBagButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Item Added to Bag");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addToBagButtons = document.querySelectorAll(".add-to-bag");

    addToBagButtons.forEach((button) => {
        button.addEventListener("click", function () {
            button.textContent = "✔ Added";
            button.classList.add("added-to-bag");
            button.disabled = true;
        });
    });
});

