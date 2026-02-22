# Portfolio Data Files

This directory contains JSON files that control the content displayed on your portfolio website. You can easily update your portfolio by editing these files without touching any HTML or JavaScript code.

## How to Edit Your Portfolio

Simply open any JSON file in a text editor and modify the content. The changes will automatically appear on your website when you refresh the page.

## File Descriptions

### about.json
Contains your personal information and bio.

**Fields:**
- `name`: Your full name
- `title`: Your professional title or role
- `email`: Your primary email address
- `alternateEmail`: Your secondary email address
- `profileImage`: Path to your profile photo (relative to the portfolio root)
- `bio`: A paragraph describing your background and interests

### research.json
Contains your research projects and accomplishments.

**Structure:**
- `projects`: Array of research projects
  - `title`: Project name
  - `description`: Detailed description of the project
  - `highlights`: Array of key achievements or bullet points

**To add a new project:** Copy an existing project object and modify the fields.

### skills.json
Contains your technical and professional skills organized by category.

**Structure:**
- `categories`: Array of skill categories
  - `name`: Category name (e.g., "Programming", "Laboratory Skills")
  - `skills`: Array of individual skills within that category

**To add a new skill category:** Copy an existing category object and modify it.

### experience.json
Contains your work experience and positions.

**Structure:**
- `positions`: Array of work experiences
  - `title`: Job title
  - `company`: Organization name
  - `location`: City and state/country
  - `startDate`: Start date (e.g., "Aug 2022")
  - `endDate`: End date (use "Present" for current positions)
  - `description`: Description of your responsibilities and achievements

**To add a new position:** Copy an existing position object and modify the fields.

### hobbies.json
Contains your interests and hobbies.

**Structure:**
- `hobbies`: Array of hobby items
  - `icon`: Emoji or icon representing the hobby
  - `name`: Hobby name
  - `description`: Description of the hobby or activity

**To add a new hobby:** Copy an existing hobby object and modify it.

### awards.json
Contains your honors, awards, and recognitions.

**Structure:**
- `awards`: Array of award items
  - `title`: Award or honor title
  - `organization`: Organization or institution that granted the award
  - `year`: Year or date range when the award was received
  - `description`: Brief description of the award and its significance

**To add a new award:** Copy an existing award object and modify the fields.

## Tips for Editing JSON Files

1. **Maintain proper JSON syntax:**
   - Use double quotes (") for all strings, not single quotes (')
   - Add commas between items in arrays and objects
   - Don't add a comma after the last item in an array or object

2. **Test your changes:**
   - After editing, save the file
   - Refresh your browser to see the changes
   - If nothing appears, check the browser console (F12) for errors

3. **Validate your JSON:**
   - Use an online JSON validator (like jsonlint.com) if you're unsure about syntax
   - Most code editors will highlight JSON syntax errors

4. **Backup your data:**
   - Keep a copy of your JSON files before making major changes
   - Use version control (Git) to track changes over time

## Example: Adding a New Research Project

Open `research.json` and add a new project to the `projects` array:

```json
{
  "projects": [
    {
      "title": "Existing Project",
      "description": "...",
      "highlights": ["..."]
    },
    {
      "title": "New Project Title",
      "description": "Description of your new research project",
      "highlights": [
        "First highlight",
        "Second highlight",
        "Third highlight"
      ]
    }
  ]
}
```

Remember to add a comma after the previous project object!

## Need Help?

If you encounter any issues:
1. Check that your JSON syntax is correct
2. Look for error messages in the browser console (press F12)
3. Verify that all file paths are correct
4. Make sure you saved the file after editing

Happy editing! 🎉
