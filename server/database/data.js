const questions = [
    {
      id: 1,
      question: "What is the MERN stack?",
      options: [
                'A stack for building mobile applications',
                'A JavaScript runtime environment',
                'A combination of technologies used for web development'
        ]
    },
    {
      id: 2,
      question: "What are the main components of the MERN stack?",
      options: [
                'MongoDB, Express, React, Netlify', 
                'MySQL, Ember, Redux, Node.js', 
                'MongoDB, Express, React, Node.js'
               ]
    },
    {
      id: 3,
      question: "Explain the role of MongoDB in the MERN stack.",
      options: [
                'MongoDB is a frontend framework.', 
                'MongoDB is a database used to store application data.', 
                'MongoDB is a server-side scripting language.'
               ]
    },
    {
      id: 4,
      question: "How does Express.js fit into the MERN stack?",
      options: [
                'Express.js is a frontend library for building user interfaces.', 
                'Express.js is a database management system.', 
                'Express.js is a backend framework that handles server-side operations.'
               ]
    },
    {
      id: 5,
      question: "What is React and why is it used in the MERN stack?",
      options: [
                'React is a database query language.', 
                'React is a frontend framework used for building user interfaces.', 
                'React is a programming language used for server-side logic.'
               ]
    },
    {
      id: 6,
      question: "How does Node.js contribute to the MERN stack?",
      options: [
                'Node.js is a frontend library for building user interfaces.', 
                'Node.js is a server-side runtime environment for executing JavaScript code.', 
                'Node.js is a database management system.'
               ]
    },
    {
      id: 7,
      question: "Explain the concept of Single-Page Applications (SPAs) in the context of the MERN stack.",
      options: [
                'SPAs are applications that can only be accessed by a single user at a time.', 
                'SPAs are applications that load a new page for every user action.', 
                'SPAs are applications that dynamically update the current page without requiring a full page reload.'
               ]
    },
    {
      id: 8,
      question: "What is Babel and why is it used in the MERN stack?",
      options: [
                'Babel is a database query language.', 
                'Babel is a transpiler used to convert modern JavaScript code into a compatible format.', 
                'Babel is a frontend framework for building user interfaces.'
               ]
    },
    {
      id: 9,
      question: "Describe the concept of JSX in React.",
      options: [
                'JSX is a server-side scripting language.', 
                'JSX is a templating engine for generating HTML code.', 
                'JSX is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript.'
               ]
    },
    {
      id: 10,
      question: "How does React Router help with routing in a MERN application?",
      options: [
                'React Router is a database management system.', 
                'React Router is a frontend library for building user interfaces.', 
                'React Router provides a way to handle routing and navigation in a single-page application built with React.'
               ]
    },
    {
      id: 11,
      question: "What is the purpose of a package.json file in a MERN project?",
      options: [
                'The package.json file is used for storing database configurations.', 
                'The package.json file lists the project dependencies and provides scripts for running various tasks.', 
                'The package.json file is responsible for handling user authentication.'
               ]
    },
    {
      id: 12,
      question: "What is the significance of using Webpack in a MERN stack?",
      options: [
                'Webpack is a server-side runtime environment for executing JavaScript code.', 
                'Webpack is a frontend framework used for building user interfaces.', 
                'Webpack is a module bundler that processes and bundles assets for a web application.'
               ]
    },
    {
      id: 13,
      question: "What are the advantages of using the MERN stack?",
      options: [
                'MERN stack provides better performance compared to other stacks.', 
                'MERN stack allows for rapid development and code reuse.', 
                'MERN stack is specifically designed for building mobile applications.'
               ]
    },
    {
      id: 14,
      question: "What is the role of Express middleware in a MERN application?",
      options: [
                'Express middleware is used for server-side rendering.', 
                'Express middleware handles incoming requests and performs additional processing before reaching the route handler.', 
                'Express middleware is responsible for managing database connections.'
               ]
    },
    {
      id: 15,
      question: "What is the purpose of a component in React?",
      options: [
                'Components are used for database operations in React.', 
                'Components define the structure and behavior of user interface elements in React.', 
                'Components are responsible for server-side rendering in React.'
               ]
    },
    {
      id: 16,
      question: "How can you pass data between components in React?",
      options: [
                'Data can be passed between components using cookies.', 
                'Data can be shared using global variables in React.', 
                'Data can be passed down from parent components to child components through props.'
               ]
    },
    {
      id: 17,
      question: "What is the purpose of Redux in a MERN application?",
      options: [
                'Redux is a database management system for MongoDB.', 
                'Redux is used for handling form submissions in React.', 
                'Redux is a state management library that helps manage application-level state in a predictable manner.'
               ]
    },
    {
      id: 18,
      question: "What is the role of Webpack in the MERN stack?",
      options: [
                'Webpack is a database query language.', 
                'Webpack is a server-side runtime environment for executing JavaScript code.', 
                'Webpack is a module bundler that processes and bundles assets for a web application.'
               ]
    },
    {
      id: 19,
      question: "What is the purpose of the useEffect hook in React?",
      options: [
                'The useEffect hook is used for handling form validation in React.', 
                'The useEffect hook is used for making API requests in React.', 
                'The useEffect hook is used for performing side effects in React, such as fetching data or subscribing to event listeners.'
               ]
    },
    {
      id: 20,
      question: "How can you secure a MERN application?",
      options: [
                'Securing a MERN application is not necessary.', 
                'Securing a MERN application involves implementing proper authentication and authorization mechanisms.', 
                'Securing a MERN application requires encrypting the database.'
               ]
    }
  ];
  
  export const answers = [0, 2, 1, 2, 1, 1, 2, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2, 0, 1, 1];

  export default questions;
  