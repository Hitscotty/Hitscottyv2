import React, {Component} from 'react'
import './About.css'
import Resume from '../../JonathanPortorrealResume.docx'

export default class About extends Component {

    render() {
        return (
            <div id="about" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="about-card" className="card">
                                <div className="card-content">
                                    {this.props.children}
                                </div>

                                <div id="about-btn" className="card-action">
                                    <div className="about-btn">
                                        <a
                                            href={Resume}
                                            download="JonathanPortorrealResume"
                                            className="btn waves-effect">Download CV</a>
                                        <a href="#contact" className="btn waves-effect">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
