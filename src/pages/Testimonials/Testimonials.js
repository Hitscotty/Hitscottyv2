import React, {Component} from 'react'
import testimonialicon from '../../images/icons/handshake.png'
import './Testimonials.css'
const $ = window.$;

function Review(props) {
    return (
        <div className="swiper-slide">
            <div className="col-md-12">
                <div className="client-img center-block">
                    <img alt="testimonial" className="center-block" src={props.src}/>
                </div>
                <blockquote>
                    {props.review}
                    <span className="endquote"></span>
                    <cite>{props.author}</cite>
                </blockquote>
            </div>
        </div>
    )
}
export default class Testimonials extends Component {

    componentDidMount() {
        $(function () {
            $("body").append(`<script>
                new Swiper('.swiper-container-clients', {
                    pagination: '.swiper-pagination-clients',
                    a11y: true,
                    keyboardControl: true,
                    autoHeight: true,
                    speed: 800,
                    paginationClickable: true
                });
            </script>`)
        })
    }
    render() {

        if (!this.props.src) {
            return null;
        }

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
                                    {this
                                        .props
                                        .src
                                        .reviews
                                        .map(t => <Review review={t.review} src={t.src} author={t.author}/>)}
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
                                            "{this.props.src.featured.review}"
                                            <cite>{this.props.src.featured.author}</cite>
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