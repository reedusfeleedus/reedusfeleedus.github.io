export const FILES = {
  'education.txt': `
EDUCATION
=========

University of California, San Diego (UCSD), San Diego, USA
Study Abroad Programme, Computer Science
- September 2025 — June 2026

King's College London, London, UK
Bachelor of Science, Computer Science (BSc Hons)
- On track for a First Class
- Expected Graduation: June 2027

Global Public School, Kochi, India
A Levels (April 2022)
- Computer Science (A*)
- Mathematics (A*)
- Physics (A*)
- Chemistry (A*)`,

  'experience.txt': `
EXPERIENCE
==========

HashLynx: Syndicated Loan Settlement Platform (Mar 2025 – Sep 2025)
Software Engineer Intern, London, UK
- Accelerated blockchain loan settlement testing cycles by 80%+ by designing Playwright automation frameworks
- Increased release velocity by integrating test coverage into CI/CD pipelines, reducing deployment friction
- Improved platform reliability by surfacing edge-case bugs early, enhancing UI/UX stability for loan trading execution

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

Customer Service Automation (AWS, LLMs) (Feb 2025) - London, UK
Tech Stack: AWS Lambda, Amazon API Gateway, Amazon Bedrock, AWS S3, Python, Django
- Reduced student query response times by 85% by integrating large language models into serverless AWS Lambda system
- Cut manual triage time 70% by deploying Amazon Bedrock to auto-classify tickets with 92% accuracy
- Engineered prompt templates and few-shot examples for Bedrock to achieve high classification accuracy
- Enabled data-driven improvements through analytics dashboard tracking response speed and satisfaction

Automated File Naming System (GPT-4 Vision, macOS app) (Dec 2023) - London, UK
Tech Stack: CustomTkinter, Python, GPT-4 API, macOS SDK
- Cut file management overhead by 95% in production testing (500+ files) with MacOS app automating file naming across 10+ formats
- Improved content discoverability by processing visual elements through GPT-4 Vision API, generating filenames with 96% relevance
- Reduced search time for desktop files from minutes to seconds, streamlining workflows for large datasets

Code Tutoring Platform (Full Stack) (Nov 2024) - London, UK
Tech Stack: Django, Python
- Developed Django-based tutoring platform with role-based dashboards and real-time ticket-style communication
- Built automated scheduling system with conflict resolution that reduced booking steps by 70%
- Implemented secure authentication and personalized dashboards, maintaining smooth operation with no reported breaches

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
Location: San Diego, CA, USA`,

  'resume.pdf': 'Resume content will be handled separately as a PDF file'
};

// Keep the AVAILABLE_FILES array for file validation
export const AVAILABLE_FILES = Object.keys(FILES);