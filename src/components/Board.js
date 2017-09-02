import React, {Component} from 'react';

export default class Board extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="section">
                <div className="container center-text">
                    <h1 className="title">
                        {this.props.title}
                    </h1>
                    <h2 className="subtitle">
                        {this.props.subtitle}
                    </h2>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
