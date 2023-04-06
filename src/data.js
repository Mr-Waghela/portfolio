export const bannerData = {
    typeWriterText: ["HTML", "Css", "SCSS", "Tailwind", "Javascript", "Vue.js", "React.js", 'Next.js', "Wordpress", "PHP"],
    authorName: 'Chirag Waghela',
    authorDesignation: 'Frontend Developer.',
    socialIcon : [
        {
            url: 'https://www.linkedin.com/in/chirag-waghela/',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>',
        },
        {
            url: 'https://www.instagram.com/mr.waghela75/',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>',
        },
        {
            url: '/assets/chirag-waghela-resume.pdf',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>',
        },
    ]
}

export const about = {
    title: 'Know About me',
    intoText: `Hi! I'm Chirag &#128075;&#127996; &#128526;,`,
    description:[
        `Hi There! I'm a 28-year-old Front End Engineer from Mumbai, with over four years of kickass experience under my belt (and counting, of course!)💓.`,
        `I like to think of myself as a coding ninja who loves nothing more than cracking tough problems. When I'm not crushing it at work, I'm all about learning new technology and helping others grow as developers - I'm a natural born mentor, you see.🧭 `,
        `And when I'm off the clock, you can catch me pumping iron at the gym, chilling at the beach, or cruising around Mumbai on my sweet ride.🏋️‍♂️🏖 &#128692;&#127996;`
    ],
    techIcon:[
        '</>',
        '{ }',
        'Vue.js',
        'Wordpress'
    ]
}

export const experience = {
    title: 'My Experience',
    timeline:[
        {
            period: 'January 2019 - Present',
            jobTitle: 'UI Developer',
            companyName: 'Media.net',
            workDescription: 'In my role as a UI developer, I have collaborated closely with business developers to manage daily tasks and ensure project delivery. I have also provided mentorship and coaching to junior developers. One of my key responsibilities has been the development of multiple mobile-responsive websites using the Wordpress platform. Additionally, I have worked with high-value clients to implement new features and meet their requirements on a weekly basis, utilizing technologies such as Vue.js, SCSS, Tailwind, and Blade within the Wordpress CMS.'
        },
        {
            period: 'October 2018 - December 2018',
            jobTitle: 'Frontend Developer',
            companyName: 'Nevon Solutions',
            workDescription: 'Throughout my experience, I have successfully completed numerous projects that involved using HTML/CSS templates integrated with ASP.net.'
        },

    ]
}

export const projects = {
    title: 'My Projects',
    project : [
        {
            url: 'https://mr-waghela.github.io//PokeSearch/',
            img: 'assets/img/projects/pokedex.png',
            name: 'PokeSearch',
            desc: 'Search your favourite Pokemon and learn more about them.',
            tech: 'HTML / CSS / Vanilla JS'
        },
        {
            url: 'https://mr-waghela.github.io/breakout/',
            img: 'assets/img/projects/breakout.png',
            name: 'Breakout game',
            desc: 'ClassNameic Nostalgic desktop game ',
            tech: 'HTML / CSS / Vanilla JS'
        },
        {
            url: 'https://mr-waghela.github.io/dynamic-chart/',
            img: 'assets/img/projects/dynamic-chart.png',
            name: 'Real time graph',
            desc: 'Live Stock price change of IBM share using API',
            tech: 'HTML / CSS / Chart.js'
        },
        {
            url: 'https://mr-waghela.github.io/Web-quiz/',
            img: 'assets/img/projects/web-quiz.png',
            name: 'Web Quiz',
            desc: 'Simple Web Quiz using VUE@3 cdn',
            tech: 'HTML / CSS / Vue.js'
        },
        {
            url: 'https://ecommerce-react-mr-waghela.vercel.app/',
            img: 'assets/img/projects/ECommerce-react.png',
            name: 'React Commerce',
            desc: 'Static React Ecommerce Website',
            tech: 'React.js / Styled component / Router'
        },
    ]
}