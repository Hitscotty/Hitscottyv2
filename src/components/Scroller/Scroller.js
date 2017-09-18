import React, {Component} from 'react';
import $ from 'jquery'
import './Scroller.css'
import Rocket from './rocket.svg'
import ReactSVG from 'react-svg'

export default class Scroller extends Component {

    componentDidMount() {

        $(window)
            .on('scroll', function () {
                if ($(this).scrollTop() >= 50) {
                    $('div#scrollup')
                        .addClass('animated flipInY')
                        .fadeIn(200);
                } else {
                    $('div#scrollup').fadeOut(200);
                }
            });

        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);

            $('#rocket_launch').css("margin-bottom", "1000px");
            $('.cloud_fill').css("animation", "smoke_size .35s infinite");
            $('.rocket_shadow').css("animation", "shadow_flare .35s infinite");

            return false;
        });
    }

    render() {
        return (
            <div id="scroll-top">
                <div id="scrollup">
                    <ReactSVG
                        path={Rocket}
                        className="img-responsive rocket-logo"
                        evalScript="always"/>
                </div>
            </div>
        )
    }
}