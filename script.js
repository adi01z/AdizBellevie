
// Get all tab elements
const tabs = document.querySelectorAll('.search-tabs li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' from all
        tabs.forEach(t => t.classList.remove('active'));
        // Add 'active' to clicked tab
        tab.classList.add('active');
    });
});

// Optional: scroll to start when page loads
const carousel = document.querySelector('.amenities-carousel');

let scrollAmount = 0;
const scrollStep = 1; // pixels per step
const delay = 10;     // milliseconds per step

function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0; // Reset to beginning when end is reached
    }
    carousel.scrollLeft = scrollAmount;
}

let scrollInterval = setInterval(autoScroll, delay);

// Pause on hover
carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
carousel.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(autoScroll, delay);
});

