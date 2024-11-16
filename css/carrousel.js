let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    showSlide(index);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

//2
let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel-image2');
const dots2 = document.querySelectorAll('.dot2');
function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    showSlide2(currentIndex2);
}

function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    showSlide2(currentIndex2);
}
function showSlide2(index) {
    currentIndex2 = index;
    const offset2 = -currentIndex2 * 100;
    document.querySelector('.carousel-images2').style.transform = `translateX(${offset2}%)`;
    updateDots2();
}



function currentSlide2(index) {
    showSlide2(index);
}

function updateDots2() {
    dots2.forEach((dot2, index) => {
        dot2.classList.toggle('active2', index === currentIndex2);
    });
}