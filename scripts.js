// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';

  if (navLinks.style.display === 'flex') {
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.backgroundColor = 'white';
    navLinks.style.flexDirection = 'column';
    navLinks.style.padding = '1rem';
    navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    navLinks.style.zIndex = '1000';
  }
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
});

// Animated counter for stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const options = {
    threshold: 0.7
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Initialize counter animation when page loads
document.addEventListener('DOMContentLoaded', animateCounters);

// Modal functionality
function showSignupForm() {
  const modal = document.getElementById('signupModal');
  modal.style.display = 'block';

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeSignupForm();
    }
  });
}

function closeSignupForm() {
  const modal = document.getElementById('signupModal');
  modal.style.display = 'none';
}

// Handle signup form submission
document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;

      // Simulate form submission
      alert(`Thanks for your interest! We'll send updates to ${email}`);
      closeSignupForm();
      this.reset();
    });
  }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = 'var(--background-color)';
    header.style.backdropFilter = 'none';
  }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '0';
      this.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 100);
    });
  });
});

// Add hover effects to feature cards
document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.feature-card');

  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        const navLinksContainer = document.querySelector('.nav-links');
        navLinksContainer.style.display = 'none';
      }
    });
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('signupModal');

  // Close modal with Escape key
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeSignupForm();
  }
});

// Add form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Enhanced form submission with validation
document.addEventListener('DOMContentLoaded', function() {
  const emailInputs = document.querySelectorAll('input[type="email"]');

  emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#ef4444';
        this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
      } else {
        this.style.borderColor = 'var(--border-color)';
        this.style.boxShadow = 'none';
      }
    });
  });
});
