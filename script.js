/* ========================================
   JAVASCRIPT - Interactive Features
   ======================================== */

// Standardize header across all pages at runtime so the top bar is identical
function standardizeHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    header.innerHTML = `
        <div class="container">
            <div class="header-content">
                <img src="/images/logo-OncoGen.svg" alt="OncoGen Logo" class="logo-img">
                <nav class="nav">
                    <ul>
                        <li><a href="/">Acasă</a></li>
                        <li><a href="/despre">Despre</a></li>
                        <li><a href="/stiri">Știri și evenimente</a></li>
                        <li><a href="/proiecte">Proiecte</a></li>
                        <li><a href="/cercetare">Cercetare</a></li>
                        <li><a href="/hub-biotech">Hub Biotehnologii</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="header-association">
                    <a href="/asociatia" class="header-association-link">
                        <div class="header-logo-circle">❤️</div>
                        <div class="header-association-text">
                            <p>ASOCIAȚIA ONCOGEN</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>`;
}

// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and news cards
document.querySelectorAll('.service-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

/* ========================================
   VIDEO GALLERY - Modal Functions
   ======================================== */

// Open video modal
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    // Normalize common video URLs to embeddable sources
    try {
        const url = new URL(videoUrl);
        let embedUrl = null;

        // YouTube watch URL -> convert to embed
        if ((url.hostname.includes('youtube.com') && url.pathname === '/watch' && url.searchParams.get('v')) || url.hostname === 'youtu.be') {
            let vid = url.searchParams.get('v');
            if (!vid) {
                // short youtu.be link: pathname contains id
                vid = url.pathname.replace(/^\//, '');
            }
            embedUrl = `https://www.youtube.com/embed/${vid}?rel=0&autoplay=1`;
        }

        // YouTube embed URL already
        if (url.hostname.includes('youtube.com') && url.pathname.startsWith('/embed/')) {
            embedUrl = videoUrl + (videoUrl.includes('?') ? '&autoplay=1' : '?autoplay=1');
        }

        if (embedUrl) {
            videoFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            videoFrame.setAttribute('allowfullscreen', '');
            videoFrame.src = embedUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            // Non-embeddable URL (external page). Open in new tab instead of embedding to avoid X-Frame-Options issues.
            window.open(videoUrl, '_blank');
        }
    } catch (err) {
        // If URL parsing fails, open in new tab as fallback
        window.open(videoUrl, '_blank');
    }
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    videoFrame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the video
window.addEventListener('click', function (event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideoModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeVideoModal();
    }
});

// Mobile menu toggle (for future use)
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
}

// Active navigation link highlighting
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // enforce identical header across pages
    standardizeHeader();
    initMobileMenu();
    highlightActiveNav();
});

// Form submission handler (for future contact form)
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    // Add form handling logic here
}

// Utility function: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images (future use)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
