import jsLogo from "../images/JavaScript-logo.png"; 
import cssLogo from "../images/CSS-Logo.png"; 
import graphQLLogo from "../images/GraphQL_Logo.svg.png"; 
import htmlLogo from "../images/HTML5_Logo_512.png"; 
import reactLogo from "../images/1200px-React-icon.svg.png"; 
import reduxLogo from "../images/logo-redux.png"; 
import nodejsLogo from "../images/Nodejs.png"; 
import webAssemblyLogo from "../images/webAssembly-logo.png"; 

export const skillsText = {
  JavaScipt: {
    desc: [
      "Closures, scopes, how to implement functional vs oop style of programming",
      "Knowledge of the differences between ES5 vs ES6+, knows how to use Polyfills for IE11",
      "Event blocking knowledge, knows when to use Promises and Web Workers",
      "Front-end routing expertise",
      "Familarity with JQuery, DOM manipulation, prototype/ES6 Classes similiarities and differences",
      "JS is my main language, while not ideal I do algorithms in JS. Often, I'll solve problems on JS and through reading answers in different languages such as C, Java, or Python, I gain a great understanding of both JS and other languages"
    ],
    pic: jsLogo
  },
  "Node.js": {
    desc: [
      "Understands how the event loop works with Chromium's V8 engine",
      "Popular libraries I use include Express, Passport, Sequelize, Mongoose, and Apollo",
      "Experience with Node's modules, http/s, crypto, util",
      "Created many CRUD apps using Restful, GraphQL, and XML api calls",
      "Can hyrdate React app with Next.js, understands pros and cons of an isomorphic app"
    ],
    pic: nodejsLogo
  },
  React: {
    desc: [
      "My main Front-End Framework, fluent in JSX",
      "Extremely familiar with lifecycles, stateful vs dumb components, HOCs, prop delagation, speed increase with arrays convert to objects",
      "Strong understanding of React-Router, Jest, API calls via Axios, Webpack, Babel, and Server-side rendering",
      "Just started using Hooks, I believe they are a little harder to pick up at first but having the ability to encapsulate state is extremeley useful",
      "I love react"
    ],
    pic: reactLogo
  },
  Redux: {
    desc: [
      "Use Redux for larger apps, understanding of immutable store",
      "Familiar with React-Thunk for async calls, has also used Redux-Saga"
    ],
    pic: reduxLogo
  },
  CSS: {
    desc: [
      "Follows BEM styling for some projects and CSS Modules for others",
      "Box model understanding, knows how to use display and position properties effectively",
      "CSS-Grid and Flexbox mastery",
      "Comfortable with CSS pseudo elements",
      "Animations with transition and animation properities, SVG manipulation too",
      "Knows use external styles like Bootstrap"
    ],
    pic: cssLogo
  },
  HTML: {
    desc: [
      "Knowledge of different properities of tags, ie div vs span",
      "Differences between HTML and JSX, knowledge of how a browser parses HTML and when it rerenders",
      "Studies ARIA and A11Y priciples to ensure accessibility"
    ],
    pic: htmlLogo
  },
  GraphQL: {
    desc: [
      "Knowledge of how to set up on both Client Side and Server Side with Apollo"
    ],
    pic: graphQLLogo
  },
  WebAssembly: {
    desc: [
      "just started to experiment with it",
      "Seems cool"
    ],
    pic: webAssemblyLogo
  }
}