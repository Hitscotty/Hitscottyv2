import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import SkillsTable from '../components/SkillsTable.js'
import octoface from '../images/icons/octoface.svg'

export default class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {};

  }

  componentDidMount() {
    const url = "https://api.github.com/users/hitscotty/repos";
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
    const auth = "?client_id=b0cb77136b31f6f3248d&client_secret=ca43a6ad3610d78dfb13b0d779499340f1" +
        "fa8ae8&";

    fetch('https://api.github.com/search/repositories' + auth + 'q=user:hitscotty language:' + lang)
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
            <h4 className="text-uppercase text-center"><img src={octoface}/>Github Explorer</h4>
          </div>
          <div className="card">
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