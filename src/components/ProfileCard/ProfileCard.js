import React, {Component} from 'react'
import img from "../../images/profile/scotty.jpg"
import './ProfileCard.css'
import $ from 'jquery'

function Title(props) {
    return (
        <div className="info-headings">
            <h4 className="text-uppercase left">{props.name}</h4>
            <h6 className="text-capitalize left">{props.title}</h6>
        </div>
    )
}

function Info(props) {
    return (
        <div className="infos">
            <ul className="profile-list">
                <li className="clearfix">
                    <span className="title">
                        <i className="material-icons">email</i>
                    </span>
                    <span className="content">{props.email}</span>
                </li>
                <li className="clearfix">
                    <span className="title">
                        <i className="material-icons">language</i>
                    </span>
                    <span className="content">{props.language}</span>
                </li>
                <li className="clearfix">
                    <span className="title">
                        <i className="fa fa-skype" aria-hidden="true"></i>
                    </span>
                    <span className="content">{props.skype}</span>
                </li>
                <li className="clearfix">
                    <span className="title">
                        <i className="material-icons">phone</i>
                    </span>
                    <span className="content">{props.phone}</span>
                </li>
                <li className="clearfix">
                    <span className="title">
                        <i className="material-icons">place</i>
                    </span>
                    <span className="content">{props.place}</span>
                </li>
            </ul>
        </div>
    )
}

function Links(props) {
    return (
        <div className="links">
            <a href={props.facebook} id="first_one" className="social btn-floating indigo">
                <i className="fa fa-facebook"></i>
            </a>
            <a href={props.twitter} className="social btn-floating blue">
                <i className="fa fa-twitter"></i>
            </a>
            <a href={props.linkedin} className="social  btn-floating blue darken-3">
                <i className="fa fa-linkedin"></i>
            </a>
        </div>
    )
}

export default class Banner extends Component {

    render() {

        return (
            <div id="profile-card-container" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">

                            <div id="profile-card" className="card">

                                <div id="profile" className="right">
                                    <img alt="my-profile" className="img-responsive" src={img}/>
                                </div>

                                <div className="card-content">

                                    <Title name={this.props.profile.name} title={this.props.profile.title}/>

                                    <Info
                                        email={this.props.profile.email}
                                        language="hitscotty.com"
                                        skype="hitscotty"
                                        phone="646 696 9068"
                                        place="172 River Dr, Garfield, NJ"/>

                                    <Links
                                        facebook="https://www.facebook.com/Hitscotty"
                                        twitter="https://twitter.com/hitscotty"
                                        linkedin="https://www.linkedin.com/in/hitscotty/"/>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}