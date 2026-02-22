// Animation Controller
// This file contains AnimationController class for scroll-triggered animations

/**
 * AnimationController
 * Manages scroll-triggered animations for visual engagement
 * Uses Intersection Observer to detect when elements enter viewport
 * Validates: Requirements 5.3
 */
class AnimationController {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.observer = null;
    this.init();
  }
  
  /**
   * Initialize the AnimationController
   * Sets up Intersection Observer for scroll-triggered animations
   */
  init() {
    // Check if there are any elements to animate
    if (this.animatedElements.length === 0) {
      console.info('AnimationController: No elements with data-animate attribute found');
      return;
    }
    
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('AnimationController: Intersection Observer not supported, skipping initialization');
      return;
    }
    
    // Set up Intersection Observer for animations
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport
    };
    
    this.observer = new IntersectionObserver(
      this.handleAnimation.bind(this),
      observerOptions
    );
    
    // Observe all elements with data-animate attribute
    this.animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }
  
  /**
   * Handle animation when elements intersect with viewport
   * Applies 'animated' class to trigger CSS animations
   * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
   */
  handleAnimation(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animated class to trigger CSS animation
        entry.target.classList.add('animated');
        
        // Optional: Stop observing after animation is triggered (one-time animation)
        // Uncomment the line below if you want animations to trigger only once
        // this.observer.unobserve(entry.target);
      }
    });
  }
  
  /**
   * Manually trigger animation for a specific element
   * @param {HTMLElement} element - The element to animate
   */
  animateElement(element) {
    if (element && element.hasAttribute('data-animate')) {
      element.classList.add('animated');
    }
  }
  
  /**
   * Reset animation for a specific element
   * @param {HTMLElement} element - The element to reset
   */
  resetAnimation(element) {
    if (element && element.hasAttribute('data-animate')) {
      element.classList.remove('animated');
    }
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

// AnimationController will be initialized by main.js
