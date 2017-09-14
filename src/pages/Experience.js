import React, {Component} from 'react'
import book from '../images/icons/book.png'

function Ellipses(props) {
    if (props.popup) {
        return (
            <a
                href="index-normal.html#"
                className="modal-dot"
                data-toggle="modal"
                data-target={props.popup}>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </a>
        )
    }
    return null;
}

function TimeLineBlock(props) {
    let parallax = "timeline-block"
    if (props.parallax) {
        parallax = "parallax " + parallax;
    }
    return (
        <div className={parallax}>
            <div className="timeline-dot">
                <h6>{props.abrv}</h6>
            </div>
            <div className="card timeline-content">
                <div className="card-content">
                    <h6 className="timeline-title">{props.title}</h6>
                    <div className="timeline-info">
                        <h6>
                            <small>{props.subtitle}</small>
                        </h6>
                        <h6>
                            <small>{props.hiatus}</small>
                        </h6>
                    </div>
                    <p>
                        {props.summary}
                    </p>

                    <Ellipses popup={props.popup}/>
                </div>
            </div>
        </div>
    )
}
export default class Experience extends Component {
    render() {
        return (
            <section id="education" className="section">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-uppercase text-center">
                            <img src={book} alt="demo"/>
                            Experience
                        </h4>
                    </div>
                    <div id="timeline-education">

                        <TimeLineBlock
                            abrv="L"
                            parallax="true"
                            title="Lehman College"
                            subtitle="senior college of the City University of New York"
                            hiatus="Sep 2012 - Jun 2016"
                            summary="I completed a Bachelors Degree in Computer Science. Completed all my classes."/>

                        <TimeLineBlock
                            abrv="G"
                            title="Google Bootcamp"
                            subtitle="Google/Code-to-Work"
                            hiatus="Jun 2016 - Jul 2016"
                            summary="Implemented concepts from Data Structures and Algorithms as well as Artificial Intelligence. Designed and Developed games using Android Studio.  Received mentorship from professional engineers and facilitators at Google. Learned about Trie Graphs."/>

                        <TimeLineBlock
                            abrv="C"
                            title="Summer Student"
                            subtitle="Beyond Coding"
                            hiatus="Jul 2016 - Aug 2016"
                            summary="Networked with other developers and companies in the NYC area and worked collaboratively with them to develop and build leadership skills. We Practiced Agile code development methodologies. I learned how to pick up and adapt to new technologies as well as explaining complex, technical projects to many different types of teams."/>

                        <TimeLineBlock
                            abrv="O"
                            parallax="true"
                            title="Online Computers"
                            subtitle="Software Engineer"
                            hiatus="Mar 2017 - Present"
                            summary="Full stack developer working on a CRM technology. Responsible for developing company API, implementing UI in web app and maintaining the mobile app. Using angular, ionic/xamarin and asp.net."
                            popup="#myModal-2"/>
                    </div>
                </div>
            </section>
        )
    }
}