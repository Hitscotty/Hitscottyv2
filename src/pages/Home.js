import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Navigation from './Navigation.js'
import ProfileCard from '../components/ProfileCard.js'
import SummaryBox from '../components/SummaryBox.js'
import Experience from '../pages/Experience.js'
import Skills from '../pages/Skills.js'
import Projects from '../pages/Projects.js'
import Testimonials from '../pages/Testimonials.js'
import Contact from '../pages/Contact.js'

import Board from '../components/Board.js'
import LineDivider from '../components/LineDivider.js'
import Scroller from '../components/Scroller.js'
import Loader from '../components/Loader.js'
import Footer from '../pages/Footer.js'

import 'magnific-popup/dist/jquery.magnific-popup.js'
import 'scrollreveal'

import $ from 'jquery'
import ScrollReveal from 'scrollreveal'
const sr = ScrollReveal()

function Body() {
    return (
        <div>
            <LineDivider/>

            <Board
                title="MainStreet CRM"
                subtitle="Startup company working with CRM technologies">
                <p>
                    worked with small team of developers (7-10)
                </p>
                <p>
                    developed a web and mobile CRM utilizing angular, xamarin ,ionic and asp.net
                </p>
                <p>
                    backend stored procedures and api development
                </p>
                <p>
                    api integrations, framework implementation, UI/UX component design
                </p>
            </Board>
            <LineDivider/>

            <Board
                title="Lehman College"
                subtitle="Lehman College is a senior college of the City University of New York">
                <p>
                    Graduated with a 3.1 GPA
                </p>
                <p>
                    learned python, java, and how to develop video games.
                </p>
                <p>
                    took the follow courses below
                </p>
                <div className="tags center">
                    <span className="tag">Data Structures</span>
                    <span className="tag">Internet Programming</span>
                    <span className="tag">Computer Organizations</span>
                    <span className="tag">Operating Systems</span>
                    <span className="tag">Programming Methods</span>
                </div>
            </Board>

        </div>
    )
}

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            name: "Jonathan Portorreal",
            title: "Software Engineer",
            username: "Hitscotty",
            mySkills: [
                {
                    type: "Professional",
                    sets: [
                        {
                            skill: "HTML5",
                            fluency: "90%"
                        }, {
                            skill: "Haskell",
                            fluency: "98%"
                        }
                    ]
                }, {
                    type: "Personal",
                    sets: [
                        {
                            skill: "Communication",
                            fluency: "9%"
                        }
                    ]
                }, {
                    type: "Tools",
                    sets: [
                        {
                            skill: "Visual Studio",
                            fluency: "90%"
                        }
                    ]
                }
            ],
            summary: `Hey, I'm Jonathan Portorreal, but everyone calls me Scotty! I'm a Software
        Engineer developing all kinds of neat stuff for 4 years now. I specialize in
        solving problems both on the front-end and the back-end. Experienced with
        mobile, web, and video game development. Strong background in functional
        programming and Haskell Evangelist.`
        }
    }
    componentDidMount() {

        $(window)
            .on('load', function () {
                $('div#loading').fadeOut(500);
                window.sr = ScrollReveal({reset: false});
                var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,.timeline-dot,.timel' +
                        'ine-content,#add-more,#skills-card,#testimonials-card,#portfolios-card,#interest' +
                        '-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title im' +
                        'g';
                sr.reveal(commonCards, {duration: 1100});
                sr.reveal('#about-card,.map-label', {
                    duration: 1400,
                    delay: 500
                });
                sr.reveal('#v-card-holder', {
                    duration: 1400,
                    distance: '150px'
                });
                sr.reveal('.skillbar-bar', {
                    duration: 1800,
                    delay: 300,
                    distance: '0'
                });
            });

    }

    render() {

        return (
            <div>
                <Navigation/>
                <ProfileCard/>
                <SummaryBox>
                    <p>
                        {this.state.summary}
                    </p>
                </SummaryBox>
                <Experience/>
                <Skills skills={this.state.mySkills}/>
                <Projects id="projects"/>
                <Testimonials/>
                <Contact/>
                <Loader name={this.state.name} title={this.state.title}/>
                <Scroller/>
                <Footer name={this.state.username}/>
            </div>
        )
    }
}