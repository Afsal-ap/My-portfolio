export const myProjects = [
  {
    id: 1,
    title: "World Today News Platform",
    description:
    "A full-fledged microservices-based news platform where users can read, like, and comment on news articles, channels can broadcast via live streaming, advertisers can run paid promotions, and admins manage the platform — all deployed on AWS EKS with CI/CD.",
    subDescription: [
      "Developed with React, Redux, Node.js, TypeScript, and MongoDB, following microservice architecture for scalability.",
      "Implemented JWT-based authentication, role-based access, and Twilio OTP verification for secure user flows",
      "Integrated live streaming via WebRTC and Socket.IO signaling, enabling real-time video broadcasts and communication.",
      "Employed Docker for containerization and Kubernetes (AWS EKS) for orchestrating microservices in production",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce platform",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Developed with Node.js, Express, MongoDB, and EJS, following MVC architecture for clean and scalable backend structure.",
      "Implemented OTP-based user authentication using sessions for secure and persistent logins.",
      "Integrated Razorpay for secure online payments and seamless checkout flow.",
      "Enabled dynamic product search, filtering, and a fully functional shopping cart with order placement and tracking",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Netflix React Clone",
    description:
      "A sleek and responsive Netflix clone built with React and Tailwind CSS, enabling users to browse, search, and interact with real-time movie and TV show data fetched from the IMDb API.",
    subDescription: [
      "Developed a dynamic Netflix-inspired web application using React, offering an intuitive and responsive user interface.",
      "Integrated the IMDb API to fetch and display detailed movie and TV show information in real-time.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Implemented features for users to view, and manage favorite content, enhancing user engagement and personalization.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "MERN Redux app",
    description:
      "A responsive and scalable full-stack MERN application powered by Redux Toolkit for seamless state management, offering a smooth user experience with persistent user sessions and intuitive routing.",
    subDescription: [
      "Built a feature-rich web application using React and Redux Toolkit for efficient and scalable state management.",
      "Implemented client-side routing for seamless navigation and improved user experience.",
      "Designed a fully responsive UI using modern tools and frameworks, ensuring compatibility across devices.",
      "Implemented persistent user sessions and authentication state using Redux Toolkit and local storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/afsalap1/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/afsal___ap/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
