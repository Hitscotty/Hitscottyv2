import React, {Component} from 'react'
import Menu from '../../components/Menu/Menu.js'
import './Navigation.css'
const $ = window.$;
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
        var element = $("#profile-card")
          .offset()
          .top;

        var scroll_pos_test = $("#profile-card").height() - element;

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

        var $activeSection;
        const currentScroll = $(this).scrollTop();

        $(".section").each(function () {
          var sectionPosition = $(this)
            .offset()
            .top;
          if (sectionPosition < currentScroll + 130) {
            if ($(this).attr("id") !== "projects") 
              $activeSection = $(this);
            }
          
          if ($activeSection) {
            var id = $activeSection.attr('id');
            $('#nav-crumbs a').removeClass('active');
            $("#nav-crumbs a[href='#" + id + "']").addClass('active');
          }

        })
      });

      const initSmoothScroll = () => {
        $('div#nav-crumbs')
          .find('a')
          .on('click', function () {
            var location = window.location;

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
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

      $("body").append(`
      <script>
        $("#nav-crumbs").removeClass("hide");
      </script>
      `)
    })
  }

  render() {

    return (
      <header id="home" className="navigation-component">

        <Menu/>

        <div id="nav-crumbs" aria-label="breadcrumbs" className="hide">
          <ul className="breadcrumb">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#featured-projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="header-background section"></div>

      </header>

    );
  }
}