// Optimized and Enhanced Portfolio JavaScript

// Word-by-word text animation
function animateText() {
  const helloElement = document.querySelector('.hello');
  const professionElement = document.querySelector('.my-profession');

  if (helloElement) {
    const helloText = "Assalam o Alaikum, I'm Areeba Ramzan";
    const words = helloText.split(' ');
    helloElement.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.style.animationDelay = `${index * 0.2}s`;
      span.innerHTML = word + ' ';
      helloElement.appendChild(span);
    });
  }

  if (professionElement) {
    const professionText = "I'm a Front-End Developer From Karachi";
    const words = professionText.split(' ');
    professionElement.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.style.animationDelay = `${(index + 6) * 0.2}s`;
      span.innerHTML = word + ' ';
      professionElement.appendChild(span);
    });
  }
}

// Skills SVG circular progress animation
function animateSkills() {
  const skillItems = document.querySelectorAll('.skill-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressCircle = entry.target.querySelector('.progress-circle');
        const percent = entry.target.getAttribute('data-percent');

        if (progressCircle && percent) {
          const circumference = 2 * Math.PI * 70; // radius = 70
          const offset = circumference - (percent / 100) * circumference;
          progressCircle.style.strokeDashoffset = offset;
        }
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => {
    observer.observe(item);
  });
}

// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Add active class to clicked link
      link.classList.add('active');

      // Smooth scroll to section
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Portfolio - no filter needed, just show all projects
function initPortfolioFilter() {
  // Remove any existing filter buttons
  const existingFilters = document.querySelector('.filter-buttons');
  if (existingFilters) {
    existingFilters.remove();
  }

  // Show all portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.style.display = 'block';
  });
}

// Responsive navigation for mobile
function initMobileNav() {
  const leftNav = document.querySelector('.left-nav');
  const mainContent = document.querySelector('.main_content');

  if (window.innerWidth <= 768) {
    // Create mobile menu toggle if it doesn't exist
    if (!document.querySelector('.mobile-toggle')) {
      const toggle = document.createElement('button');
      toggle.className = 'mobile-toggle';
      toggle.innerHTML = '<i class="fa fa-bars"></i>';
      toggle.style.cssText = 'position:fixed;top:20px;left:20px;z-index:1001;background:var(--skin-color);color:white;border:none;padding:10px;border-radius:5px;cursor:pointer;';

      toggle.addEventListener('click', () => {
        leftNav.classList.toggle('mobile-open');
      });

      document.body.appendChild(toggle);
    }
  }
}

// Initialize all functionality
function init() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  animateText();
  animateSkills();
  initNavigation();
  initPortfolioFilter();
  initMobileNav();

  // Reinitialize on window resize
  window.addEventListener('resize', () => {
    initMobileNav();
  });
}

// Start initialization
init();

// Typed.js integration for profession typing effect
if (typeof Typed !== 'undefined') {
  const typed = new Typed('.typing', {
    strings: ['Front-End Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
}
