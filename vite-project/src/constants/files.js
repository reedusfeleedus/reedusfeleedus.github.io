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
- Engineered MacOS application for automated file naming using GPT-4 Vision API, processing 10+ file formats with 98% accuracy
- Implemented smart folder categorization system, reducing manual organization time by 80%
- Achieved 95% reduction in file management overhead in production testing with 500+ files

Okapi Tutoring Platform (Nov 2024) - London, UK
Tech Stack: Django, Python
- Built full-stack tutoring platform with ticket-based communication system for 100+ student-tutor pairs
- Engineered automated scheduling system, reducing manual booking time by 70%
- Implemented secure authentication with 95% user satisfaction and zero data breaches

Cell Simulator (Mar 2024) - London, UK
Tech Stack: Java, JavaFX, JUnit, Git
- Created high-performance cell simulation engine processing 1000+ generations
- Implemented real-time analytics system for mutation patterns and survival metrics
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

First Place - Web Development Hackathon (Nov 2023)(London, UK)
- Led frontend development for survey submission system
- Delivered complex project within 5-day timeline
- Secured first place among 15+ teams
- Recognized for superior UX design

First Place - TechEd PyTorch Coding Competition (Dec 2022)(Kochi, India)
- Participated in 3-person team coding relay competition
- Advanced through logic and math puzzle stages
- Demonstrated collaboration and problem-solving under time constraints

Student Council - Environment Secretary (Jun 2021)(Kochi, India)
- Voted in by 300+ students after a campaigning and election process
- Led 20-student committee executing 5 school-wide sustainability initiatives
- Secured $3,000 in corporate sponsorships from 12 local businesses
- Increased student engagement by 40% from previous year

Third Place - Tech4Good Social Impact Hackathon (Jan 2025)(London, UK)
- Led team in 24-hour hackathon developing social impact solutions
- Designed MVP application with end-to-end product thinking
- Delivered winning pitch to industry judges`,

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