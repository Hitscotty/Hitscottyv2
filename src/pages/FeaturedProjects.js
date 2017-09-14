import React, {Component} from 'react';
import PostIcon from '../images/icons/post-it.png';

function ProjectCard(props) {
    const container = "blog " + props.orientation;
    if (!props.skills) {
        return null;
    }

    return (
        <div className={container}>
            <div className="image">
                <img alt="project-image" src={props.img}/>
                <div className="image-overlay">
                    <div className="comments">
                        <i className="fa fa-user"></i>
                        {props.title}
                        <i className="fa fa-clock-o"></i>
                        <time>{props.date}</time>
                    </div>
                </div>
            </div>
            <div className="content">
                <ol className="breadcrumb">
                    {props
                        .skills
                        .map(s => {
                            return (
                                <li>
                                    <a>
                                        {s}
                                    </a>
                                </li>
                            )
                        })
}

                </ol>
                <h6>Fullstack</h6>
                <p>
                    Web design, mobile design, and api developer. Developed UX experiences and
                    created scalable solutions for server side data that integrated smoothly with
                    client side needs.
                </p>
                <a className="forward" href="single-blog.html">Read More</a>
            </div>
        </div>
    )
}

export default class FeauredProjects extends Component {
    render() {

        const orient = i => i % 2 == 0
            ? "even"
            : "odd";

        if (!this.props.src) {
            return null;
        }

        return (
            <section id="blog" className="section">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-uppercase text-center"><img src={PostIcon} alt="Projects"/>
                            Projects</h4>
                    </div>
                    <div id="blog-card" className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card">

                                {this
                                    .props
                                    .src
                                    .map((p, i) => {
                                        return (<ProjectCard
                                            key={i}
                                            orientation={orient(i)}
                                            title={p.title}
                                            date={p.date}
                                            skills={p.summary.skills}
                                            img={p.img}
                                            description={p.summary.description}/>)
                                    })
}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}