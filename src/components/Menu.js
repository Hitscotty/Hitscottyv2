import React, {Component} from 'react'
import './Menu.css'

import $ from 'jquery'

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

                    <div className="logo-flat">
                        <img
                            alt="personal-logo"
                            className="img-responsive"
                            src="images/profile/john.png"/>
                    </div>
                    <br/>

                    <a href="index-normal.html#home">
                        <i className="title-icon fa fa-user"></i>Home</a>
                    <a href="index-normal.html#about">
                        <i className="title-icon fa fa-dashboard"></i>About</a>
                    <a href="index-normal.html#education">
                        <i className="title-icon fa fa-graduation-cap"></i>Experience</a>
                    <a href="index-normal.html#skills">
                        <i className="title-icon fa fa-sliders"></i>Skills</a>
                    <a href="index-normal.html#testimonials">
                        <i className="title-icon fa fa-users"></i>Testimonials</a>
                    <a href="index-normal.html#contact">
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