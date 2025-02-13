export const FILES = {
  'education.txt': `
EDUCATION
=========

King's College London, London, UK
Bachelor of Science, Computer Science (BSc Hons)
- On track for a First Class
- Expected Graduation: June 2026

Global Public School, Kochi, India
A Levels (April 2022)
- Computer Science (A*)
- Mathematics (A*)
- Physics (A*)
- Chemistry (A*)`,

  'experience.txt': `
EXPERIENCE
==========

KCL TECH (Nov 2024) - Java Co-lead, London, UK
- Led organization of 3 hackathons with 150+ participants
- Co-designed Java curriculum, mentoring 40+ students through weekly hands-on programming sessions
- Achieved 85% retention rate in programming sessions

iBus Networks (Jun 2023) - Frontend Developer Intern, Bangalore, India
- Developed responsive frontend features using Django
- Reduced page load time by 30%
- Improved desktop user experience for 10,000+ monthly visitors`,

  'projects.txt': `
PROJECTS
========

LabelifyAI (Dec 2023) - London, UK
Tech Stack: Swift, Python, GPT-4 API, macOS SDK, Git
- Engineered MacOS application for automated file naming using GPT-4 Vision API
- Implemented smart folder categorization system
- Achieved 95% reduction in file management overhead

Okapi Tutoring Platform (Nov 2024) - London, UK
Tech Stack: Django, Python
- Built full-stack tutoring platform with ticket-based communication
- Engineered automated scheduling system
- Implemented secure authentication with 95% user satisfaction

Cell Simulator (Mar 2024) - London, UK
Tech Stack: Java, JavaFX, JUnit, Git
- Created high-performance cell simulation engine
- Implemented real-time analytics system
- Developed intuitive JavaFX interface`,

  'skills.txt': `
TECHNICAL SKILLS
===============

Programming Languages:
- Python, Java, C++, Scala
- HTML, CSS, JavaScript
- SQL, Assembly, Arduino

Frameworks & Tools:
- Django, JavaFX, Swift UI
- React, Node.JS
- Firebase, Bootstrap`,

  'extracurriculars.txt': `
EXTRACURRICULARS
===============

First Place - Web Development Hackathon (Nov 2023) - London, UK
Tech Stack: React, Node.js, Express, MongoDB, HTML/CSS
- Led frontend development for survey submission system
- Delivered complex project within 5-day timeline
- Secured first place among 15+ teams
- Recognized for superior UX design`,

  'contact.txt': `
CONTACT INFORMATION
=================

Email: pranav.subash.mail@gmail.com
Phone: +44 7721992381
LinkedIn: linkedin.com/in/pranavsubash/
GitHub: github.com/reedusfeleedus
Location: London, UK`,

  'resume.pdf': 'Resume content will be handled separately as a PDF file'
};

// Keep the AVAILABLE_FILES array for file validation
export const AVAILABLE_FILES = Object.keys(FILES);