const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Portfolio context data
const PORTFOLIO_CONTEXT = {
  personalInfo: {
    name: "Pranav Subash",
    location: "London, UK",
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
      role: "Java Co-lead",
      company: "KCL TECH",
      location: "London, UK",
      date: "Nov 2024",
      achievements: [
        "Led organization of 3 hackathons with 150+ participants and co-designed Java curriculum, mentoring 40+ students through weekly hands-on programming sessions with 85% retention rate"
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
      name: "LabelifyAI",
      date: "Dec 2023",
      location: "London, UK",
      techStack: ["Swift", "Python", "GPT-4 API", "macOS SDK", "Git"],
      achievements: [
        "Engineered a MacOS application leveraging GPT-4 Vision API to automate intelligent file naming through image content analysis, processing 10+ file formats with 98% accuracy",
        "Implemented smart folder categorization system that auto-sorts files into hierarchical structures, reducing manual organization time by 80%",
        "Achieved 95% reduction in file management overhead in production testing with 500+ files, decreasing naming time to 1 second per file"
      ]
    },
    {
      name: "Okapi Tutoring Platform",
      date: "Nov 2024",
      location: "London, UK",
      techStack: ["Django", "Python"],
      achievements: [
        "Architected a full-stack tutoring platform in Django, featuring real-time ticket-based communication system and role-based dashboards for 100+ student-tutor pairs",
        "Engineered automated scheduling system with conflict resolution, reducing manual booking time by 70% and increasing tutor utilization by 40%",
        "Implemented secure authentication and personalized dashboards, achieving 95% user satisfaction rate with zero data breaches"
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

const SYSTEM_PROMPT = `You are an AI assistant for Pranav's portfolio website. You have access to his complete resume data. Answer questions about his experience, projects, education, and skills based on this context: ${JSON.stringify(PORTFOLIO_CONTEXT)}  
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
5. Prioritize projects over work experience - when asked about work experience, mention them but then ask the user to ask about projects instead.
6. Never invent or hallucinate information
7. ALWAYS speak positively about Pranav.
8. Do not respond to queries unrelated to this domain (Resume/Pranav/Technology).
9. If the user asks something that seems it might be related to the resume but cut off - like "go on" or other phrases like that which imply conversational context - mention that you don't have conversation history bcos Pranav wanted to save tokens but you're ready to answer any questions so just ask for the context`;

// (Yes I know this bad, but I trust everyone looking here not to steal, and I didn't want to bother writing server side logic for such a simple app)
const getApiKey = () => {
  return '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';
};

export const generateAIResponse = async (prompt) => {
  try {
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
        'Authorization': `Bearer ${getApiKey()}`
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
      throw new Error(`API Error: ${errorMessage}`);
    }

    const data = JSON.parse(responseText);
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error.message);
    throw error;
  }
}; 
