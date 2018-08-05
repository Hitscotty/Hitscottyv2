import React, { Component } from "react";
import book from "../../images/icons/book.png";
import "./Experience.css";

function Ellipses(props) {
  if (props.popup) {
    return (
      <a
        href="index-normal.html#"
        className="modal-dot"
        data-toggle="modal"
        data-target={props.popup}
      >
        <i className="fa fa-ellipsis-h" aria-hidden="true" />
      </a>
    );
  }
  return null;
}

function TimeLineBlock(props) {
  let parallax = "timeline-block";
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
          <p>{props.summary}</p>

          <Ellipses popup={props.popup} />
        </div>
      </div>
    </div>
  );
}
export default class Experience extends Component {
  render() {
    if (!this.props.experience) {
      return null;
    }

    const timelineSection = this.props.experience.map(x => {
      return (
        <TimeLineBlock
          key={x.title}
          abrv={x.title[0]}
          title={x.title}
          subtitle={x.subTitle}
          hiatus={x.startDate + " - " + x.endDate}
          summary={x.summary}
        />
      );
    });

    return (
      <section id="experience" className="section">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center">
              <img src={book} alt="demo" />
              Experience
            </h4>
          </div>
          <div id="timeline-experience">{timelineSection}</div>
        </div>
      </section>
    );
  }
}
