import React, {Component} from 'react'

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <p className="text-center">
                        <a href="" target="_blank">
                            <strong>{this.props.name}</strong>
                        </a>
                    </p>
                    <p className="text-center">
                        <strong>Built with React.js</strong>
                    </p>
                </div>
            </footer>
        )
    }
}