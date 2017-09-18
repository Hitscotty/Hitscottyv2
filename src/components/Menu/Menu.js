import React, {Component} from 'react'
import ReactSVG from 'react-svg'

import './Menu.css'

import $ from 'jquery'
import Scotty from '../../logo-sm.svg'

export default class Menu extends Component {

    componentWillMount() {
        $(function () {
            function initNav() {
                $('div.toggle-normal')
                    .on('click', function () {
                        $('i.top-bar').toggleClass('top-transform');
                        $('i.middle-bar').toggleClass('middle-transform');
                        $('i.bottom-bar').toggleClass('bottom-transform');
                    });
                $('.section,div#menu-options a').on('click', function () {
                    $('nav#theMenu').removeClass('menu-open');
                    $('i.top-bar').removeClass('top-transform');
                    $('i.middle-bar').removeClass('middle-transform');
                    $('i.bottom-bar').removeClass('bottom-transform');
                });
                $('div#menuToggle').on('click', function () {
                    $('div#menuToggle').toggleClass('active');
                    $('body').toggleClass('body-push-toright');
                    $('nav#theMenu').toggleClass('menu-open');
                });
            }

            initNav();
        })
    }
    render() {
        return (
            <nav id="theMenu" className="menu">
                <div id="menu-options" className="menu-wrap">

                    <div className="logo-flat menu-container">
                        <div className="menu-mask">
                            <ReactSVG
                                path={Scotty}
                                className="img-responsive menu-logo"
                                evalScript="always"/>
                        </div>
                    </div>
                    <br/>

                    <a href="#home">
                        <i className="title-icon fa fa-user"></i>Home</a>
                    <a href="#about">
                        <i className="title-icon fa fa-dashboard"></i>About</a>
                    <a href="#experience">
                        <i className="title-icon fa fa-graduation-cap"></i>Experience</a>
                    <a href="#skills">
                        <i className="title-icon fa fa-sliders"></i>Skills</a>
                    <a href="#testimonials">
                        <i className="title-icon fa fa-users"></i>Testimonials</a>
                    <a href="#contact">
                        <i className="title-icon fa fa-envelope"></i>Contact</a>
                </div>

                <div id="menuToggle">
                    <div className="toggle-normal">
                        <i className="material-icons top-bar">remove</i>
                        <i className="material-icons middle-bar">remove</i>
                        <i className="material-icons bottom-bar">remove</i>
                    </div>
                </div>
            </nav>
        )
    }
}