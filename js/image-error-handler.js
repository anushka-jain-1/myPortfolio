/**
 * Image Error Handler
 * Implements Task 7.1 from the phd-portfolio-website spec:
 * - Provides onerror handlers for all images
 * - Provides fallback placeholder image
 * - Adds CSS placeholder background colors
 * 
 * Validates: Requirements 9.2
 * 
 * This module ensures that the website remains functional and visually
 * consistent even when images fail to load due to network issues,
 * missing files, or other errors.
 */

class ImageErrorHandler {
  constructor() {
    this.placeholderImage = 'assets/images/placeholder.svg';
    this.erroredImages = new Set();
    this.init();
  }

  /**
   * Initialize image error handling
   * Sets up error handlers for all existing images and observes for new images
   */
  init() {
    // Handle all existing images
    this.handleExistingImages();
    
    // Observe DOM for dynamically added images
    this.observeNewImages();
    
    console.info('ImageErrorHandler initialized successfully');
  }

  /**
   * Add error handlers to all existing images in the DOM
   */
  handleExistingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      this.addErrorHandler(img);
    });
    
    console.info(`Added error handlers to ${images.length} existing images`);
  }

  /**
   * Add error handler to a single image element
   * @param {HTMLImageElement} img - The image element to add handler to
   */
  addErrorHandler(img) {
    // Skip if already has error handler
    if (img.dataset.errorHandlerAdded === 'true') {
      return;
    }

    // Mark as having error handler
    img.dataset.errorHandlerAdded = 'true';

    // Add error event listener
    img.addEventListener('error', (event) => {
      this.handleImageError(event.target);
    }, { once: true }); // Use once: true to prevent multiple handlers

    // Also add load event to remove error state if image loads successfully
    img.addEventListener('load', (event) => {
      this.handleImageLoad(event.target);
    }, { once: true });
  }

  /**
   * Handle image load error
   * @param {HTMLImageElement} img - The image element that failed to load
   */
  handleImageError(img) {
    // Prevent infinite loop if placeholder also fails
    if (this.erroredImages.has(img)) {
      console.error('Placeholder image also failed to load for:', img.alt || 'unnamed image');
      return;
    }

    // Mark image as errored
    this.erroredImages.add(img);
    img.dataset.error = 'true';

    // Log the error for debugging
    console.warn(`Image failed to load: ${img.src}`, {
      alt: img.alt,
      element: img
    });

    // Replace with placeholder
    img.src = this.placeholderImage;
    
    // Ensure alt text is meaningful
    if (!img.alt || img.alt.trim() === '') {
      img.alt = 'Image not available';
    }
  }

  /**
   * Handle successful image load
   * @param {HTMLImageElement} img - The image element that loaded successfully
   */
  handleImageLoad(img) {
    // Remove error state if it was previously set
    if (img.dataset.error === 'true') {
      delete img.dataset.error;
      this.erroredImages.delete(img);
    }
  }

  /**
   * Observe DOM for dynamically added images
   * Uses MutationObserver to detect new images added to the page
   */
  observeNewImages() {
    // Check if MutationObserver is supported
    if (!('MutationObserver' in window)) {
      console.warn('MutationObserver not supported, dynamic images may not have error handlers');
      return;
    }

    // Create observer to watch for new images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check added nodes
        mutation.addedNodes.forEach((node) => {
          // If the node is an image
          if (node.nodeName === 'IMG') {
            this.addErrorHandler(node);
          }
          
          // If the node contains images
          if (node.querySelectorAll) {
            const images = node.querySelectorAll('img');
            images.forEach(img => {
              this.addErrorHandler(img);
            });
          }
        });
      });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.info('MutationObserver set up to handle dynamically added images');
  }

  /**
   * Manually retry loading an image
   * @param {HTMLImageElement} img - The image element to retry
   */
  retryImage(img) {
    if (!img || img.nodeName !== 'IMG') {
      console.error('Invalid image element provided to retryImage');
      return;
    }

    // Remove from errored set to allow retry
    this.erroredImages.delete(img);
    delete img.dataset.error;

    // Force reload by changing src
    const originalSrc = img.src;
    img.src = '';
    
    // Use setTimeout to ensure the browser registers the change
    setTimeout(() => {
      img.src = originalSrc;
    }, 10);

    console.info('Retrying image load:', originalSrc);
  }

  /**
   * Get statistics about image loading
   * @returns {Object} Statistics object
   */
  getStats() {
    const allImages = document.querySelectorAll('img');
    const erroredCount = this.erroredImages.size;
    const successCount = allImages.length - erroredCount;

    return {
      total: allImages.length,
      successful: successCount,
      failed: erroredCount,
      successRate: allImages.length > 0 
        ? ((successCount / allImages.length) * 100).toFixed(2) + '%'
        : '0%'
    };
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.imageErrorHandler = new ImageErrorHandler();
  });
} else {
  // DOM is already loaded
  window.imageErrorHandler = new ImageErrorHandler();
}
