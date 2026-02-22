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

This portfolio uses a data-driven architecture. All content is stored in JSON files in the `data/` directory, making it easy to update your portfolio without touching any HTML or JavaScript code.

### Quick Start: Editing Your Portfolio

1. Navigate to the `data/` directory
2. Open any JSON file in a text editor
3. Modify the content (see examples below)
4. Save the file
5. Refresh your browser to see the changes

### Available Data Files

- **`about.json`** - Personal information, bio, and contact details
- **`research.json`** - Research projects and accomplishments
- **`skills.json`** - Technical and professional skills by category
- **`experience.json`** - Work experience and positions
- **`hobbies.json`** - Personal interests and hobbies
- **`awards.json`** - Honors, awards, and recognitions

### Example: Adding a Research Project

Open `data/research.json` and add a new project:

```json
{
  "projects": [
    {
      "title": "New Project Title",
      "description": "Description of your research project",
      "highlights": [
        "Key finding or achievement",
        "Another important result",
        "Impact or significance"
      ]
    }
  ]
}
```

### Example: Updating Your Bio

Open `data/about.json` and edit your information:

```json
{
  "name": "Your Name",
  "title": "Ph.D. Candidate in Biology (Proteomics)",
  "email": "your.email@university.edu",
  "bio": "Your biographical information here..."
}
```

### JSON Editing Tips

- Use double quotes (") for all strings
- Add commas between items, but not after the last item
- Validate your JSON at [jsonlint.com](https://jsonlint.com) if you encounter errors
- Check the browser console (F12) for error messages

For detailed documentation on each data file's structure, see `data/README.md`.

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

To run the portfolio website locally:

### Option 1: Direct File Opening
Simply open `index.html` in your web browser by double-clicking the file or dragging it into your browser window.

**Note:** Some features may not work correctly when opening files directly due to browser security restrictions (CORS). Use a local server for full functionality.

### Option 2: Python HTTP Server (Recommended)

If you have Python installed:

```bash
# Navigate to the myPortfolio directory
cd myPortfolio

# Python 3
python -m http.server 8000

# Python 2 (if needed)
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to `http://localhost:8000`

### Option 3: Node.js HTTP Server

If you have Node.js installed:

```bash
# Navigate to the myPortfolio directory
cd myPortfolio

# Using npx (no installation required)
npx http-server

# Or install globally first
npm install -g http-server
http-server
```

Then open your browser and navigate to `http://localhost:8080`

### Option 4: VS Code Live Server

If you use Visual Studio Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Making Changes

After starting a local server:
1. Edit JSON files in the `data/` directory
2. Save your changes
3. Refresh your browser to see updates
4. Check the browser console (F12) for any errors

## Deploying to GitHub Pages

GitHub Pages provides free hosting for static websites. Follow these steps to deploy your portfolio:

### Initial Setup

1. **Create a GitHub Repository**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., `portfolio` or `username.github.io`)
   - Choose "Public" visibility
   - Click "Create repository"

2. **Push Your Code to GitHub**
   
   If you haven't initialized Git yet:
   ```bash
   cd myPortfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

   If you already have a Git repository:
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" (top navigation bar)
   - Scroll down and click on "Pages" in the left sidebar
   - Under "Source", select the branch you want to deploy (usually `main`)
   - Select the folder: choose `/ (root)` if your `index.html` is in the repository root, or `/myPortfolio` if it's in a subdirectory
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will build and deploy your site (usually takes 1-3 minutes)
   - Once complete, you'll see a message: "Your site is published at https://yourusername.github.io/repository-name/"
   - Click the link to view your live portfolio

### Custom Domain (Optional)

To use a custom domain like `yourname.com`:

1. Purchase a domain from a domain registrar
2. In your repository, create a file named `CNAME` in the root directory
3. Add your custom domain to the file (e.g., `www.yourname.com`)
4. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses
5. In GitHub Pages settings, enter your custom domain and save

### Updating Your Published Site

After making changes to your portfolio:

1. **Edit Content**
   - Update JSON files in the `data/` directory
   - Test changes locally first

2. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

3. **Wait for Deployment**
   - GitHub Pages automatically rebuilds your site
   - Changes typically appear within 1-3 minutes
   - Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R) to see updates

### Troubleshooting GitHub Pages

**Site not loading?**
- Verify that `index.html` is in the correct directory (root or selected folder)
- Check that the branch and folder settings are correct in Pages settings
- Wait a few minutes for the initial deployment to complete

**Changes not appearing?**
- Clear your browser cache or hard refresh (Ctrl+Shift+R)
- Check the "Actions" tab in your repository to see deployment status
- Verify your changes were pushed successfully (`git log` to check commits)

**404 errors for assets?**
- Ensure all file paths are relative (e.g., `data/about.json`, not `/data/about.json`)
- Check that file names match exactly (case-sensitive on GitHub Pages)
- Verify all referenced files are committed and pushed to GitHub

**JSON not loading?**
- Check the browser console (F12) for error messages
- Validate your JSON syntax at [jsonlint.com](https://jsonlint.com)
- Ensure JSON files are in the `data/` directory and properly committed

### Important Notes for GitHub Pages

- All files must be committed to your Git repository
- File paths are case-sensitive (unlike Windows)
- Changes may take 1-3 minutes to appear after pushing
- The site URL format is `https://username.github.io/repository-name/`
- For a user/organization site, name your repo `username.github.io` to get `https://username.github.io/`

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
