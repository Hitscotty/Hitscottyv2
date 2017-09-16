import React, {Component} from 'react'
import ScottyLogo from '../images/logos/scottylogocard.png'

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <p className="text-center">
                        <a href="" target="_blank">
                            <strong>{this.props.name}</strong>
                        </a>
                        <img className="footer-logo" src={ScottyLogo}/>
                    </p>
                    <p className="text-center">
                        <strong>Built with React.js</strong>
                    </p>
                </div>
            </footer>
        )
    }
}