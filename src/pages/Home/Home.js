import React, { useContext } from "react";
import "magnific-popup/dist/jquery.magnific-popup.js";
import "./Home.css";

import ProfileCard from "../../components/ProfileCard/ProfileCard.js";
import Scroller from "../../components/Scroller/Scroller.js";
import Loader from "../../components/Loader/Loader.js";

import Navigation from "../Navigation/Navigation.js";
import About from "../About/About.js";
import Experience from "../Experience/Experience.js";
import Skills from "../Skills/Skills.js";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects.js";
import Projects from "../Projects/Projects.js";
import Testimonials from "../Testimonials/Testimonials.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";

import ScrollReveal from "scrollreveal";
import { ConfigContext } from "../../config";
const sr = ScrollReveal();
const $ = window.$;

const Home = () => {
  const {
    profile: { summary, name, title, username },
    skills,
    featured_projects,
    testimonials
  } = useContext(ConfigContext);

  return (
    <div className="body-layer">
      <Navigation />
      <ProfileCard />
      <About>
        <p>{summary}</p>
      </About>
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Projects id="projects" />
      <Testimonials />
      <Contact />
      <Loader />
      <Scroller />
      <Footer />
    </div>
  );
};

export default Home;
