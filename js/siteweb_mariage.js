
document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review');
    const reviewsContainer = document.querySelector('.reviews');
  
    if (!reviews || !reviewsContainer) {
      console.error('Could not find reviews or reviews container.');
    } else {
      let currentReviewIndex = 0;
  
      const showReview = () => {
        // Remove the "active" class from all reviews
        reviews.forEach(review => review.classList.remove('active'));
        // Add the "active" class to the current review
        reviews[currentReviewIndex].classList.add('active');
        // Move the reviews container to show the current review
        reviewsContainer.style.transform = `translateX(-${currentReviewIndex * 100 / reviews.length}%)`;
      }
  
      // Show the initial review
      showReview();
  
      // Set an interval to automatically move to the next review
      setInterval(() => {
        currentReviewIndex++;
        if (currentReviewIndex >= reviews.length) {
          currentReviewIndex = 0;
        }
        showReview();
      }, 15000); // Move to the next review every 5 seconds (adjust this value as needed)
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const reviews2 = document.querySelectorAll('.review2');
    const reviewsContainer2 = document.querySelector('.reviews2');
  
    if (!reviews2 || !reviewsContainer2) {
      console.error('Could not find reviews or reviews container.');
    } else {
      let currentReviewIndex2 = 0;
  
      const showReview2 = () => {
        // Remove the "active" class from all reviews
        reviews2.forEach(review => review.classList.remove('active'));
        // Add the "active" class to the current review
        reviews2[currentReviewIndex2].classList.add('active');
        // Move the reviews container to show the current review
        reviewsContainer2.style.transform = `translateX(-${currentReviewIndex2 * 100 / reviews2.length}%)`;
      }
  
      // Show the initial review
      showReview2();
  
      // Set an interval to automatically move to the next review
      setInterval(() => {
        currentReviewIndex2++;
        if (currentReviewIndex2 >= reviews2.length) {
          currentReviewIndex2 = 0;
        }
        showReview2();
      }, 15000); // Move to the next review every 5 seconds (adjust this value as needed)
    }
  });