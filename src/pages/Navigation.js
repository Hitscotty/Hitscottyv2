import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom'
import '../stylesheets/navigation.css'
import $ from 'jquery'

export default class Navigation extends Component {

  componentDidMount() {
    var actualBottom = (selector) => {
      return $(selector)
        .offset()
        .top + $(selector).outerHeight(true);
    }

    $(function () {
      const $nav = $(".navigation-component ul.breadcrumb");

      const isPassed = () => {
        var y_scroll_pos = window.pageYOffset;
        var element = $("#v-card-holder")
          .offset()
          .top;

        var scroll_pos_test = $("#v-card-holder").height() + element;

        return y_scroll_pos > scroll_pos_test
      }

      const updateNav = () => {
        if (isPassed()) {
          $nav.css({"background": "#333"})
        } else {
          $nav.css({"background": "rgba(245, 245, 245, 0)"})
        }
      }

      updateNav();
      $(window).scroll(function () {
        updateNav()
      });

      const initSmoothScroll = () => {
        $('div#nav-crumbs')
          .find('a')
          .on('click', function () {
            var location = window.location;

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target
                    .offset()
                    .top
                }, 900, "swing");
                return false;
              }
            }
          });
      }

      initSmoothScroll();
    })
  }

  render() {

    return (
      <header id="home" className="navigation-component">
        <div id="nav-crumbs" aria-label="breadcrumbs">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        <div className="header-background section"></div>

      </header>

    );
  }
}