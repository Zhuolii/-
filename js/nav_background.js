

function toggle_background(){
  var background = document.getElementById("black_bg");
var navbar = document.getElementById("navbar_id");
var filter = document.getElementById("black_filter");
filter.classList.toggle("no_black_filter");
filter.classList.toggle("black_filter");
navbar.classList.toggle("navbar_");
navbar.classList.toggle("no_navbar");
  background.classList.toggle("black_bg");
  background.classList.toggle("no_bg");
  if (navbar.classList.contains('no_navbar')) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the main page
} else {
    document.body.style.overflow = ''; // Enable scrolling of the main page
}
}
function toggle_background_2(){
  
var filter = document.getElementById("black_filter_2");
filter.classList.toggle("no_black_filter");
filter.classList.toggle("black_filter");

  if (navbar.classList.contains('no_navbar')) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the main page
} else {
    document.body.style.overflow = ''; // Enable scrolling of the main page
}
}
//scroll js
let lastScrollTop = 0;
const sidebar = document.getElementById('navbar_id');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        // Downscroll
        sidebar.classList.remove('non-transparent');
    
    } else {
        // Upscroll
       
       
       
        sidebar.classList.add('non-transparent');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});