import React, {Component} from 'react'
import './SkillsTable.css'
import 'octicons'

function ProjectItem(repo) {
    return (
        <tr key={repo.html_url}>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>
                <a href={repo.html_url} className="social btn-floating">
                    <i className="devicon-github-plain"></i>
                </a>
            </td>
        </tr>
    );
};

function SkillsList(props) {

    const dict = {
        Java: "devicon-java-plain-wordmark",
        Javascript: "devicon-javascript-plain colored",
        Python: "devicon-python-plain-wordmark",
        Ruby: "devicon-ruby-plain-wordmark colored",
        Haskell: "icon-haskell",
        Html: "devicon-html5-plain-wordmark"
    }
    const _skills = props.skills;
    const skills = _skills.map(title => {
        return (
            <a
                onClick={() => props.update(title)}
                className="social btn-floating indigo"
                key={title}>
                <i className={dict[title]}></i>
            </a>
        );
    })

    return (
        <div className="links equal-spacing">
            {skills}
        </div>
    )
}

export default class SkillsTable extends Component {
    render() {

        if (!this.props.repos) {
            return (
                <p>
                    Loading
                </p>
            )
        }

        return (
            <div>
                <SkillsList skills={this.props.languages} update={this.props.update}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                            <th>GitHub</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .repos
                            .map(ProjectItem)}
                    </tbody>

                </table>
            </div>
        );
    }
}
