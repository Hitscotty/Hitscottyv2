import Jesus from './images/clients/jesus.jpg'
import Jonathan from './images/clients/jesus.jpg'
import MainStreetIcon from './images/blog/MainStreet.png';
import CunyFirstIcon from './images/blog/CunyFirst.png';
import WordLadderIcon from './images/blog/Wordladder.jpg';

export const config = {
    profile: {
        name: "Jonathan Portorreal",
        title: "Software Engineer",
        username: "Hitscotty",
        email: "Jportorreal77@gmail.com",
        phone: "646 696 9068",
        website: "hitscotty.com",
        place: "172 River Dr, Garfield, NJ",
        summary: `Hey, I'm Jonathan Portorreal, but everyone calls me Scotty! I'm a Software
        Engineer developing all kinds of neat stuff for 4 years now. I specialize in
        solving problems both on the front-end and the back-end. Experienced with
        mobile, web, and video game development. Strong background in functional
        programming and Haskell Evangelist.`,
        links: {
            facebook: "https://www.facebook.com/Hitscotty",
            twitter: "https://twitter.com/hitscotty",
            linkedin: "https://www.linkedin.com/in/hitscotty/"
        }
    },
    featured_projects: [
        {
            title: "MainStreet",
            date: "March - Present",
            img: MainStreetIcon,
            summary: {
                skills: [
                    "SQL", "C#", "JS"
                ],
                description: `Web design, mobile design, and api developer. Developed UX experiences and
          created scalable solutions for server side data that integrated smoothly with
          client side needs.`
            }

        }, {
            title: "Cuny First Api",
            date: "Dec - March",
            img: CunyFirstIcon,
            summary: {
                skills: [
                    "Node", "Express", "X-Ray"
                ],
                description: `Developed a REST api for CUNYFIRST in order to create a better version of their website. Created 
                CunySecond using this API. Used Web Scraping with JS to pull data, MongoDB to store the data temporarily, and Express 
                to serve the files as REST
                `
            }

        }, {
            title: "Word Ladder",
            date: "Jan - Dec",
            img: WordLadderIcon,
            summary: {
                skills: [
                    "Android", "Java", "Data Structures"
                ],
                description: `Web design, mobile design, and api developer. Developed UX experiences and
          created scalable solutions for server side data that integrated smoothly with
          client side needs.`
            }

        }
    ],
    skills: [
        {
            type: "Professional",
            sets: [
                {
                    skill: "C#",
                    fluency: "90%"
                }, {
                    skill: "Javascript/Nodejs",
                    fluency: "95%"
                }, {
                    skill: "Java",
                    fluency: "90%"
                }, {
                    skill: "Python",
                    fluency: "50%"
                }, {
                    skill: "SQL",
                    fluency: "74%"
                }, {
                    skill: "Agile",
                    fluency: "100%"
                }
            ]
        }, {
            type: "Personal",
            sets: [
                {
                    skill: "Haskell",
                    fluency: "60%"
                }, {
                    skill: "Category Theory",
                    fluency: "40%"
                }, {
                    skill: "Functional Programming",
                    fluency: "60%"
                }, {
                    skill: "API Development",
                    fluency: "95%"
                }, {
                    skill: "Web Scraping",
                    fluency: "89%"
                }
            ]
        }, {
            type: "Frameworks",
            sets: [
                {
                    skill: "Reactjs",
                    fluency: "82%"
                }, {
                    skill: "Ionic",
                    fluency: "88%"
                }, {
                    skill: "Angular",
                    fluency: "70%"
                }, {
                    skill: "Xamarin",
                    fluency: "67%"
                }, {
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
                review: `I work with Jonathan on several web development projects and I find him to be
                extremely creative and a technical Front End Developer. Jonathan's expertise involves
                building complex features that intgrate smoothly with different backends. He's always had
                a large focus on scale and efficiency and I've always enjoyed working with him`,
                src: Jesus
            }, {
                author: "Jonathan",
                review: `I Love working with myself, I'm truly a great person. I'm not selfish, but I am brilliant.`,
                src: Jesus
            }, {
                author: "Me",
                review: `I work with Jonathan on several web development projects and I find him to be
                extremely creative and a technical Front End Developer. Jonathan's expertise involves
                building complex features that intgrate smoothly with different backends. He's always had
                a large focus on scale and efficiency and I've always enjoyed working with him`,
                src: Jesus
            }
        ]
    }
}
