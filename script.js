// Current page tracking
let currentPage = 1;
const totalPages = 4;

// Update page counter
function updatePageCounter() {
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
}

// Go to specific page
function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    // Remove active class from current page
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Add active class to target page
    document.querySelector(`.page-${pageNumber}`).classList.add('active');
    
    // Update current page and counter
    currentPage = pageNumber;
    updatePageCounter();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Go to next page
function goToNextPage() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// Go to previous page
function goToPrevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// Music Toggle Functionality
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = true;

musicToggle.addEventListener('click', function() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        musicToggle.innerHTML = '🔇';
    } else {
        bgMusic.play();
        musicToggle.classList.remove('muted');
        musicToggle.innerHTML = '🔊';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Try to autoplay music (browsers may restrict this)
bgMusic.play().catch(function() {
    // Autoplay failed, user needs to interact first
    musicToggle.classList.add('muted');
    musicToggle.innerHTML = '🔇';
    isMusicPlaying = false;
});

// Scratch Card Functionality
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

function initScratchCard() {
    // Set canvas size
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    // Draw scratch layer
    ctx.fillStyle = '#8B5A8E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    for (let i = 0; i < 100; i++) {
        ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 10,
            Math.random() * 10
        );
    }

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH HERE', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '14px Arial';
    ctx.fillText('👆 to reveal', canvas.width / 2, canvas.height / 2 + 20);
}

function scratch(e) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Clear area
    ctx.clearRect(x - 20, y - 20, 40, 40);
}

function scratchTouch(e) {
    if (!isDrawing) return;

    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Clear area
    ctx.clearRect(x - 20, y - 20, 40, 40);
}

// Mouse events
canvas.addEventListener('mousedown', () => { isDrawing = true; });
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('mouseup', () => { isDrawing = false; });
canvas.addEventListener('mouseleave', () => { isDrawing = false; });

// Touch events for mobile
canvas.addEventListener('touchstart', () => { isDrawing = true; });
canvas.addEventListener('touchmove', scratchTouch);
canvas.addEventListener('touchend', () => { isDrawing = false; });

// Initialize scratch card when page loads
window.addEventListener('load', function() {
    initScratchCard();
    updatePageCounter();
});

window.addEventListener('resize', initScratchCard);

// Add some interactivity on flower click
document.querySelectorAll('.floral-decoration').forEach(flower => {
    flower.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
    });
});

