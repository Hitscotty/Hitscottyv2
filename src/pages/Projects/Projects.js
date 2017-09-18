import React, {Component} from 'react'

import SkillsTable from '../../components/SkillsTable/SkillsTable.js'
import octoface from '../../images/icons/octoface.svg'

export default class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {};

  }

  componentDidMount() {
    const languages = [
      "Java",
      "Haskell",
      "Python",
      "Ruby",
      "Javascript",
      "Html"
    ];
    this.setState({languages: languages})
    this.getProjects("Haskell");

  }

  getProjects(lang) {
    const token = "&access_token=525702c516206aa8a44179b76aa3d9c36531fc6d";
    fetch(`https://api.github.com/search/repositories?q=user:hitscotty language:${lang}${token}`)
      .then(d => d.json())
      .then(data => {
        this.setState({gitHubData: data.items});
      })

  }

  render() {
    if (!this.state.languages) {
      return <p>
        Loading
      </p>
    }
    return (

      <section id="projects" className="section">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center"><img alt="octoface" src={octoface}/>Github Explorer</h4>
          </div>
          <div className="card projects-card">
            <div className="card-content">
              <SkillsTable
                languages={this.state.languages}
                update={this
                .getProjects
                .bind(this)}
                repos={this.state.gitHubData}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}