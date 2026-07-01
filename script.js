// Current page tracking
let currentPage = 1;
const totalPages = 4;

// Update page counter
function updatePageCounter() {
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    if (currentPageElement) currentPageElement.textContent = currentPage;
    if (totalPagesElement) totalPagesElement.textContent = totalPages;

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
let isMusicPlaying = false;

function updateMusicButton(isPlaying) {
    isMusicPlaying = isPlaying;
    musicToggle.classList.toggle('muted', !isPlaying);
    musicToggle.querySelector('span').textContent = isPlaying ? '🔊' : '🔇';
    musicToggle.setAttribute('aria-label', isPlaying ? 'Pause background music' : 'Play background music');
    musicToggle.title = isPlaying ? 'Pause background music' : 'Play background music';
}

async function playMusic() {
    try {
        await bgMusic.play();
        updateMusicButton(true);
        return true;
    } catch (error) {
        updateMusicButton(false);
        return false;
    }
}

musicToggle.addEventListener('click', async function(event) {
    event.stopPropagation();
    if (isMusicPlaying) {
        bgMusic.pause();
        updateMusicButton(false);
    } else {
        await playMusic();
    }
});

bgMusic.addEventListener('play', () => updateMusicButton(true));
bgMusic.addEventListener('pause', () => updateMusicButton(false));
bgMusic.addEventListener('error', () => updateMusicButton(false));

// Auto-play music on load with user interaction fallback
window.addEventListener('load', async function() {
    // Browsers often block audible autoplay. Try it first, then use the first
    // user interaction as the permitted playback gesture.
    const startedAutomatically = await playMusic();
    if (!startedAutomatically) {
        document.addEventListener('pointerdown', async function playOnFirstInteraction(event) {
            if (event.target.closest('#musicToggle')) return;
            await playMusic();
        }, { once: true });
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


