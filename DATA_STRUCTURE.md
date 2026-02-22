# Data-Driven Portfolio Structure

## Overview
Your portfolio is now data-driven! All content is stored in JSON files that can be easily edited without touching HTML or JavaScript code.

## Directory Structure

```
myPortfolio/
├── data/                          # All portfolio content (JSON files)
│   ├── about.json                 # Personal information and bio
│   ├── research.json              # Research projects and highlights
│   ├── skills.json                # Skills organized by category
│   ├── experience.json            # Work experience timeline
│   ├── hobbies.json               # Hobbies and interests
│   └── README.md                  # Detailed editing instructions
├── js/
│   ├── content-loader.js          # Loads JSON data into HTML (NEW)
│   ├── navigation.js              # Navigation functionality
│   └── animations.js              # Scroll animations
├── css/
│   ├── styles.css                 # Main styles (updated with new classes)
│   ├── variables.css              # CSS variables
│   └── responsive.css             # Responsive design
├── index.html                     # Main HTML (updated with placeholders)
└── assets/                        # Images and icons
```

## How It Works

1. **JSON Files Store Content**: All text content, titles, descriptions, and data are stored in the `data/` folder as JSON files.

2. **JavaScript Loads Content**: The `content-loader.js` file automatically fetches the JSON files when the page loads and populates the HTML.

3. **HTML Has Placeholders**: The HTML file contains placeholder elements with specific IDs that the JavaScript fills with content.

4. **Easy Updates**: To update your portfolio, simply edit the JSON files - no HTML or JavaScript knowledge required!

## Quick Start Guide

### To Update Your Information:

1. **Personal Info**: Edit `data/about.json`
   - Change name, title, email, bio

2. **Research Projects**: Edit `data/research.json`
   - Add/remove projects
   - Update descriptions and highlights

3. **Skills**: Edit `data/skills.json`
   - Add new skill categories
   - Update existing skills

4. **Work Experience**: Edit `data/experience.json`
   - Add new positions
   - Update job descriptions

5. **Hobbies**: Edit `data/hobbies.json`
   - Add new hobbies
   - Change icons and descriptions

### Important Notes:

- Always maintain proper JSON syntax (use double quotes, commas between items)
- Save the file after editing
- Refresh your browser to see changes
- Check the browser console (F12) if something doesn't appear

## Features

✅ **Separation of Content and Code**: Content editors don't need to touch HTML/CSS/JS
✅ **Easy Maintenance**: Update content by editing simple JSON files
✅ **Scalable**: Add unlimited projects, skills, experiences, and hobbies
✅ **No Build Process**: Changes appear immediately after page refresh
✅ **Beginner Friendly**: Detailed README in the data folder with examples

## Technical Details

### Content Loader (`js/content-loader.js`)

The `PortfolioLoader` class handles all content loading:
- `loadAbout()`: Loads personal information
- `loadResearch()`: Loads research projects
- `loadSkills()`: Loads skills by category
- `loadExperience()`: Loads work experience timeline
- `loadHobbies()`: Loads hobbies and interests
- `loadAll()`: Loads all content when page loads

### HTML Placeholder IDs

The following IDs are used to populate content:
- `profile-name`, `profile-title`, `profile-bio`
- `profile-email`, `profile-alt-email`, `profile-image`
- `research-projects`
- `skills-container`
- `experience-container`
- `hobbies-container`

## Need Help?

Refer to `data/README.md` for detailed instructions on editing JSON files, including:
- JSON syntax rules
- How to add new items
- Example code snippets
- Troubleshooting tips

## Next Steps

1. Review the JSON files in the `data/` folder
2. Update them with your actual information
3. Add your profile photo to `assets/images/profile.jpg`
4. Test the website by opening `index.html` in a browser
5. Make sure all content loads correctly

Happy editing! 🎉
