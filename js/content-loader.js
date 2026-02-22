// Content Loader - Dynamically loads portfolio content from JSON files

class PortfolioLoader {
    constructor() {
        this.dataPath = 'data/';
    }

    async loadJSON(filename) {
        try {
            const response = await fetch(`${this.dataPath}${filename}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            return null;
        }
    }

    async loadAbout() {
        const data = await this.loadJSON('about.json');
        if (!data) return;

        // Update name and title
        const nameElement = document.getElementById('profile-name');
        const titleElement = document.getElementById('profile-title');
        const bioElement = document.getElementById('profile-bio');
        const emailElement = document.getElementById('profile-email');
        const altEmailElement = document.getElementById('profile-alt-email');
        const profileImage = document.getElementById('profile-image');

        if (nameElement) nameElement.textContent = data.name;
        if (titleElement) titleElement.textContent = data.title;
        if (bioElement) bioElement.textContent = data.bio;
        if (emailElement) {
            emailElement.textContent = data.email;
            emailElement.href = `mailto:${data.email}`;
        }
        if (altEmailElement) {
            altEmailElement.textContent = data.alternateEmail;
            altEmailElement.href = `mailto:${data.alternateEmail}`;
        }
        if (profileImage) profileImage.src = data.profileImage;

        // Update page title
        document.title = `${data.name} - Portfolio`;
    }

    async loadResearch() {
        const data = await this.loadJSON('research.json');
        if (!data || !data.projects) return;

        const container = document.getElementById('research-projects');
        if (!container) return;

        container.innerHTML = '';

        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'research-project';

            const title = document.createElement('h3');
            title.textContent = project.title;
            projectDiv.appendChild(title);

            const description = document.createElement('p');
            description.textContent = project.description;
            projectDiv.appendChild(description);

            if (project.highlights && project.highlights.length > 0) {
                const highlightsTitle = document.createElement('h4');
                highlightsTitle.textContent = 'Key Highlights:';
                projectDiv.appendChild(highlightsTitle);

                const highlightsList = document.createElement('ul');
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    highlightsList.appendChild(li);
                });
                projectDiv.appendChild(highlightsList);
            }

            container.appendChild(projectDiv);
        });
    }

    async loadSkills() {
        const data = await this.loadJSON('skills.json');
        if (!data || !data.categories) return;

        const container = document.getElementById('skills-container');
        if (!container) return;

        container.innerHTML = '';

        data.categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';

            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category.name;
            categoryDiv.appendChild(categoryTitle);

            const skillsList = document.createElement('ul');
            category.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
            categoryDiv.appendChild(skillsList);

            container.appendChild(categoryDiv);
        });
    }

    async loadExperience() {
        const data = await this.loadJSON('experience.json');
        if (!data || !data.positions) return;

        const container = document.getElementById('experience-container');
        if (!container) return;

        container.innerHTML = '';

        data.positions.forEach(position => {
            const positionDiv = document.createElement('div');
            positionDiv.className = 'experience-item';

            const header = document.createElement('div');
            header.className = 'experience-header';

            const title = document.createElement('h3');
            title.textContent = position.title;
            header.appendChild(title);

            const company = document.createElement('div');
            company.className = 'company';
            company.textContent = position.company;
            header.appendChild(company);

            const details = document.createElement('div');
            details.className = 'experience-details';

            const location = document.createElement('span');
            location.className = 'location';
            location.textContent = position.location;
            details.appendChild(location);

            const dates = document.createElement('span');
            dates.className = 'dates';
            dates.textContent = `${position.startDate} - ${position.endDate}`;
            details.appendChild(dates);

            header.appendChild(details);
            positionDiv.appendChild(header);

            const description = document.createElement('p');
            description.textContent = position.description;
            positionDiv.appendChild(description);

            container.appendChild(positionDiv);
        });
    }

    async loadHobbies() {
        const data = await this.loadJSON('hobbies.json');
        if (!data || !data.hobbies) return;

        const container = document.getElementById('hobbies-container');
        if (!container) return;

        container.innerHTML = '';

        data.hobbies.forEach(hobby => {
            const hobbyDiv = document.createElement('div');
            hobbyDiv.className = 'hobby-item';

            const icon = document.createElement('div');
            icon.className = 'hobby-icon';
            icon.textContent = hobby.icon;
            hobbyDiv.appendChild(icon);

            const content = document.createElement('div');
            content.className = 'hobby-content';

            const name = document.createElement('h3');
            name.textContent = hobby.name;
            content.appendChild(name);

            const description = document.createElement('p');
            description.textContent = hobby.description;
            content.appendChild(description);

            hobbyDiv.appendChild(content);
            container.appendChild(hobbyDiv);
        });
    }

    async loadAwards() {
        const data = await this.loadJSON('awards.json');
        if (!data || !data.awards) return;

        const container = document.getElementById('awards-container');
        if (!container) return;

        container.innerHTML = '';

        data.awards.forEach(award => {
            const awardDiv = document.createElement('div');
            awardDiv.className = 'award-item';
            awardDiv.setAttribute('data-animate', '');

            const title = document.createElement('h3');
            title.className = 'award-title';
            title.textContent = award.title;
            awardDiv.appendChild(title);

            const organization = document.createElement('div');
            organization.className = 'award-organization';
            organization.textContent = award.organization;
            awardDiv.appendChild(organization);

            const year = document.createElement('div');
            year.className = 'award-year';
            year.textContent = award.year;
            awardDiv.appendChild(year);

            const description = document.createElement('p');
            description.className = 'award-description';
            description.textContent = award.description;
            awardDiv.appendChild(description);

            container.appendChild(awardDiv);
        });
    }

    async loadAll() {
        await Promise.all([
            this.loadAbout(),
            this.loadResearch(),
            this.loadSkills(),
            this.loadExperience(),
            this.loadAwards(),
            this.loadHobbies()
        ]);
    }
}

// Initialize loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new PortfolioLoader();
    loader.loadAll();
});
