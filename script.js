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

// Auto-play music on load with user interaction fallback
window.addEventListener('load', function() {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.catch(function() {
            // Autoplay failed - add click to unmute
            document.body.addEventListener('click', function playOnClick() {
                bgMusic.play();
                musicToggle.classList.remove('muted');
                musicToggle.innerHTML = '🔊';
                isMusicPlaying = true;
                document.body.removeEventListener('click', playOnClick);
            }, { once: true });
        });
    }
    updatePageCounter();
});

// Flip Card Functionality
function flipCard(element) {
    element.classList.toggle('flipped');
}

// Add some interactivity on flower click
document.querySelectorAll('.floral-decoration').forEach(flower => {
    flower.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
    });
});


