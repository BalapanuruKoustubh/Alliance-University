$(document).ready(function() {
    // Smooth Scroll to Sections
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});


// JavaScript for automatic sliding
let slideIndex = 1;
const slideInterval = 5000; // 5 seconds
let slideTimer;

showSlides(slideIndex);
startSlideShow();

function plusSlides(n) {
  clearInterval(slideTimer); // Stop automatic sliding when user navigates
  showSlides(slideIndex += n);
  startSlideShow(); // Restart automatic sliding
}

function currentSlide(n) {
  clearInterval(slideTimer); // Stop automatic sliding when user navigates
  showSlides(slideIndex = n);
  startSlideShow(); // Restart automatic sliding
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function startSlideShow() {
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, slideInterval);
}



//Infrastructure
let currentIndex = 0;
const contentIds = ['campus', 'learning-center', 'accommodation', 'labs', 'library', 'activity-center', 'facilities'];
let slideshowInterval;

function showContent(section) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function(content) {
        content.style.display = 'none';
    });
    
    // Show the selected content
    document.getElementById(section).style.display = 'block';
    
    // Update the active menu item
    updateActiveMenu(section);
    
    // Reset the automatic slideshow
    clearInterval(slideshowInterval);
    startSlideshow();
}

function showNextContent() {
    currentIndex = (currentIndex + 1) % contentIds.length;
    showContent(contentIds[currentIndex]);
}

function startSlideshow() {
    slideshowInterval = setInterval(showNextContent, 5000); // Change slide every 5 seconds
}

function updateActiveMenu(activeSection) {
    const menuItems = document.querySelectorAll('.menu-bar ul li');
    menuItems.forEach(item => {
        if (item.textContent.toLowerCase().replace(/\s+/g, '-') === activeSection) {
            item.style.fontWeight = 'bold'; // Highlight the active menu item
        } else {
            item.style.fontWeight = 'normal'; // Default style for inactive menu items
        }
    });
}

// Initialize the first content and start the slideshow
document.addEventListener('DOMContentLoaded', () => {
    showContent(contentIds[currentIndex]);
    startSlideshow();
});
