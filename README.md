# Ph.D. Portfolio Website

A single-page portfolio website for a Ph.D. biology student specializing in proteomics research. Built with vanilla HTML, CSS, and JavaScript for easy hosting on GitHub Pages.

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Scrolling**: Navigate between sections with smooth scroll animations
- **Minimalistic Design**: Clean interface with limited color palette and whitespace
- **Accessibility**: Semantic HTML5, ARIA labels, and keyboard navigation support
- **Performance Optimized**: Fast loading with optimized assets and minimal dependencies
- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript

## Project Structure

```
myPortfolio/
├── index.html              # Main HTML file with all content
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, typography)
│   ├── styles.css          # Main stylesheet with base styles
│   └── responsive.css      # Media queries for responsive design
├── js/
│   ├── navigation.js       # Navigation bar and scroll behavior
│   └── animations.js       # Scroll-triggered animations
├── assets/
│   ├── images/             # Optimized images (profile photo, etc.)
│   └── icons/              # SVG icons for navigation and sections
└── README.md               # This file
```

## How to Update Content

All content is contained in `index.html` and can be easily updated by editing the HTML elements. Here's where to find each section:

### 1. About Section

**Location**: `<section id="about">`

Update the following elements:
- **Profile Image**: Replace `assets/images/profile.jpg` with your photo
- **Name**: Edit the `<h1 class="name">` element
- **Title**: Edit the `<p class="title">` element
- **Bio**: Edit the `<p class="description">` element

```html
<h1 class="name">Your Name</h1>
<p class="title">Ph.D. Candidate in Biology (Proteomics)</p>
<p class="description">Your biographical information here...</p>
```

### 2. Research Section

**Location**: `<section id="research">`

Update research projects by editing or duplicating `.research-item` elements:

```html
<div class="research-item" data-animate>
  <h3 class="research-title">Your Project Title</h3>
  <p class="research-description">Project description...</p>
  <ul class="research-highlights">
    <li>Key finding 1</li>
    <li>Key finding 2</li>
  </ul>
</div>
```

To add more projects, copy the entire `.research-item` div and paste it below.

### 3. Skills Section

**Location**: `<section id="skills">`

Update skills by editing the `.skill-category` elements:

```html
<div class="skill-category" data-animate>
  <h3 class="category-title">Category Name</h3>
  <ul class="skill-list">
    <li class="skill-item">Skill 1</li>
    <li class="skill-item">Skill 2</li>
  </ul>
</div>
```

Add or remove `<li class="skill-item">` elements as needed.

### 4. Work Experience Section

**Location**: `<section id="experience">`

Update work experience by editing `.timeline-item` elements:

```html
<div class="timeline-item" data-animate>
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h3 class="job-title">Position Title</h3>
    <p class="company">Organization Name</p>
    <p class="duration">Start Date - End Date</p>
    <p class="description">Job description...</p>
  </div>
</div>
```

To add more positions, copy the entire `.timeline-item` div.

### 5. Hobbies Section

**Location**: `<section id="hobbies">`

Update hobbies by editing `.hobby-card` elements:

```html
<div class="hobby-card" data-animate>
  <div class="hobby-icon">🔬</div>
  <h3 class="hobby-title">Hobby Name</h3>
  <p class="hobby-description">Description...</p>
</div>
```

Change the emoji in `.hobby-icon` or replace with an image/SVG icon.

## Customizing Design

### Colors

Edit `css/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #2C3E50;      /* Main text color */
  --color-secondary: #3498DB;    /* Accent color */
  --color-accent: #E74C3C;       /* Highlight color */
  --color-background: #FFFFFF;   /* Background color */
}
```

**Note**: The design uses a maximum of 4 primary colors as per requirements.

### Typography

Change fonts in `css/variables.css`:

```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Playfair Display', serif;
}
```

**Note**: The design uses a maximum of 2 font families as per requirements.

### Spacing

Adjust spacing scale in `css/variables.css`:

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
}
```

## Local Development

1. Clone this repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```
4. Navigate to `http://localhost:8000`

## Deploying to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select the branch (usually `main` or `master`)
4. Select the root folder `/`
5. Click "Save"
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### Important Notes for GitHub Pages

- Ensure `index.html` is in the root directory
- All asset paths should be relative (e.g., `assets/images/profile.jpg`)
- The `.nojekyll` file (if needed) bypasses Jekyll processing
- Changes may take a few minutes to appear after pushing

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for navigation
- Keyboard navigation support
- Alt text for images
- Sufficient color contrast
- Responsive text sizing
- Reduced motion support

## Performance

- Optimized images (WebP format recommended)
- Minimal HTTP requests
- Inline critical CSS
- Lazy loading for below-the-fold images
- No external framework dependencies

## License

This project is open source and available under the MIT License.

## Credits

Designed and developed for a Ph.D. biology student specializing in proteomics research.

---

**Need Help?** If you encounter any issues or need assistance updating content, please refer to the HTML comments in `index.html` or consult the design documentation.
