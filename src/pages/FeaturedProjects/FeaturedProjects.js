import React, { Component } from "react";
import PostIcon from "../../images/icons/post-it.png";
import "./FeaturedProjects.css";

function ProjectCard(props) {
  const container = "featured-projects " + props.orientation;
  if (!props.skills) {
    return null;
  }

  return (
    <div className={container}>
      <div className="image">
        <img src={props.img} />
        <div className="image-overlay">
          <div className="comments">
            <i className="fa fa-user" />
            {props.title}
            <i className="fa fa-clock-o" />
            <time>{props.date}</time>
          </div>
        </div>
      </div>
      <div className="content">
        <ol className="breadcrumb">
          {props.skills.map(s => {
            return (
              <li key={s}>
                <a>{s}</a>
              </li>
            );
          })}
        </ol>
        <h6>Fullstack</h6>
        <p>{props.description}</p>
        <a className="forward" href={props.more}>
          Read More
        </a>
      </div>
    </div>
  );
}

export default class FeauredProjects extends Component {
  render() {
    const orient = i => (i % 2 === 0 ? "even" : "odd");

    if (!this.props.src) {
      return null;
    }

    return (
      <section id="featured-projects" className="section">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center">
              <img src={PostIcon} />
              Projects
            </h4>
          </div>
          <div id="featured-projects-card" className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card">
                {this.props.src.map((p, i) => {
                  return (
                    <ProjectCard
                      key={i}
                      orientation={orient(i)}
                      title={p.title}
                      date={p.date}
                      skills={p.summary.skills}
                      img={p.img}
                      description={p.summary.description}
                      more={p.more}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
