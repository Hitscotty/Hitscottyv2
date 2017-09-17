import React, {Component} from 'react';
import $ from 'jquery'
import './Scroller.css'
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
            return false;
        });
    }

    componentWillUnmount() {}
    render() {
        return (
            <div id="scroll-top">
                <div id="scrollup">
                    <i className="fa fa-angle-up"></i>
                </div>
            </div>
        )
    }
}