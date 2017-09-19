import React, {Component} from 'react'
import './Loader.css'
const $ = window.$

export default class Loader extends Component {

    componentDidLoad() {}
    render() {
        return (
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="box-holder animated bounceInDown">
                            <div className="container">
                                <div className="right">
                                    <h4 className="randoms"></h4>
                                    <h1 className="randoms"></h1>
                                    <h4 className="randoms"></h4>
                                </div>
                                <div className="left">
                                    <h4 className="randoms"></h4>
                                    <h1 className="randoms"></h1>
                                    <h4 className="randoms"></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}