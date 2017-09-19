import React, {Component} from 'react'
import 'magnific-popup/dist/jquery.magnific-popup.js'
import './Home.css'

import ProfileCard from '../../components/ProfileCard/ProfileCard.js'
import Scroller from '../../components/Scroller/Scroller.js'
import Loader from '../../components/Loader/Loader.js'

import Navigation from '../Navigation/Navigation.js'
import About from '../About/About.js'
import Experience from '../Experience/Experience.js'
import Skills from '../Skills/Skills.js'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects.js'
import Projects from '../Projects/Projects.js'
import Testimonials from '../Testimonials/Testimonials.js'
import Contact from '../Contact/Contact.js'
import Footer from '../Footer/Footer.js'

import ScrollReveal from 'scrollreveal'
const sr = ScrollReveal()
const $ = window.$;

export default class Home extends Component {

    componentWillMount() {
        // Global Animations
        $(window)
            .on('load', function () {
                $('div#loading').fadeOut(7000);
                window.sr = ScrollReveal({reset: false});
                var commonCards = `.timeline-dot,.timeline-content,
                                   #skills-card, #testimonials-card, 
                                   #featured-projects-card, .projects-card, #contact-card, 
                                   #clients,.section-title img`;

                sr.reveal('.skillbar-bar', {
                    duration: 1800,
                    delay: 300,
                    distance: '0'
                });

                sr.reveal('#profile-card-container', {
                    duration: 1400,
                    distance: '150px'
                });

                sr.reveal('#about-card', {
                    duration: 1400,
                    delay: 500
                });

                sr.reveal(commonCards, {duration: 1100});

            });

    }

    render() {

        return (
            <div className="body-layer">
                <Navigation/>
                <ProfileCard profile={this.props.settings.profile}/>
                <About>
                    <p>
                        {this.props.settings.profile.summary}
                    </p>
                </About>
                <Experience/>
                <Skills skills={this.props.settings.skills}/>
                <FeaturedProjects src={this.props.settings.featured_projects}/>
                <Projects id="projects"/>
                <Testimonials src={this.props.settings.testimonials}/>
                <Contact/>
                <Loader
                    name={this.props.settings.profile.name}
                    title={this.props.settings.profile.title}/>
                <Scroller/>
                <Footer name={this.props.settings.profile.username}/>
            </div>
        )
    }
}