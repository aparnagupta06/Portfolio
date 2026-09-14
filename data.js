const data = {
  personal: {
    name: "Aparna Gupta",
    nameInDevanagari: "अपर्णा गुप्त",
    tagline: "CS-AI Engineer",
    profileImage: "assets/profile.webp",
    location: "Jaipur, India",
    about: `I’m a CS & AI student at Banasthali Vidyapith who enjoys understanding what happens behind the screen. I’m drawn to the core of Computer Science—logic, problem-solving, DSA, and the ideas that make technology work — and I’ve recently started exploring AI.

I don’t want to be defined simply as a coder. I want to become a Computer Science Engineer who can understand systems, solve problems, build meaningful things, and keep learning along the way.

<br/><br/>

And then there’s the other side of me — music, dance, art, and sport. I’m a graduate in Vocal Music and Kathak, have completed my second year in Fine Arts, and love expressing myself creatively. I’ve also been shortlisted for the President’s Award in Bharat Scouts & Guides and enjoy playing badminton.

<br/><br/>

For me, engineering and art aren’t opposites—they’re two different ways of understanding and creating.`,

    contact: {
      linkedin: "https://www.linkedin.com/in/aparnagupta06/",
      github: "https://github.com/aparnagupta06",
      email: "aparna060606@gmail.com",
    },
  },
  projects: [
    {
      title: "Deep Packet Inspection (DPI) Engine",
      details:
        "Built a high-performance Deep Packet Inspection (DPI) engine capable of parsing Ethernet, IPv4, TCP, and TLS packets from PCAP files for network traffic analysis. Implemented TLS Server Name Indication (SNI) extraction to identify HTTPS applications and enforce rule-based blocking for IP addresses, domains, and application traffic.",
      points: [
        "Parsed Ethernet, IPv4, TCP, and TLS packets from PCAP files for network traffic analysis.",
        "Extracted TLS SNI values to detect HTTPS applications in real traffic samples.",
        "Implemented rule-based blocking for IPs, domains, and application-level traffic.",
      ],
      link: "https://github.com/aparnagupta06/DPI_Project",
    },
    {
      title: "Portfolio",
      details: "Personal portfolio website built to showcase projects, skills, education, and contact information.",
      points: [
        "Designed and built a responsive portfolio website using HTML, CSS, and JavaScript.",
        "Showcased projects, skills, education, certifications, and contact information.",
        "Structured sections for projects, skills, certifications, and resume, enabling easy navigation and professional presentation.",
      ],
      link: "https://aparnagupta06.github.io/Portfolio/",
    },
  ],
  skills: {
    languages: {
      title: "Languages",
      list: [
        "C",
        "C++",
        "SQL",
      ],
    },
    web: {
      title: "Web Technologies",
      list: [
        "HTML",
        "CSS",
      ],
    },

    technical: {
      title: "Core Technical & Systems",
      list: [
        "Database Management System (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Data Structures",
        "Algorithms",
        "Object Oriented Programming (OOP)",
      ],
    },
    professional: {
      title: "Leadership & Professional",
      list: [
        "Team Leadership",
        "Project Management",
        "Event Management",
      ],
    },
    creative: {
      title: "Creative & Co-curricular",
      list: [
        "Hindustani Classical Singer",
        "Kathak Dancer",
        "Scout & Guide (President Award)",
      ],
    },
  },
  education: [
    {
      degree: "Bachelor of Technology, Computer Science & Engineering - AI",
      institution: "Banasthali Vidyapith",
      duration: "July 2024 - June 2028",
      details: "CGPA: 9.26. Minor: Artificial Intelligence",
    },
    {
      degree: "AISSCE - Class 12 (PCM with Computer Science)",
      institution: "Kendriya Vidyalaya",
      duration: "Apr 2022 - Mar 2023",
      details: "Percentage: 87.2%",
    },
  ],
  certifications: [
    {
      name: "Master C++ Programming",
      issuer: "Udemy (Coding Minutes)",
      date: "2025",
      link: "https://www.udemy.com/",
    },

  ],
  volunteering: [
    {
      role: "Event Management - Aapaji Fest",
      organization: "Banasthali Vidyapith",
      duration: "November 2025",
      description: "Volunteered at Aapaji Fest, contributing to the smooth execution and coordination of the event.",
    },
    {
      role: "President Award",
      organization: "The Bharat Scouts and Guides",
      duration: "April 2022", 
      description:
        "Recipient of President Award. Actively participated in social service and leadership camps.",
    },
  ],
};
