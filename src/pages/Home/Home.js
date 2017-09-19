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
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    componentWillMount() {
        // Global Animations

    }
    render() {
        const {loading} = this.state;

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