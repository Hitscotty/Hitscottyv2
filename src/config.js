import React, { createContext } from "react";
import Jesus from "./images/headshots/jesus.png";
import Evellard from "./images/headshots/Evellard.jpg";
import Francisco from "./images/headshots/Francisco.png";
import Pedro from "./images/headshots/Pedro.jpg";

import MainStreetIcon from "./images/blog/MainStreet.png";
import CunyFirstIcon from "./images/blog/CunyFirst.png";
import WordLadderIcon from "./images/blog/Wordladder.jpg";

const defaultConfig = {
  profile: {
    name: "Jonathan Portorreal",
    title: "Software Engineer",
    username: "Hitscotty",
    email: "Jportorreal77@gmail.com",
    phone: "646 696 9068",
    website: "github.com/hitscotty",
    place: "Developer State of Mind",
    summary: `Hey, I'm Jonathan Portorreal, but everyone calls me Scotty! I'm a Software
        Engineer developing all kinds of neat stuff for 4 years now. I specialize in
        solving problems both on the front-end and the back-end. Experienced with
        mobile, web, and video game development. Strong background in functional
        programming and Haskell Evangelist.`,
    links: {
      facebook: "https://www.facebook.com/Hitscotty",
      twitter: "https://twitter.com/hitscotty",
      linkedin: "https://www.linkedin.com/in/hitscotty/",
      instagram: "https://www.instagram.com/hitscotty/",
      wordpress: "https://hitscotty.wordpress.com/"
    }
  },
  experience: [
    {
      title: "Lehman College",
      subTitle: "City University of New York",
      startDate: "September 2012",
      endDate: "June 2016",
      summary:
        "I completed a Bachelors Degree in Computer Science. Completed all my classes"
    },
    {
      title: "Google Bootcamp",
      subTitle: "Google/Code-to-Work",
      startDate: "June 2016",
      endDate: "July 2016",
      summary:
        "Implemented concepts from Data Structures and Algorithms as well as Artificial Intelligence. Designed and Developed games using Android Studio. Received mentorship from professional engineers and facilitators at Google. Learned about Trie Graphs."
    },
    {
      title: "Summer Student",
      subTitle: "Beyond Coding",
      startDate: "July 2016",
      endDate: "August 2016",
      summary:
        "Networked with other developers and companies in the NYC area and worked collaboratively with them to develop and build leadership skills. We Practiced Agile code development methodologies. I learned how to pick up and adapt to new technologies as well as explaining complex, technical projects to many different types of teams."
    },
    {
      title: "Online Computers",
      subTitle: "Software Engineer",
      startDate: "March 2017",
      endDate: "October 2017",
      summary:
        "Full stack developer working on a CRM technology. Responsible for developing company API, implementing UI in web app and maintaining the mobile app. Using angular, ionic/xamarin and asp.net"
    },
    {
      title: "SnowJoe",
      subTitle: "Software Engineer",
      startDate: "November 2017",
      endDate: "Present",
      summary:
        "persuaded use of new JS technologies Vue, Webpack, ES6; migrated a liquid Shopify website to  Vue.js and Webpack environment and optimized front face website by 5 seconds; wrote Webpack configs, plugins, and node scripts for internal/external company apps; developed tools for in-house developers "
    }
  ],
  featured_projects: [
    {
      title: "MainStreet",
      date: "March - Present",
      img: MainStreetIcon,
      summary: {
        skills: ["SQL", "C#", "JS"],
        description: `Developed Web and Mobile App; created stored procedures, front end interfaces, C#/Angular Complex User Controls.
                Used D3JS to add a data visualization layer to the CRM. Maintained/Created company API and collaborated with team to push
                client needed features on a sprint to sprint basis.
                `
      },
      more: "https://github.com/Hitscotty/MainStreetMb"
    },
    {
      title: "Cuny First Api",
      date: "Dec - March",
      img: CunyFirstIcon,
      summary: {
        skills: ["Node", "Express", "X-Ray"],
        description: `Developed a REST api for CUNYFIRST in order to create a better version of their website. Created 
                CunySecond using this API. Used Web Scraping with JS to pull data, MongoDB to store the data temporarily, and Express 
                to serve the files as REST
                `
      },
      more: "https://github.com/Hitscotty/cuny-first-api"
    },
    {
      title: "Word Ladder",
      date: "Jan - Dec",
      img: WordLadderIcon,
      summary: {
        skills: ["Android", "Java", "Data Structures"],
        description: `Implemented algorithms and data structures to create a word game with android studio. Collaborated
                with others at a google coding bootcamp to perfect our android games, develop them further, and create meaningful user 
                experiences. Word Ladder is one of the 8 word games I developed at Google.`
      },
      more: "https://github.com/Hitscotty/Word-Ladder"
    }
  ],
  skills: [
    {
      type: "Professional",
      sets: [
        {
          skill: "C#",
          fluency: "90%"
        },
        {
          skill: "Javascript/Nodejs",
          fluency: "95%"
        },
        {
          skill: "Java",
          fluency: "90%"
        },
        {
          skill: "Python",
          fluency: "50%"
        },
        {
          skill: "SQL",
          fluency: "74%"
        },
        {
          skill: "Agile",
          fluency: "100%"
        }
      ]
    },
    {
      type: "Personal",
      sets: [
        {
          skill: "Haskell",
          fluency: "60%"
        },
        {
          skill: "Category Theory",
          fluency: "40%"
        },
        {
          skill: "Functional Programming",
          fluency: "60%"
        },
        {
          skill: "API Development",
          fluency: "95%"
        },
        {
          skill: "Web Scraping",
          fluency: "89%"
        }
      ]
    },
    {
      type: "Frameworks",
      sets: [
        {
          skill: "Reactjs",
          fluency: "82%"
        },
        {
          skill: "Ionic",
          fluency: "88%"
        },
        {
          skill: "Angular",
          fluency: "70%"
        },
        {
          skill: "Xamarin",
          fluency: "67%"
        },
        {
          skill: ".NET",
          fluency: "93%"
        }
      ]
    }
  ],
  testimonials: {
    featured: {
      author: "God",
      review: "He's the best thing I've ever created."
    },
    reviews: [
      {
        author: "Jesus",
        review: `Jonathan's imagination runs wild, more so than anyone I've ever met. His passion is contagious. 
                I am most amazed by his ability to absorb information and produce a work of art, anything he envisions 
                he brings into fruition. Working with Jonathan has changed our development team, his passion became our 
                fuel as we dove into uncharted waters, we've managed to reach depths we never thought possible. This has 
                brought about change not only within our product but also within ourselves. In turn Jonathon has become 
                an invaluable member of our team, Pand if fate allows it I would like nothing more than to work with him in the future.`,
        src: Jesus
      },
      {
        author: "Francisco",
        review: `Jonathan has numerous treats that make him a unique candidates for many different positions. 
                He is very task oriented and knows how to deal with a lot of tasks while keeping deadlines in mind. 
                He is also always willing to help others without it interfering with his quality of work. His ability 
                to learn new technology and effectively apply it to various tasks has always been impressive to me.`,
        src: Francisco
      },
      {
        author: "Pedro",
        review: `I am a Software Engineer at Capital One. Jonathan’s ability to problem 
                solve and willingness to dive in to any challenge were evident to me in projects 
                and assignments we had worked on together. He was flexible, easy to work 
                with and a great team player on the projects we were assigned together. He is a passionate individual 
                who is very willing and motivated to learn and grow as a developer and individual.
                Overall Jonathan would be an excellent addition to a software engineering role.
                `,
        src: Pedro
      },
      {
        author: "Evellard",
        review: ` I am proud to call him my close friend, I admire his passion for math and his 
                skills to solve difficult puzzles.`,
        src: Evellard
      }
    ]
  }
};

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => (
  <ConfigContext.Provider value={{ ...defaultConfig }}>
    {children}
  </ConfigContext.Provider>
);

export default ConfigContext;
