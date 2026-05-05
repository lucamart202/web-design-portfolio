/* ============================================================================
   FREELANCE WEB DESIGNER PORTFOLIO — MASTER JAVASCRIPT
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ========================================================================
     1. NAVBAR SCROLL BEHAVIOR
     ======================================================================== */

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* ========================================================================
     2. MOBILE MENU TOGGLE
     ======================================================================== */

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    // Open menu
    hamburger.addEventListener('click', function () {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });

    // Close menu on close button
    if (mobileClose) {
      mobileClose.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    }

    // Close menu when clicking a link inside
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ========================================================================
     3. SCROLL-TRIGGERED REVEAL ANIMATIONS (IntersectionObserver)
     ======================================================================== */

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* ========================================================================
     4. FAQ ACCORDION
     ======================================================================== */

  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(button => {
      button.addEventListener('click', function () {
        const faqItem = button.closest('.faq-item');
        const isOpen = faqItem.classList.contains('open');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('open');
        });

        // Open clicked item if it wasn't open
        if (!isOpen) {
          faqItem.classList.add('open');
        }
      });
    });
  }

  /* ========================================================================
     5. PORTFOLIO FILTER (work.html only)
     ======================================================================== */

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filterValue = button.getAttribute('data-filter');

        // Update active button state
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        // Show/hide cards based on category
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'block';
            // Trigger reflow to enable transition
            card.offsetHeight;
            card.style.opacity = '1';
          } else {
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Initialize: set first button as active and show all cards
    if (filterButtons.length > 0) {
      filterButtons[0].classList.add('active');
      projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.display = 'block';
      });
    }
  }

  /* ========================================================================
     6. CONTACT FORM VALIDATION & SUCCESS STATE
     ======================================================================== */

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check honeypot (anti-spam)
      const honeypot = contactForm.querySelector('input[name="_honey"]');
      if (honeypot && honeypot.value) {
        // Silently fail honeypot check
        return;
      }

      // Validate required fields
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });

      // Email field validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          emailField.classList.add('error');
          isValid = false;
        } else {
          emailField.classList.remove('error');
        }
      }

      if (!isValid) {
        return;
      }

      // Show success state
      contactForm.hidden = true;
      formSuccess.hidden = false;

      // Reset form (optional, for future uses if page stays open)
      setTimeout(() => {
        contactForm.reset();
      }, 100);
    });
  }

  /* ========================================================================
     7. FOOTER: SET CURRENT YEAR
     ======================================================================== */

  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  /* ========================================================================
     8. ACTIVE NAV LINK HIGHLIGHTING
     ======================================================================== */

  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu__nav a');
  if (navLinks.length > 0) {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ========================================================================
     9. PORTFOLIO CARDS: ADD OPACITY TRANSITION CSS
     ======================================================================== */

  const projectCardsForTransition = document.querySelectorAll('.project-card');
  if (projectCardsForTransition.length > 0) {
    projectCardsForTransition.forEach(card => {
      card.style.transition = 'opacity 0.3s ease';
      card.style.opacity = '1';
    });
  }
});
