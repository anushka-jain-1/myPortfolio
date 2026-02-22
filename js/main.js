/**
 * Main Initialization Script
 * Initializes all JavaScript components on DOMContentLoaded
 * 
 * This file implements Task 6.4 from the phd-portfolio-website spec:
 * - Instantiates NavigationController, ScrollManager, and AnimationController
 * - Adds feature detection for Intersection Observer with fallback
 * - Adds error handling for missing elements
 * 
 * Validates: Requirements 3.2, 2.3, 5.3
 * 
 * Architecture:
 * 1. Feature Detection: Checks for Intersection Observer API support
 * 2. Component Initialization: Creates instances of all controllers
 * 3. Error Handling: Validates required DOM elements exist
 * 4. Fallback Behavior: Provides basic functionality for older browsers
 * 
 * Initialization Order:
 * 1. navigation.js - Defines NavigationController and ScrollManager classes
 * 2. animations.js - Defines AnimationController class
 * 3. content-loader.js - Handles dynamic content loading (independent)
 * 4. main.js (this file) - Initializes all components
 */

/**
 * Feature detection for Intersection Observer API
 * @returns {boolean} True if Intersection Observer is supported
 */
function supportsIntersectionObserver() {
  return 'IntersectionObserver' in window &&
         'IntersectionObserverEntry' in window &&
         'intersectionRatio' in window.IntersectionObserverEntry.prototype;
}

/**
 * Fallback for browsers without Intersection Observer support
 * Applies animations immediately and sets up basic scroll detection
 */
function initializeFallbackBehavior() {
  console.warn('IntersectionObserver not supported, using fallback behavior');
  
  // Apply animations immediately to all elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(element => {
    element.classList.add('animated');
  });
  
  // Basic scroll-based active link highlighting using scroll events
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveNavLinkFallback();
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Fallback function to update active navigation link based on scroll position
 * Used when Intersection Observer is not available
 */
function updateActiveNavLinkFallback() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = null;
  const scrollPosition = window.scrollY + 150; // Account for navbar height
  
  // Find which section is currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Update active link
  if (currentSection) {
    navLinks.forEach(link => {
      const targetId = link.getAttribute('data-nav-target') || 
                      link.getAttribute('href').substring(1);
      
      if (targetId === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize all JavaScript components
 * Called when DOM is fully loaded
 */
function initializeApp() {
  try {
    // Check for required elements
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.content-section');
    
    // Error handling: Check if navbar exists
    if (!navbar) {
      console.error('Navigation bar element (.navbar) not found');
      return;
    }
    
    // Error handling: Check if sections exist
    if (sections.length === 0) {
      console.error('No content sections (.content-section) found');
      return;
    }
    
    // Feature detection for Intersection Observer
    if (supportsIntersectionObserver()) {
      console.info('Initializing with Intersection Observer support');
      
      // Initialize NavigationController
      try {
        const navigationController = new NavigationController(navbar);
        console.info('NavigationController initialized successfully');
      } catch (error) {
        console.error('Failed to initialize NavigationController:', error);
      }
      
      // Initialize ScrollManager
      try {
        const scrollManager = new ScrollManager();
        console.info('ScrollManager initialized successfully');
      } catch (error) {
        console.error('Failed to initialize ScrollManager:', error);
      }
      
      // Initialize AnimationController
      try {
        const animationController = new AnimationController();
        console.info('AnimationController initialized successfully');
      } catch (error) {
        console.error('Failed to initialize AnimationController:', error);
      }
    } else {
      // Fallback for browsers without Intersection Observer
      console.info('Initializing with fallback behavior (no Intersection Observer)');
      
      // Initialize NavigationController (it has basic functionality without observer)
      try {
        const navigationController = new NavigationController(navbar);
        console.info('NavigationController initialized successfully (fallback mode)');
      } catch (error) {
        console.error('Failed to initialize NavigationController:', error);
      }
      
      // Initialize fallback behavior for animations and scroll detection
      initializeFallbackBehavior();
    }
    
    console.info('Application initialized successfully');
    
  } catch (error) {
    console.error('Critical error during application initialization:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded (script loaded after DOMContentLoaded)
  initializeApp();
}
