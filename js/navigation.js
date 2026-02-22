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

// Initialize NavigationController when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const navigationController = new NavigationController(navbar);
  }
});
