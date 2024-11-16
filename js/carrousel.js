let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const dots = document.querySelectorAll('.dot');
let autoScrollInterval;
let isTransitioning = false; // Flag to prevent multiple transitions

function showSlide(index) {
    if (isTransitioning) return; // Prevent action if already transitioning
    isTransitioning = true; // Set flag to true during transition

    currentIndex = (index + totalImages) % totalImages; // Wrap around if index is out of bounds
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Fade effect: set opacity for all images
    images.forEach((img, idx) => {
        img.style.opacity = idx === currentIndex ? '1' : '0';
    });

    // Update the active dot
    updateDots();

    // Reset the transitioning flag after the transition duration
    setTimeout(() => {
        isTransitioning = false; // Reset flag after transition
    }, 1000); // Match this with the CSS transition duration
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1); // Move to the next slide
}

function prevSlide() {
    showSlide(currentIndex - 1); // Move to the previous slide
}

function currentSlide(index) {
    showSlide(index); // Show the clicked slide
    resetAutoScroll(); // Reset auto-scroll
}

function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
}

// Start auto-scrolling when the page loads
window.onload = function() {
    showSlide(currentIndex); // Show the first slide on load
    startAutoScroll(); // Start auto-scrolling
};

// Stop auto-scroll on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

// Stop auto-scroll and change slide on arrow click
document.querySelector('.arrow-right').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    stopAutoScroll();
    nextSlide();
});

document.querySelector('.arrow-left').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    stopAutoScroll();
    prevSlide();
});

// Prevent auto-scroll on dot click and manage auto-scroll behavior
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index); // Show the clicked slide
    });

    // Stop auto-scroll on mouse enter over dots
    dot.addEventListener('mouseenter', stopAutoScroll);
    dot.addEventListener('mouseleave', startAutoScroll);
});

//version 2 

let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel-image2');
const totalImages2 = images2.length;
const dots2 = document.querySelectorAll('.dot2');
let autoScrollInterval2;
let isTransitioning2 = false; // Flag to prevent multiple transitions

function showSlide2(index2) {
    if (isTransitioning2) return; // Prevent action if already transitioning
    isTransitioning2 = true; // Set flag to true during transition

    currentIndex2 = (index2 + totalImages2) % totalImages2; // Wrap around if index is out of bounds
    const offset2 = -currentIndex2 * 100;
    document.querySelector('.carousel-images2').style.transform = `translateX(${offset2}%)`;

    // Fade effect: set opacity for all images
    images2.forEach((img2, idx2) => {
        img2.style.opacity = idx2 === currentIndex2 ? '1' : '0';
    });

    // Update the active dot
    updateDots2();

    // Reset the transitioning flag after the transition duration
    setTimeout(() => {
        isTransitioning2 = false; // Reset flag after transition
    }, 1000); // Match this with the CSS transition duration
}

function updateDots2() {
    dots2.forEach((dot2, index2) => {
        dot2.classList.toggle('active2', index2 === currentIndex2);
    });
}

function nextSlide2() {
    showSlide2(currentIndex2 + 1); // Move to the next slide
}

function prevSlide2() {
    showSlide2(currentIndex2 - 1); // Move to the previous slide
}

function currentSlide2(index2) {
    showSlide2(index2); // Show the clicked slide
    resetAutoScroll2(); // Reset auto-scroll
}

function startAutoScroll2() {
    autoScrollInterval2 = setInterval(nextSlide2, 5000); // Change slide every 5 seconds
}

function stopAutoScroll2() {
    clearInterval(autoScrollInterval2);
}

function resetAutoScroll2() {
    stopAutoScroll2();
    startAutoScroll2();
}

// Start auto-scrolling when the page loads
window.onload = function() {
    showSlide2(currentIndex2); // Show the first slide on load
    startAutoScroll2(); // Start auto-scrolling
};

// Stop auto-scroll on hover
const carousel2 = document.querySelector('.carousel2');
carousel2.addEventListener('mouseenter', stopAutoScroll2);
carousel2.addEventListener('mouseleave', startAutoScroll2);

// Stop auto-scroll and change slide on arrow click
document.querySelector('.arrow-right2').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    stopAutoScroll2();
    nextSlide2();
});

document.querySelector('.arrow-left2').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    stopAutoScroll2();
    prevSlide2();
});

// Prevent auto-scroll on dot click and manage auto-scroll behavior
dots2.forEach((dot2, index2) => {
    dot2.addEventListener('click', () => {
        currentSlide2(index2); // Show the clicked slide
    });

    // Stop auto-scroll on mouse enter over dots
    dot2.addEventListener('mouseenter', stopAutoScroll2);
    dot2.addEventListener('mouseleave', startAutoScroll2);
});