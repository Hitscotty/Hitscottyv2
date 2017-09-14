import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Navigation from './Navigation.js'
import ProfileCard from '../components/ProfileCard.js'
import SummaryBox from '../components/SummaryBox.js'
import Experience from '../pages/Experience.js'
import Skills from '../pages/Skills.js'
import FeaturedProjects from '../pages/FeaturedProjects.js'
import Projects from '../pages/Projects.js'
import Testimonials from '../pages/Testimonials.js'
import Contact from '../pages/Contact.js'
import About from '../pages/About.js'
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

export default class Home extends Component {

    componentWillMount() {

        $(window)
            .on('load', function () {
                $('div#loading').fadeOut(4500);
                window.sr = ScrollReveal({reset: false});
                var commonCards = `.timeline-dot,.timeline-content,
                                   #add-more, #skills-card, #testimonials-card, #portfolios-card, 
                                   #interest-card, #p-one, #p-two,#p-three, #blog-card, #contact-card, 
                                   #clients,.section-title img`;
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
            <div className="body-layer">
                <Navigation/>
                <ProfileCard profile={this.props.settings.profile}/>
                <SummaryBox>
                    <p>
                        {this.props.settings.profile.summary}
                    </p>
                </SummaryBox>
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