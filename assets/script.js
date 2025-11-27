// ========================================
// SMOOTH SCROLLING
// ========================================
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Add smooth scrolling to all navbar links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Check if it's an anchor link
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href);

        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
});

// ========================================
// INTERSECTION OBSERVER - FADE IN SECTIONS
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Also observe cards for staggered animation
  const cards = document.querySelectorAll('.highlight-card, .lesson-card, .gallery-item, .contact-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});

// ========================================
// CONTACT FORM SUBMISSION VIA FORMSPREE
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
    } else {
      // Form is valid - submit to Formspree
      const formData = new FormData(this);
      const formSuccess = document.getElementById('formSuccess');

      try {
        const response = await fetch('https://formspree.io/f/xdkrnndw', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          // Success - show success message
          if (formSuccess) {
            formSuccess.classList.remove('d-none');
          }

          // Reset form
          this.reset();
          this.classList.remove('was-validated');

          // Hide success message after 5 seconds
          setTimeout(() => {
            if (formSuccess) {
              formSuccess.classList.add('d-none');
            }
          }, 5000);
        } else {
          // Error response from Formspree
          alert('Something went wrong while sending your message. Please try again later.');
        }
      } catch (error) {
        // Network error
        alert('Something went wrong while sending your message. Please try again later.');
      }
    }
  });
}

// ========================================
// BOOKING FORM VALIDATION
// ========================================
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
    } else {
      // Form is valid - close modal and show success
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      if (modal) {
        modal.hide();
      }

      // Show alert
      alert('Thank you! Your trial lesson request has been submitted. We will contact you soon!');

      // Reset form
      this.reset();
      this.classList.remove('was-validated');
    }
  });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  // Add shadow to navbar when scrolled
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// ========================================
// MODAL CHAINING SUPPORT
// ========================================
// Handle modal chaining (close one, open another)
document.addEventListener('DOMContentLoaded', function () {
  const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"][data-bs-dismiss="modal"]');

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function (e) {
      const targetModalId = this.getAttribute('data-bs-target');
      const currentModal = this.closest('.modal');

      if (currentModal && targetModalId) {
        // Close current modal
        const bsCurrentModal = bootstrap.Modal.getInstance(currentModal);
        if (bsCurrentModal) {
          bsCurrentModal.hide();
        }

        // Wait for current modal to close, then open target modal
        setTimeout(() => {
          const targetModal = document.querySelector(targetModalId);
          if (targetModal) {
            const bsTargetModal = new bootstrap.Modal(targetModal);
            bsTargetModal.show();
          }
        }, 300);
      }
    });
  });
});

// ========================================
// CAROUSEL AUTO-PLAY PAUSE ON HOVER
// ========================================
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('skillsCarousel');

  if (carousel) {
    carousel.addEventListener('mouseenter', function () {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel);
      if (bsCarousel) {
        bsCarousel.pause();
      }
    });

    carousel.addEventListener('mouseleave', function () {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel);
      if (bsCarousel) {
        bsCarousel.cycle();
      }
    });
  }
});

// ========================================
// ADD ACTIVE STATE TO NAVBAR ON SCROLL
// ========================================
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========================================
// KEYBOARD NAVIGATION FOR MODALS
// ========================================
document.addEventListener('keydown', function (e) {
  // Close modal on ESC key (Bootstrap handles this, but we can add custom logic)
  if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal.show');
    openModals.forEach((modal) => {
      const bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
    });
  }
});

// ========================================
// FORM INPUT ANIMATIONS
// ========================================
document.addEventListener('DOMContentLoaded', function () {
  const formInputs = document.querySelectorAll('.form-control, .form-select');

  formInputs.forEach((input) => {
    // Add focus animation
    input.addEventListener('focus', function () {
      this.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
      this.style.transform = 'scale(1)';
    });
  });
});

// ========================================
// PARALLAX EFFECT FOR HERO GRADIENT
// ========================================
window.addEventListener('scroll', function () {
  const heroGradient = document.querySelector('.hero-gradient');

  if (heroGradient) {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    heroGradient.style.transform = `translateY(${parallax}px)`;
  }
});

// ========================================
// LOADING ANIMATION COMPLETE
// ========================================
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

// ========================================
// EMAIL VALIDATION HELPER
// ========================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Enhanced email validation for all email inputs
document.addEventListener('DOMContentLoaded', function () {
  const emailInputs = document.querySelectorAll('input[type="email"]');

  emailInputs.forEach((input) => {
    input.addEventListener('blur', function () {
      if (this.value && !validateEmail(this.value)) {
        this.setCustomValidity('Please enter a valid email address');
        this.classList.add('is-invalid');
      } else {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
      }
    });

    input.addEventListener('input', function () {
      if (this.classList.contains('is-invalid') && validateEmail(this.value)) {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
      }
    });
  });
});

// ========================================
// VIDEO UNMUTE TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function () {
  const unmuteBtn = document.getElementById('unmuteBtn');
  const heroVideo = document.getElementById('heroVideo');

  if (unmuteBtn && heroVideo) {
    unmuteBtn.addEventListener('click', function () {
      if (heroVideo.muted) {
        heroVideo.muted = false;
        this.innerHTML = '<i class="bi bi-volume-up"></i>';
        this.setAttribute('aria-label', 'Mute video');
      } else {
        heroVideo.muted = true;
        this.innerHTML = '<i class="bi bi-volume-mute"></i>';
        this.setAttribute('aria-label', 'Unmute video');
      }
    });
  }
});
