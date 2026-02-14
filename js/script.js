// Gift Box Opening Animation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    // Index page - Gift box opening
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        const giftBox = document.getElementById('giftBox');
        const itemsContainer = document.getElementById('itemsContainer');
        
        if (giftBox && itemsContainer) {
            giftBox.addEventListener('click', function() {
                // Add opening class to trigger animation
                giftBox.classList.add('opening');
                
                // Show items after a delay
                setTimeout(function() {
                    itemsContainer.classList.add('show');
                }, 800);
                
                // Remove click functionality after opening
                giftBox.style.pointerEvents = 'none';
            });
        }
    }
    
    // Message page - Envelope opening
    if (currentPage.includes('message.html')) {
        const envelope = document.getElementById('envelope');
        const letter = document.getElementById('letter');
        const instruction = document.getElementById('instruction');
        
        if (envelope && letter && instruction) {
            envelope.addEventListener('click', function() {
                // Open envelope
                envelope.classList.add('opened');
                
                // Hide instruction
                setTimeout(function() {
                    instruction.style.display = 'none';
                }, 500);
                
                // Disable further clicks
                envelope.style.pointerEvents = 'none';
            });
        }
    }
    
    // Add smooth scroll behavior to all pages
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover sound effect simulation (visual feedback)
    const giftItems = document.querySelectorAll('.gift-item');
    giftItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Chocolate pieces interaction
    const chocolatePieces = document.querySelectorAll('.chocolate-piece');
    chocolatePieces.forEach(piece => {
        piece.addEventListener('click', function() {
            // Create a "taken" effect
            this.style.transition = 'all 0.5s ease';
            this.style.opacity = '0.3';
            this.style.transform = 'scale(0.8)';
            
            // Reset after a moment
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }, 1000);
        });
    });
    
    // Flower cards interaction
    const flowerCards = document.querySelectorAll('.flower-card');
    flowerCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a blooming effect
            const icon = this.querySelector('.flower-icon');
            if (icon) {
                icon.style.animation = 'none';
                setTimeout(() => {
                    icon.style.animation = 'spin 0.8s ease';
                }, 10);
            }
        });
    });
    
    // Memory cards interaction
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a sparkle effect
            const icon = this.querySelector('.memory-icon');
            if (icon) {
                icon.style.animation = 'none';
                setTimeout(() => {
                    icon.style.animation = 'twinkle 0.6s ease';
                }, 10);
            }
        });
    });
    
    // Add parallax effect to background elements
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const backgroundHearts = document.querySelector('.background-hearts');
            if (backgroundHearts) {
                backgroundHearts.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
            
            const backgroundPattern = document.querySelector('.background-pattern');
            if (backgroundPattern) {
                backgroundPattern.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
            }
        });
    }
    
    // Add loading animation completion
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // Prevent default drag behavior on images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back
    if (e.key === 'Escape') {
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.click();
        }
    }
});

// Add a subtle animation to elements when they enter viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.message-box, .flower-meanings, .chocolates-grid, .memory-cards');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
