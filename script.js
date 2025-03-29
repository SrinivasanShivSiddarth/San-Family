// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('.main-content');
    const progress = document.querySelector('.loading-progress');

    // Animate loading bar
    setTimeout(() => {
        progress.style.width = '100%';
    }, 100);

    // Hide loader and show content
    setTimeout(() => {
        loader.style.opacity = '0';
        mainContent.classList.remove('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 3000);

    // Initialize scroll-based animations after the loading screen
    initScrollAnimations();
    
    // Initialize improved glimmer effect
    createImprovedGlimmerEffect();
    
    // Initialize team member card interactions
    initTeamCardInteractions();
    
    // Setup navigation scroll effects
    setupNavigation();
    
    // Setup the "Meet our glorious Developers" button
    setupHeroButton();
});

// Setup navigation scroll effects
function setupNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Function to check scroll position and update nav styles
    function checkScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Highlight active nav link based on scroll position
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        // Get all sections that have an ID
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current link
                document.querySelector(`.nav-links a[href="#${currentId}"]`).classList.add('active');
            }
        });
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Initial check
    checkScroll();
}

// Setup the "Meet our glorious Developers" button to scroll to team section
function setupHeroButton() {
    const heroButton = document.querySelector('.premium-button');
    
    heroButton.addEventListener('click', () => {
        const teamSection = document.getElementById('team');
        
        if (teamSection) {
            teamSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Initialize ScrollReveal animations for all elements
function initScrollAnimations() {
    // Common options for all elements
    const commonOptions = {
        duration: 1000,
        distance: '50px',
        reset: true // This makes the animation repeat each time the element enters the viewport
    };

    // Hero content (logo and tagline) fade-in animation
    ScrollReveal().reveal('.glowing-logo', {
        ...commonOptions,
        origin: 'top',
        delay: 200
    });

    ScrollReveal().reveal('.tagline', {
        ...commonOptions,
        origin: 'bottom',
        delay: 400
    });

    ScrollReveal().reveal('.premium-button', {
        ...commonOptions,
        origin: 'bottom',
        delay: 600
    });

    // Team section animations
    ScrollReveal().reveal('.team h2', {
        ...commonOptions,
        origin: 'top',
        delay: 200
    });

    // Team members with interval for cascading effect
    ScrollReveal().reveal('.team-member', {
        ...commonOptions,
        origin: 'bottom',
        interval: 200
    });

    // Navigation links
    ScrollReveal().reveal('.nav-links a', {
        ...commonOptions,
        origin: 'top',
        interval: 100,
        delay: 200
    });
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Team member card interactions (hover animation and click functionality)
function initTeamCardInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Enhanced hover effect
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.05) translateY(-10px)';
            member.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
            member.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1) translateY(0)';
            member.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.1)';
        });
        
        // Make the entire card clickable to open the portfolio link
        member.addEventListener('click', () => {
            const portfolioLink = member.querySelector('a[href*="discord.gg"]');
            if (portfolioLink) {
                window.open(portfolioLink.getAttribute('href'), '_blank');
            }
        });
        
        // Change cursor to pointer to indicate clickability
        member.style.cursor = 'pointer';
    });
}

// Improved Glimmer Effect (restricted to hero section)
function createImprovedGlimmerEffect() {
    // Create container for glimmers but only inside the hero section
    const heroSection = document.querySelector('.hero');
    const glimmerContainer = document.createElement('div');
    glimmerContainer.className = 'glimmer-container';
    glimmerContainer.style.position = 'absolute';
    glimmerContainer.style.top = '0';
    glimmerContainer.style.left = '0';
    glimmerContainer.style.width = '100%';
    glimmerContainer.style.height = '100%';
    glimmerContainer.style.overflow = 'hidden';
    glimmerContainer.style.pointerEvents = 'none';
    heroSection.appendChild(glimmerContainer);

    function createGlimmer() {
        // Create a glimmer element
        const glimmer = document.createElement('div');
        glimmer.className = 'glimmer';

        // Better positioning - focus more on the center area
        const centerBiasX = Math.random() * 0.6 + 0.2; // 20% to 80% horizontal
        const centerBiasY = Math.random() * 0.6 + 0.2; // 20% to 80% vertical
        
        glimmer.style.left = `${centerBiasX * 100}%`;
        glimmer.style.top = `${centerBiasY * 100}%`;

        // Improved size variation with smaller average size
        const size = Math.random() * 4 + 2; // 2px to 6px
        glimmer.style.width = `${size}px`;
        glimmer.style.height = `${size}px`;
        
        // Improved animation - smoother and more subtle
        const duration = Math.random() * 2 + 3; // 3 to 5 seconds
        glimmer.style.animation = `glimmer ${duration}s ease-in-out`;
        
        // Better glow effect
        glimmer.style.boxShadow = `0 0 ${size * 2}px rgba(255, 215, 0, 0.${Math.floor(Math.random() * 5) + 3})`;
        
        // Add to container
        glimmerContainer.appendChild(glimmer);

        // Remove after animation completes
        setTimeout(() => {
            if (glimmerContainer.contains(glimmer)) {
                glimmerContainer.removeChild(glimmer);
            }
        }, duration * 1000);
    }

    // Create multiple glimmers with varying frequency
    setInterval(() => {
        // More controlled frequency - create 1-3 glimmers at a time
        const count = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                createGlimmer();
            }, Math.random() * 100); // Slight staggering
        }
    }, 700); // Slightly slower interval
}