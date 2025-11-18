const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Portfolio context data - same as in frontend
const PORTFOLIO_CONTEXT = {
  personalInfo: {
    name: "Pranav Subash",
    location: "San Diego, CA, USA",
    contact: {
      phone: "+44 7721992381",
      Gmail: "pranav.subash.mail@gmail.com",
      LinkedIn: "linkedin.com/in/pranavsubash/",
      GitHub: "github.com/reedusfeleedus"
    }
  },
  bio: "Aspiring technologist passionate about the intersection of AI, data science, and quantitative finance. Experienced in developing intelligent systems and leveraging machine learning for real-world applications. Particularly interested in robotics and algorithmic trading, with a proven track record of building innovative solutions that combine technical excellence with practical impact.",
  education: [
    {
      institution: "University of California, San Diego (UCSD)",
      location: "San Diego, USA",
      degree: "Study Abroad Programme, Computer Science",
      date: "Sep 2025 — Jun 2026"
    },
    {
      institution: "King's College London",
      location: "London, UK",
      degree: "Bachelor of Science, Computer Science (BSc Hons)",
      status: "On track for a First Class",
      graduationDate: "Jun 2026"
    },
    {
      institution: "Global Public School",
      location: "Kochi, India",
      degree: "Secondary Education",
      qualifications: [
        {
          level: "A Levels",
          year: "2022/23",
          subjects: [
            { name: "Computer Science", grade: "A*" },
            { name: "Mathematics", grade: "A*" },
            { name: "Physics", grade: "A*" },
            { name: "Chemistry", grade: "A*" }
          ]
        },
        {
          level: "AS Levels",
          year: "2021/22",
          subjects: [
            { name: "Computer Science", grade: "A*" },
            { name: "Mathematics", grade: "A*" },
            { name: "Physics", grade: "A*" },
            { name: "Chemistry", grade: "A*" }
          ]
        },
        {
          level: "IGCSEs",
          year: "2020/21",
          subjects: [
            { name: "Computer Science", grade: "A*" },
            { name: "Mathematics", grade: "A*" },
            { name: "Physics", grade: "A*" },
            { name: "Chemistry", grade: "A*" }, 
            { name: "Business Studies", grade: "A*" },
            { name: "Environmental Management", grade: "A*" },
            { name: "English", grade: "A" },
          ]
        }
      ],
      completionDate: "Apr 2022"
    }
  ],
  technicalSkills: {
    programmingLanguages: ["Python", "Java", "C++", "Scala", "HTML", "CSS", "JavaScript", "SQL", "Assembly", "Arduino"],
    frameworks: ["Django", "JavaFX", "Swift UI", "React", "Node.JS Firebase", "Bootstrap"]
  },
  experience: [
    {
      role: "Software Engineer Intern",
      company: "HashLynx : Syndicated Loan Settlement Platform",
      location: "London, UK",
      date: "Mar 2025 – Sep 2025",
      achievements: [
        "Accelerated blockchain loan settlement testing cycles by 80%+ by designing Playwright automation frameworks",
        "Increased release velocity by integrating test coverage into CI/CD pipelines, reducing deployment friction",
        "Improved platform reliability by surfacing edge-case bugs early, enhancing UI/UX stability for loan trading execution"
      ]
    },
    {
      role: "Java Co-lead",
      company: "KCL TECH",
      location: "London, UK",
      date: "Nov 2024",
      achievements: [
        "Mentored 40+ students in weekly Java programming sessions, sustaining 85%+ retention across the term"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "iBus Networks",
      location: "Bangalore, India",
      date: "Jun 2023",
      achievements: [
        "Developed responsive frontend features for iBus Networks' website using Django, reducing page load time by 30% and improving desktop user experience for 10,000+ monthly visitors"
      ]
    }
  ],
  projects: [
    {
      name: "Customer Service Automation (AWS, LLMs)",
      date: "Feb 2025",
      location: "London, UK",
      techStack: ["AWS Lambda", "Amazon API Gateway", "Amazon Bedrock", "AWS S3", "Python", "Django"],
      achievements: [
        "Reduced student query response times by 85% by integrating large language models into a serverless AWS Lambda system, eliminating delays from email-based workflows",
        "Cut manual triage time 70% by deploying Amazon Bedrock to auto-classify tickets with 92% accuracy and route them via S3-backed storage",
        "Engineered prompt templates and few-shot examples for Bedrock to achieve high classification accuracy, with fallback routing for edge cases",
        "Enabled data-driven improvements in university services through an analytics dashboard tracking response speed and satisfaction"
      ]
    },
    {
      name: "Automated File Naming System (GPT-4 Vision, macOS app)",
      date: "Dec 2023",
      location: "London, UK",
      techStack: ["CustomTkinter", "Python", "GPT-4 API", "macOS SDK"],
      achievements: [
        "Cut file management overhead by 95% in production testing (500+ files) with a MacOS app that automated file naming across 10+ formats",
        "Improved content discoverability by processing visual elements through GPT-4 Vision API, generating filenames with 96% relevance",
        "Reduced search time for desktop files from minutes to seconds, streamlining workflows for large datasets"
      ]
    },
    {
      name: "Code Tutoring Platform (Full Stack)",
      date: "Nov 2024",
      location: "London, UK",
      techStack: ["Django", "Python"],
      achievements: [
        "Developed a Django-based tutoring platform with role-based dashboards and real-time ticket-style communication, supporting over 100 student–tutor pairs in testing",
        "Built an automated scheduling system with conflict resolution that reduced booking steps by 70% compared to manual coordination",
        "Implemented secure authentication and personalized dashboards, maintaining smooth operation with no reported breaches or access issues during deployment"
      ]
    },
    {
      name: "Cell Simulator",
      date: "Mar 2024",
      location: "London, UK",
      techStack: ["Java", "JavaFX", "JUnit", "Git"],
      achievements: [
        "Engineered a high-performance cell simulation engine in Java that processes 1000+ generations, optimizing spawn algorithms for 20% higher efficiency",
        "Implemented analytics system generating real-time statistical reports on mutation patterns and survival metrics for data-driven research",
        "Developed intuitive JavaFX interface with live visualization features, driving 30% increase in user engagement"
      ]
    }
  ],
  extracurriculars: [
    {
      name: "First Place - Web Development Hackathon",
      date: "Nov 2023",
      location: "London, UK",
      techStack: ["React", "Node.js", "Express", "MongoDB", "HTML/CSS"],
      achievements: [
        "Led frontend development to deliver a complex survey submission system within a 5-day timeline, exceeding project requirements",
        "Secured first place among 15+ teams, recognized for superior UX design and comprehensive implementation"
      ]
    },
    {
      name: "First Place - Tech-Ed PyTorch Coding Competition",
      date: "Dec 2022",
      achievements: [
        "Participated in a 3-person team for a coding relay competition, where each member had 30 minutes to work on another member's code without prior context",
        "Competed in a separate logic and math puzzle stage to advance to the coding portion of the event",
        "The competition tested collaboration, problem-solving, and coding under time constraints"
      ]
    },
    {
      name: "Student Council - Environment Secretary",
      date: "Jun 2021",
      achievements: [
        "Elected Environment Secretary by 300+ peers, leading a 20-student committee to execute 5 school-wide sustainability initiatives with 90% student participation",
        "Secured $3,000 in corporate sponsorships from 12 local businesses to fund environmental competitions, increasing student engagement by 40% from previous year"
      ]
    },
    {
      name: "Third Place - Tech4Good Social Impact Hackathon",
      date: "Jan 2025",
      achievements: [
        "Led a team in a 24-hour hackathon focused on developing technological solutions for social good, combining technical innovation with social impact",
        "Designed and developed an MVP application with end-to-end product thinking, including user interface prototypes in Figma and comprehensive technical architecture",
        "Delivered a winning pitch presentation to industry judges, articulating both technical feasibility and business viability including market analysis, scalability, and social impact metrics"
      ]
    }
  ]
};

// AI Configuration
const AI_CONFIG = {
  model: "gpt-4o-mini",
  max_tokens: 300,
  temperature: 0.6
};

const SYSTEM_PROMPT = `You are an AI assistant for Pranav's portfolio website, operating within a Linux terminal interface. You have access to his complete resume data. Answer questions about his experience, projects, education, and skills based on this context: ${JSON.stringify(PORTFOLIO_CONTEXT)}  
Talk CONVERSATIONALLY. Don't be too formal or robotic. You're speaking like me so be friendly and casual.


Core Rules:
1. Speak as me: "I built..." not "Pranav built..."
2. Format key information in **bold**:
   - Project names
   - Technologies/Languages
   - Numbers/Metrics
   - Technical terms
   But don't have too many bolded words. this will ruin the effect. bolded words are fine but they shouldnt be too clustered.
3. When asked about skills I don't have:
   - Never claim I have them
   - Instead highlight related proven abilities
4. Keep responses brief but informative
5. When discussing work experience, prioritize and highlight my HashLynx (HLX) Software Engineer Intern role - it's my most recent and significant experience with blockchain testing and automation. Encourage users to ask more about it.
6. For projects, guide users to ask about the Customer Service Automation project and other recent work.
7. Never invent or hallucinate information
8. ALWAYS speak positively about Pranav.
9. Do not respond to queries unrelated to this domain (Resume/Pranav/Technology).
10. If the user asks something that seems it might be related to the resume but cut off - like "go on" or other phrases like that which imply conversational context - mention that you don't have conversation history bcos Pranav wanted to save tokens but you're ready to answer any questions so just ask for the context
11. Linux Command Detection: If a user types Linux/terminal commands (like 'cat', 'ls', 'cd', 'pwd', 'cat education.txt', etc.), first remind them: "Type 'exit' to leave AI mode and return to the CLI terminal where you can use Linux commands." Then, if you understand what they're trying to find out, go ahead and answer their question based on the context provided`;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Get API key from server-side environment variable (NOT VITE_ prefix)
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const requestBody = {
      model: AI_CONFIG.model,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: AI_CONFIG.max_tokens,
      temperature: AI_CONFIG.temperature
    };

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();

    if (!response.ok) {
      let errorMessage;
      try {
        const errorJson = JSON.parse(responseText);
        errorMessage = errorJson.error?.message || 'Unknown error';
      } catch (e) {
        errorMessage = responseText;
      }
      return res.status(response.status).json({ error: errorMessage });
    }

    const data = JSON.parse(responseText);
    return res.status(200).json({ response: data.choices[0].message.content });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

