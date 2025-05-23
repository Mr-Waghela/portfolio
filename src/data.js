const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const calculateExperience = (startDate) => {
  const today = new Date();
  const start = new Date(startDate);
  let experience = today.getFullYear() - start.getFullYear();
  const monthDiff = today.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < start.getDate())) {
    experience--;
  }
  return experience;
};


export const bannerData = {
  typeWriterText: [
    "HTML",
    "Css",
    "SCSS",
    "Tailwind",
    "Javascript",
    "Vue 3",
    "React.js",
    "Next.js",
    "Wordpress",
    "PHP",
  ],
  authorName: "Chirag Waghela",
  authorDesignation: "Frontend Developer.",
  socialIcon: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/chirag-waghela/",
      icon: '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg>',
    },
    {
      name: "Github",
      url: "https://github.com/Mr-Waghela",
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z"/></svg>',
    },
    {
      name: "Resume",
      url: "/assets/chirag-waghela-resume.pdf",
      icon: '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19.355,10.036C18.674,6.595,15.641,4,12,4C9.108,4,6.603,5.639,5.352,8.036C2.343,8.36,0,10.906,0,14c0,3.314,2.686,6,6,6 h13c2.761,0,5-2.239,5-5C24,12.36,21.948,10.221,19.355,10.036z M12,18l-5-5h3V9h4v4h3L12,18z"/></svg>',
    },
  ],
};

export const about = {
  title: "Know About me",
  introText: `Hi! I'm Chirag &#128075;&#127996; &#128526;,`,
  description: [
    `Hi There! I'm a ${calculateAge("1994-05-07")}-year-old Front End Engineer from Mumbai, with over ${calculateExperience("2018-10-02")} years of kickass experience under my belt (and counting, of course!)💓.`,
    `I like to think of myself as a coding ninja who loves nothing more than cracking tough problems. When I'm not crushing it at work, I'm all about learning new technology and helping others grow as developers - I'm a natural born mentor, you see.🧭 `,
    `And when I'm off the clock, you can catch me pumping iron at the gym, chilling at the beach, or cruising around Mumbai on my sweet ride.🏋️‍♂️🏖 &#128692;&#127996;`,
  ],
  techIcon: ["</>", "{ }", "Vue 3", "Wordpress"],
};

export const experience = {
  title: "My Experience",
  timeline: [
    {
      period: "May 2024 - Present",
      jobTitle: "Senior Application Developer",
      companyName: "IBM",
      workDescription:
        "Currently working at IBM on a project for Mahindra and Mahindra Finance to develop a customer-centric finance application. The app enables users to access various financial services (such as loans, investments, etc.) and apply for specific features. It includes user-specific authentication and integrates payment gateways like Camspay and PayU for seamless transactions. My role involves overseeing the integration of these features while ensuring security and scalability of the platform. In my current position as a Senior Application Developer, my responsibilities encompass a diverse range of tasks. These include active participation in client-side project, providing guidance and mentorship to junior team members, conducting thorough code reviews, and actively contributing to coding tasks. Moreover, I am heavily involved in the development of Finance Web App, utilizing technologies such as React 18, Redux, Redux Saga, Sass, Material UI etc.",
    },
    {
      period: "September 2023 - May 2024",
      jobTitle: "Sr. SDE",
      companyName: "Wohlig Transformation Pvt Ltd",
      workDescription:
        "In my current position as a Senior Software Development Engineer (Sr. SDE), my responsibilities encompass a diverse range of tasks. These include active participation in various client-side projects, providing guidance and mentorship to junior team members, conducting thorough code reviews, and actively contributing to coding tasks. Moreover, I am heavily involved in the development of internal dashboards, utilizing technologies such as Vue 3 and Bootstrap. Additionally, I handle the integration of APIs to ensure seamless functionality within our projects.",
    },
    {
      period: "January 2019 - September 2023",
      jobTitle: "UI Developer",
      companyName: "Media.net",
      workDescription:
        "In my role as a UI developer, I have collaborated closely with business developers to manage daily tasks and ensure project delivery. I have also provided mentorship and coaching to junior developers. One of my key responsibilities has been the development of multiple mobile-responsive websites using the Wordpress platform. Additionally, I have worked with high-value clients to implement new features and meet their requirements on a weekly basis, utilizing technologies such as Vue.js, SCSS, Tailwind, and Blade within the Wordpress CMS.",
    },
    {
      period: "October 2018 - December 2018",
      jobTitle: "Frontend Developer",
      companyName: "Nevon Solutions",
      workDescription:
        "Throughout my experience, I have successfully completed numerous projects that involved using HTML/CSS templates integrated with ASP.net.",
    },
  ],
};

export const projects = {
  title: "My Projects",
  project: [
    {
      url: "https://mr-waghela.github.io//PokeSearch/",
      img: "assets/img/projects/pokedex.png",
      name: "PokeSearch",
      desc: "Search your favourite Pokemon and learn more about them.",
      tech: "HTML / CSS / Vanilla JS",
    },
    {
      url: "https://mr-waghela.github.io/breakout/",
      img: "assets/img/projects/breakout.png",
      name: "Breakout game",
      desc: "ClassNameic Nostalgic desktop game ",
      tech: "HTML / CSS / Vanilla JS",
    },
    {
      url: "https://mr-waghela.github.io/dynamic-chart/",
      img: "assets/img/projects/dynamic-chart.png",
      name: "Real time graph",
      desc: "Live Stock price change of IBM share using API",
      tech: "HTML / CSS / Chart.js",
    },
    {
      url: "https://mr-waghela.github.io/Web-quiz/",
      img: "assets/img/projects/web-quiz.png",
      name: "Web Quiz",
      desc: "Simple Web Quiz using VUE@3 cdn",
      tech: "HTML / CSS / Vue.js",
    },
    {
      url: "https://short.chirag-waghela.in/",
      img: "assets/img/projects/url-shortner.png",
      name: "Url Shortner",
      desc: "Users can input long URLs and get shortened versions.",
      tech: "Frontend:React, Vite, SCSS | Backend: Firebase (Firestore for database)",
    },
    // {
    //   url: "https://ecommerce-react-mr-waghela.vercel.app/",
    //   img: "assets/img/projects/ECommerce-react.png",
    //   name: "React Commerce",
    //   desc: "Static React Ecommerce Website",
    //   tech: "React.js / Styled component / Router",
    // },
  ],
};
