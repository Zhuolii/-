const slides = document.querySelectorAll('.slide');
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get the slide with the "active" class
  const currentSlide = document.querySelector('.active');
  // Remove the "active" class from the current slide
  currentSlide.classList.remove('active');
  // Get the next slide
  let nextSlide = currentSlide.nextElementSibling;
  // If there is no next slide, go back to the first slide
  if (!nextSlide) {
    nextSlide = slides[0];
  }
  // Add the "active" class to the next slide
  nextSlide.classList.add('active');
}



// Start the slide interval
slideInterval = setInterval(nextSlide, intervalTime);