export type element = {
  name: string;
  icon: string;
  quote: string;
  desc: string;
};

export type stack = {
  stack_name: string;
  stack_value: element[];
};

const frontend: element[] = [
  {
    name: 'Next',
    icon: 'next',
    quote: 'The React Framework for Production.',
    desc: "I'm currently using Next for building my projects, it's a great framework for building modern and responsive web applications. I'm able to create custom components with Next, and I'm able to create complex responsive layouts with Next.",
  },
  {
    name: 'React',
    icon: 'react',
    quote:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.',
    desc: "I love React, it's a great library for building robust, reliable, scaleble and safer web applications. Currently it is my favorite library for building web apps. I'd say I'm an early-advanced user of React, I understand quite well the core concepts (function components, hooks, routing, etc) and I'm able to build complex applications with it.",
  },
  {
    name: 'Typescript',
    icon: 'typescript',
    quote:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    desc: "I love Typescript, it's a great language for building large, scaleble and safer applications. Currently it is my favorite language for building web apps.",
  },
  {
    name: 'Javascript',
    icon: 'javascript',
    quote:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
    desc: 'There is a huge intersection between Javascript with Typescript. I use mainly the native functions set of Javascript in Typescript, but sometimes I use some awesome Javascript libraries that has fully operability with Typescript.',
  },
  {
    name: 'HTML5',
    icon: 'html',
    quote:
      'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
    desc: 'Html still being the core of the web, I use it a lot. I use it inside of the React components as part of the tsx components.',
  },
  {
    name: 'CSS3',
    icon: 'css',
    quote:
      'CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started.',
    desc: "I consider myself an intermidiate CSS user, recently I've been using it mainly when there is no way to style the components only using the Tailwind framework. Other ways I keep the pure Css usage at the bare minimum needed in the project.",
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    quote:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    desc: "I'm currently using Tailwind for styling my projects, it's a great framework for building modern and responsive web applications. I'm able to create custom components with Tailwind, and I'm able to create complex responsive layouts with Tailwind.",
  },
  {
    name: 'Headless UI',
    icon: 'headlessui',
    quote:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    desc: "I'm currently using Headless UI for styling my projects, it's a great framework for building modern and responsive web applications. I'm able to create custom components with Headless UI, and I'm able to create complex responsive layouts with Headless UI.",
  },
  {
    name: 'Shadcn UI',
    icon: 'shadcn-ui',
    quote:
      'Shadcn UI is a component library that provides you with a set of high-quality components and demos for building rich, interactive user interfaces.',
    desc: "I'm currently using Shadcn UI for styling my projects, it's a great framework for building modern and responsive web applications. I'm able to create custom components with Shadcn UI, and I'm able to create complex responsive layouts with Shadcn UI.",
  },
  {
    name: 'React Query',
    icon: 'query',
    quote: 'Hooks for fetching, caching and updating asynchronous data in React.',
    desc: "I'm currently using React Query for managing the state of my projects, it's a great framework for building modern and responsive web applications. I'm able to create custom components with React Query, and I'm able to create complex responsive layouts with React Query.",
  },
  {
    name: 'React Router',
    icon: 'router',
    quote:
      'React Router is a collection of navigational components that compose declaratively with your application.',
    desc: 'React router is a routing systems type of librarie',
  },
  {
    name: 'React Hook Form',
    icon: 'react-hook-form',
    quote: 'Performant, flexible and extensible forms with easy-to-use validation.',
    desc: 'React Hook Form is a great library for building forms in React.',
  },
  {
    name: 'Figma',
    icon: 'figma',
    quote:
      "Whether you're brainstorming ideas, designing prototypes, or building solutions, Figma helps teams align early and stay in-sync, from initial idea to shipped.",
    desc: "I'm currently using Figma for designing the UI of my projects. I'm able to create prototypes for web components and refine it with complex behavior.",
  },
];
const backend: element[] = [
  {
    name: 'Nest',
    icon: 'nest',
    quote:
      'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
    desc: "I'm currently using the NestJS framework for managing the beck end, at this moment it is my favorite framework. I'd say I'm an intermediate user of NestJS, I understand quite well the core concepts (modules, controllers, services, guards, pipes, interceptors, etc) and I'm able to build modern Rest API applications with it.",
  },
  {
    name: 'MySql',
    icon: 'mysql',
    quote:
      'MySQL Standard Edition enables you to deliver high-performance and scalable Online Transaction Processing (OLTP) applications. It provides the ease of use that has made MySQL famous along with industrial strength performance and reliability.',
    desc: "MySql is a great database management system, I'm currently using it for storing and managing the data of my projects. I've got a quite well understanding of the SQL language, I'm able to create tables, insert, update and delete data, and I'm able to create complex queries.",
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    quote:
      'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
    desc: "PostgreSQL is a great database management system, I'm currently using it for storing and managing the data of my projects. I've got a quite well understanding of the SQL language, I'm able to create tables, insert, update and delete data, and I'm able to create complex queries.",
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    quote:
      'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.',
    desc: "MongoDB is a great database management system, I'm currently using it for storing and managing the data of my projects. I've got a quite well understanding of the NoSQL language, I'm able to create collections, insert, update and delete data, and I'm able to create complex queries.",
  },
  {
    name: 'Node',
    icon: 'node',
    quote: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    desc: "Honestly I know only the basics of NodeJS, I'm not a NodeJS expert, but I'm able to build CRUD like NodeJS applications. I'm currently learning and trying to specialize more about NestJS.",
  },
];
const devops: element[] = [
  {
    name: 'Linux',
    icon: 'linux',
    quote:
      'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system.',
    desc: "I mainly use Ubuntu 22.04 on Windows Subsystem for Linux 2, and I'm using Windows for some important tools compability.",
  },
  {
    name: 'Git',
    icon: 'git',
    quote:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    desc: 'Excellent version control system, I mainly use Git with Github. Sometimes I use Github CLI.',
  },
  {
    name: 'Docker',
    icon: 'docker',
    quote:
      'Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup, so you can focus on the code.',
    desc: "I'm currently using Docker to keep my projects running as clean and smooth as possible. I'm able to create containers, and I'm able to create complex docker-compose files.",
  },

  {
    name: 'Github',
    icon: 'github-white',
    quote:
      'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories.',
    desc: "Version control is key for any well structured project, I keep all my projects in Github. I'm able to control the versions effectively and consistently, and I'm able to collaborate with other developers in a very efficient way, delivering high quality projects.",
  },
];
const others: element[] = [
  {
    name: 'C++',
    icon: 'cpp',
    quote:
      'C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.',
    desc: 'C++ was my first case of pltonic love, back then I felt in love with it. Now I just use it from time to time, for playing with some algorithms.',
  },
  {
    name: 'Java',
    icon: 'java',
    quote:
      'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    desc: "Java is so cool, it was my first contact with OOP, I really enjoy coding in Java. Haven't been coding a lot with it, but I still enjoy it.",
  },
  {
    name: 'Python',
    icon: 'python',
    quote:
      'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
    desc: "I learned Python for my own interest, was such an exciting experience. I consider myself an intermediate Python coder, I know the basics of it most popular libraries (Pandas, Numpy, Matplotlib, etc). I also know how to use it for web scrapping. No doubt, that I'm going to sharpen my Python skills in the near feature, for using it with AI and Automation.",
  },
  {
    name: 'Bash',
    icon: 'bash',
    quote:
      'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.',
    desc: "I know the really basics of bash, haven't been using it lately, but I'm planning to use it more in the near future.",
  },
  {
    name: 'VSCode',
    icon: 'vscode',
    quote:
      'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
    desc: "VSCode is my favorite code editor/IDE, I use it for coding all my projects. I'm able to use it effectively and efficiently, and customizing it to maximize my productivity.",
  },
  {
    name: 'Kanban',
    icon: 'postit',
    quote:
      'The term “Kanban” is of Japanese origin and means “signaling” or “card”, and proposes the use of cards (post-its) to indicate and monitor the progress of production within the industry. It is a visual system that seeks to manage work as it moves through the process.',
    desc: "For managing my projects I use a kinda of personalized Kanban system, so I can keep track of the progress of my projects. I'm planning to develop my own Kanban system as a side project in the near future, so I can use it for managing my projects.",
  },
];

export const TechStackData: stack[] = [
  {
    stack_name: 'Frontend',
    stack_value: frontend,
  },
  {
    stack_name: 'Backend',
    stack_value: backend,
  },
  {
    stack_name: 'DevOps',
    stack_value: devops,
  },
  {
    stack_name: 'Others',
    stack_value: others,
  },
];
