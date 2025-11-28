const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "archive",
    name: "Achievements", // changed from "Archive"
    icon: "trash.png",
    canOpen: true,
  },
  {
    id: "workexperience",
    name: "Experience",
    icon: "maps.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 29, 2025",
    title:
      "🧑‍💻 What Still Slows React Developers Down While Building Modern UIs?",
    image: "/images/blog1.png",
    link: "https://why-react-ui-still-feels-slow.hashnode.dev/what-still-slows-react-developers-down-while-building-modern-uis",
  },
  {
    id: 2,
    date: "Nov 29, 2025",
    title: "🚀 Why Micro-Frontends Are Becoming the Future of Scalable Web Apps (2025)",
    image: "/images/blog2.png",
    link: "https://frontend-microservices.hashnode.dev/why-micro-frontends-are-becoming-the-future-of-scalable-web-apps-2025",
  },
  {
    id: 3,
    date: "Nov 29, 2025",
    title: "🖥 Why React Server Components Are Changing Frontend Development in 2025",
    image: "/images/blog3.png",
    link: "https://react-server.hashnode.dev/why-react-server-components-are-changing-frontend-development-in-2025",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js","Python", "Django","Java", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL" ],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker","AWS","Jenkins","SonarQube"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/yashuyouwaraj",
  },
  {
    id: 2,
    text: "GeeksForGeeks",
    icon: "/icons/GeeksForGeeks.svg",
    bg: "#4bcb63",
    link: "https://www.geeksforgeeks.org/profile/amanyasu?from=explore&tab=activity",
  },
  {
    id: 3,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#ff866b",
    link: "https://leetcode.com/u/yashuyouwaraj/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/yashu-youwaraj/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  achievementpdf: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
  workexperience: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, maximizeData: null, positionX: 0, positionY: 0, width: 0, height: 0 },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

const achievementsByCategory = {
  certifications: [
    {
      id: 1,
      name: "Machine Learning",
      file: "sample1.pdf",
      dateEarned: "Nov 24, 2022",
      icon: "📜",
    },
    {
      id: 2,
      name: "Databases and SQL for Data Science with Python",
      file: "sample2.pdf",
      dateEarned: "Nov 28, 2022",
      icon: "📜",
    },
    {
      id: 3,
      name: "Python Programming:A Concise Introduction",
      file: "sample3.pdf",
      dateEarned: "Mar 19, 2022",
      icon: "📜",
    },
  ],
  publications: [
    {
      id: 4,
      name: "Smart Mining System with Crystal Classification of Ores and Industrial Management",
      file: "sample1.pdf",
      dateEarned: "Apr 4, 2024",
      icon: "📄",
    },
  ],
  internships: [
    {
      id: 5,
      name: "Verzeo Digital Marketing Internship",
      file: "sample1.pdf",
      dateEarned: "Aug 01, 2022 - Sep 09, 2022",
      icon: "🎓",
    },
    {
      id: 6,
      name: "Verzeo Machine Learning with Python Internship",
      file: "sample2.pdf",
      dateEarned: "Aug 01, 2022 - Sep 09, 2022",
      icon: "🎓",
    },
    {
      id: 7,
      name: "Personifwy Data Science with Python Internship",
      file: "sample3.pdf",
      dateEarned: "Aug 01, 2023 - Sep 30, 2023",
      icon: "🎓",
    },
  ],
};

export { achievementsByCategory };

const workExperiences = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    designation: "Systems Engineer",
    duration: "April 2025 - Present",
    role: "Java Developer contributing to the design and development of a modern, secure, and scalable banking system",
    tech: ["Java", "Spring Boot", "Microservices", "Git", "GitHub", "AWS","SonarQube", "Jenkins","Bitbucket","COBOL"],
  },
  // {
  //   id: 2,
  //   company: "Digital Innovations Ltd.",
  //   designation: "Full Stack Developer",
  //   duration: "Jan 2022 - May 2023",
  //   role: "Developed end-to-end web applications, implemented real-time features, and managed database optimization",
  //   tech: ["React", "Express.js", "MongoDB", "Next.js", "TailwindCSS", "AWS"],
  // },
  // {
  //   id: 3,
  //   company: "StartUp Hub",
  //   designation: "Junior Web Developer",
  //   duration: "Aug 2021 - Dec 2021",
  //   role: "Built responsive UI components, fixed bugs, and collaborated with design team on UX improvements",
  //   tech: ["React", "JavaScript", "CSS", "Git", "REST APIs", "Figma"],
  // },
];

export { workExperiences };