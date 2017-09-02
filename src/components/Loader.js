import React, {Component} from 'react'

export default class Loader extends Component {

    render() {
        return (
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="box-holder animated bounceInDown">
                            <span className="load-box">
                                <span className="box-inner"></span>
                            </span>
                        </div>
                        <div className="text-holder text-center">
                            <h2>{this.props.name}</h2>
                            <h6>{this.props.title}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}