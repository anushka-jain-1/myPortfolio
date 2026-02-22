// Navigation and Scroll Management
// This file contains NavigationController and ScrollManager classes

/**
 * NavigationController
 * Handles navigation link clicks and smooth scrolling behavior
 * Validates: Requirements 3.2, 2.3
 */
class NavigationController {
  constructor(navElement) {
    this.nav = navElement;
    this.links = navElement.querySelectorAll('.nav-link');
    this.sections = [];
    this.init();
  }
  
  init() {
    // Set up click handlers for smooth scrolling
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-nav-target') || link.getAttribute('href').substring(1);
        
        // Handle home button - scroll to top
        if (targetId === 'top') {
          this.scrollToTop();
        } else {
          this.scrollToSection(targetId);
        }
      });
    });
    
    // Collect all sections for reference
    this.sections = Array.from(document.querySelectorAll('.content-section'));
    
    // Set up Intersection Observer for active link highlighting
    this.setupIntersectionObserver();
  }
  
  /**
   * Set up Intersection Observer to detect visible sections
   * Updates active link based on which section is in viewport
   */
  setupIntersectionObserver() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('NavigationController: Intersection Observer not supported, skipping observer setup');
      return;
    }
    
    // Configure observer with appropriate threshold and rootMargin
    const observerOptions = {
      threshold: 0.5, // Section must be 50% visible
      rootMargin: '-100px 0px' // Account for fixed navbar height
    };
    
    // Create Intersection Observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get section ID and update active link
          const sectionId = entry.target.getAttribute('id');
          this.updateActiveLink(sectionId);
        }
      });
    }, observerOptions);
    
    // Observe all content sections
    this.sections.forEach(section => {
      this.observer.observe(section);
    });
  }
  
  /**
   * Scroll to a specific section by ID
   * Handles edge case of missing target sections
   * @param {string} sectionId - The ID of the target section
   */
  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    
    // Handle edge case: missing target section
    if (!targetSection) {
      console.warn(`Section #${sectionId} not found`);
      return;
    }
    
    // Smooth scroll to target section
    targetSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
  
  /**
   * Scroll to top of page (y=0)
   * Used for home button functionality
   */
  scrollToTop() {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }
  
  /**
   * Update active state on navigation links
   * @param {string} sectionId - The ID of the currently active section
   */
  updateActiveLink(sectionId) {
    this.links.forEach(link => {
      const targetId = link.getAttribute('data-nav-target') || link.getAttribute('href').substring(1);
      
      if (targetId === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// NavigationController will be initialized by main.js

/**
 * ScrollManager
 * Handles scroll-based section visibility detection and smooth scrolling
 * Validates: Requirements 2.1, 2.2, 2.3
 */
class ScrollManager {
  constructor() {
    this.sections = document.querySelectorAll('.content-section');
    this.observer = null;
    this.activeSection = null;
    this.init();
  }
  
  /**
   * Initialize the ScrollManager
   * Sets up Intersection Observer for section visibility detection
   */
  init() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('ScrollManager: Intersection Observer not supported, skipping initialization');
      return;
    }
    
    // Set up Intersection Observer with appropriate configuration
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: 0.5, // Section must be 50% visible to be considered active
        rootMargin: '-100px 0px' // Account for fixed navbar height
      }
    );
    
    // Observe all content sections
    this.sections.forEach(section => {
      this.observer.observe(section);
    });
  }
  
  /**
   * Handle intersection events from the Intersection Observer
   * Updates active section when a section becomes visible
   * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update active section
        this.activeSection = entry.target;
        
        // Dispatch custom event for other components to listen to
        const sectionId = entry.target.getAttribute('id');
        document.dispatchEvent(new CustomEvent('sectionVisible', {
          detail: { sectionId: sectionId }
        }));
      }
    });
  }
  
  /**
   * Programmatically scroll to a target element with smooth behavior
   * @param {HTMLElement} target - The target element to scroll to
   */
  smoothScrollTo(target) {
    if (!target) {
      console.warn('ScrollManager: Target element not found');
      return;
    }
    
    // Smooth scroll to target element
    target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
  
  /**
   * Get the currently active section
   * @returns {HTMLElement|null} The currently active section element
   */
  getActiveSection() {
    return this.activeSection;
  }
  
  /**
   * Disconnect the observer (cleanup)
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// ScrollManager will be initialized by main.js
