// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');
const currentView = document.getElementById('currentView');
const screenWidth = document.getElementById('screenWidth');
const viewIndicator = document.getElementById('viewIndicator');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Update current view based on screen width
function updateViewInfo() {
    const width = window.innerWidth;
    screenWidth.textContent = width;
    
    if (width < 772) {
        currentView.textContent = "📱 Mobil";
        currentView.style.color = "#e74c3c";
    } else if (width >= 772 && width < 998) {
        currentView.textContent = "📊 Planshet";
        currentView.style.color = "#3498db";
    } else {
        currentView.textContent = "💻 Katta Ekran";
        currentView.style.color = "#2ecc71";
    }
    
    // Highlight active breakpoint
    document.querySelectorAll('.breakpoint').forEach(bp => {
        bp.style.opacity = '0.6';
        bp.style.transform = 'scale(0.95)';
    });
    
    if (width < 772) {
        document.querySelector('.mobile').style.opacity = '1';
        document.querySelector('.mobile').style.transform = 'scale(1.05)';
    } else if (width >= 772 && width < 998) {
        document.querySelector('.tablet').style.opacity = '1';
        document.querySelector('.tablet').style.transform = 'scale(1.05)';
    } else {
        document.querySelector('.desktop').style.opacity = '1';
        document.querySelector('.desktop').style.transform = 'scale(1.05)';
    }
}

// Initial call
updateViewInfo();

// Update on resize
window.addEventListener('resize', updateViewInfo);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Console log for debugging
console.log("Responsive Site Loaded!");
console.log("Breakpoints:");
console.log("1. Tablet: 772px (min-width)");
console.log("2. Desktop: 998px (min-width)");