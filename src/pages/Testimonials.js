import React, {Component} from 'react'
import testimonialicon from '../images/icons/handshake.png'
import jesus from '../images/clients/jesus.jpg'
import Swiper from 'swiper';

export default class Testimonials extends Component {

    componentDidMount() {
        var swiper = new Swiper('.swiper-container-clients', {
            pagination: '.swiper-pagination-clients',
            a11y: true,
            keyboardControl: true,
            autoHeight: true,
            speed: 800,
            paginationClickable: true
        });
    }
    render() {
        return (

            <section id="testimonials" className="section">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-uppercase text-center"><img src={testimonialicon} alt="demo"/>Testimonials</h4>
                    </div>
                    <div id="testimonials-card" className="row card">
                        <div className="col-md-12 col-xs-12">

                            <div id="clients-slider" className="swiper-container swiper-container-clients">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="col-md-12">
                                            <div className="client-img center-block">
                                                <img alt="testimonial" className="center-block" src={jesus}/>
                                            </div>
                                            <blockquote>
                                                I work with John on several web development projects and I find him to be
                                                extremely creative and a technical Front End Developer. Jone expertise involves
                                                building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript. I
                                                work with John on several web development projects and I find him to be
                                                extremely creative and a technical Front End Developer. Jone expertise involves
                                                building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.
                                                <cite>Mike, CEO, IT World.</cite>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="col-md-12">
                                            <div className="client-img center-block">
                                                <img
                                                    alt="client-image"
                                                    className="center-block"
                                                    src="images/clients/client-2.png"/>
                                            </div>
                                            <blockquote>
                                                I work with John on several web development projects and I find him to be
                                                extremely creative and a technical Front End Developer.
                                                <cite>Mike, CEO, IT World.</cite>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="col-md-12">
                                            <div className="client-img center-block">
                                                <img
                                                    alt="client-image"
                                                    className="center-block"
                                                    src="images/clients/client-3.png"/>
                                            </div>
                                            <blockquote>
                                                I work with John on several web development projects and I find him to be
                                                extremely creative and a technical Front End Developer. Jone expertise involves
                                                building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.
                                                <cite>Mike, CEO, IT World.</cite>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination swiper-pagination-clients"></div>
                            </div>
                        </div>
                    </div>
                    <div id="clients">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="clients-wrap">
                                        <blockquote>
                                            "He's honestly one of the best developers I've ever met. If there's something
                                            impossible to be done he's the guy to call."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}