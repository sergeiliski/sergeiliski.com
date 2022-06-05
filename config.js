module.exports = {
  siteTitle: 'Sergei Liski Developer', // <title>
  siteIcon: 'src/assets/favicon/android-chrome-192x192.png',
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/favicon/android-chrome-192x192.png',
  pathPrefix: `/`,
  firstName: 'Sergei',
  lastName: 'Liski',
  about_v2: `I am experienced in leveraging agile frameworks to provide a robust
  synopsis for high level overviews. Iterative approaches to corporate
  strategy foster collaborative thinking to further the overall value
  proposition.`,
  about: `Software Engineer with 5 years of experience and a passion towards anything new. I've worked for startups and giant companies but I doubt you are even reading at this point anymore. I wasn't sure if this summary was needed but just in case, I've also designed systems and database architectures from scratch, all the way to production.`,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/sergeiliski',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/sergeiliski/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/sergeiliski',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/sergeiliski',
    },
  ],
  experience: [
    {
      title: 'Lead Software Engineer',
      company: 'Oriola',
      description: `Lead developer in a team of three to design and implement the project ICTool to be used internally in handling of patients and medical cases.
      Implemented system to track user activity inside the system.
      I was involved in creating the mailing system for sending and receiving emails and to automate the creation of cases from emails.
      Created user verification using the electronic identification tool BankID.`,
      date: 'freelancer | 2018 - Present',
    }, {
      title: 'Software Engineer',
      company: 'Duunitori',
      description: `Implemented the process for sending around 50 000 emails daily using mandrill.
      Participated in projects to improve the mail system and improve the effectiveness to lower the ad costs.
      Problem solved multiple issues like reducing the size of emails and slow page loading times.
      Implemented things like tag system for search terms, reducing user error and thus providing better search results.`,
      date: 'freelancer | 2018 - Present',
    }, {
      title: 'Software Engineer',
      company: 'Sensus',
      description: `Designed and implemented a system that allows the client to plan schedules, create and sign time reports and send them to Swedish Social Insurance Agency.
      Created a secure authentication using the electronic identification solution BankID.
      Generate pdf's from real-time data.`,
      date: 'freelancer | 2016 - present',
    }, {
      title: 'Software Developer',
      company: 'Leads2Travel',
      description: `Developed data scrapers with Python that fetched and periodically updated data from various websites like supersaver, skyscanner, etc.`,
      date: 'freelancer | 2017 - 2017',
    }, {
      title: 'Software Engineer',
      company: 'info.nl',
      description: `Worked in a team connectable that was charge of building experimental concepts and developing prototypes for new ideas.
      Re-engineered existing database access layer to use ORM models.
      Created REST API's for the project <a href="https://www.growficient.com/">Growficient</a>, one of companies more successful projects.
      Wrote libraries for MQTT protocol service using Python and Scala, to be used in house.`,
      date: '2016 - 2017',
    }, {
      title: 'Software Developer',
      company: 'Karttakeskus',
      description: `Consultant on a project for <a href="https://www.mavi.fi/en/">Finnish Agency for Rural Affairs</a>.
      Designed and wrote unit and integration testing suites and refactored existing code.
      Contributed to DevOps, like the integration of SonarQube, code quality and security tool.
      One of two developers in charge of implementing a custom map in the project.`,
      date: '2015 - 2016',
    }
  ],
  education: [
    {
      name: 'University of Aalto',
      title: 'MSc in Computer Science',
      date: '2018',
    }, {
      name: 'University of Metropolia',
      title: 'BSc Software Engineering',
      description: '',
      date: '2016',
    },
  ],
  languages: [
    {
      icon: 'fa-js-square',
      name: 'JavaScript',
    }, {
      name: 'TypeScript',
      type: 'square',
      short: 'TS',
    }, {
      icon: 'fa-react',
      name: 'React.js',
    }, {
      icon: 'fa-vuejs',
      name: 'Vue.js',
    }, {
      icon: 'fa-node-js',
      name: 'Node.js',
    }, {
      name: 'Django',
      type: 'plain',
      short: 'dj',
    }, {
      icon: 'fa-golang',
      name: 'Go',
    }, {
      icon: 'fa-sass',
      name: 'Sass',
    },
  ],
  tools: [
    {
      icon: 'fa-gulp',
      name: 'Gulp',
    }, {
      icon: 'fa-git-alt',
      name: 'Git',
    }, {
      icon: 'fa-npm',
      name: 'NPM',
    }, {
      icon: 'fa-docker',
      name: 'Docker',
    }, {
      icon: 'fa-solid fa-database',
      name: 'Firebase',
    },
  ],
  projects: [
    {
      title: 'Youloader',
      link: '',
      description: 'Download video and audio from Youtube',
      thumbnail: 'https://i.ibb.co/HxgFNbV/youloader-thumbnail.png',
      skills: [
        {
          icon: 'fa-react',
          name: 'React.js',
        }, {
          icon: 'fa-node-js',
          name: 'Node.js',
        }
      ],
    }, {
      title: 'Captionmaker',
      link: '',
      description: 'Create your own captions to any image or gif',
      thumbnail: 'https://i.ibb.co/G2wzz3Y/captionmaker-thumbnail.png',
      skills: [
        {
          icon: 'fa-react',
          name: 'React.js',
        }, {
          icon: 'fa-node-js',
          name: 'Node.js',
        }
      ],
    }, {
      title: 'Watchshouldi',
      link: '',
      description: 'Find something to watch by putting a movie or a show to a vote',
      thumbnail: 'https://i.ibb.co/sQ4ZTxq/watchshouldi-thumbnail.png',
      skills: [
        {
          icon: 'fa-js-square',
          name: 'Javascript',
        }, {
          icon: 'fa-solid fa-database',
          name: 'Firebase',
        }
      ],
    }, {
      title: 'BankID Client',
      link: '',
      description: 'Package to verify users or sign data using BankID services',
      thumbnail: 'https://i.ibb.co/yXnXBNY/npm-thumbnail.png',
      skills: [],
    }, {
      title: 'Sequelize Tracker',
      link: '',
      description: 'Sequelize plugin to automatically track activity in selected tables',
      thumbnail: 'https://i.ibb.co/yXnXBNY/npm-thumbnail.png',
      skills: [],
    },
  ],
  email: 'sergeiliski@gmail.com',
  phone: '',
  address: 'London, United Kingdom',
  formEndpoint: 'https://getform.io/f/beec99b8-e76a-4cdc-8a8f-bd8553b17963',
  pages: {
    about: true,
    experience: true,
    education: true,
    skills: true,
    projects: true,
    contact: true,
  },
};
