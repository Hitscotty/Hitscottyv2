import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Board from '../../components/Board.js'
import LineDivider from '../../components/LineDivider.js'
import './About.css'

export default class About extends Component {

    render() {
        return (
            <div>
                <Board title="Programmer" subtitle="I'm a languages guy">
                    <p>
                        On my free time I enjoy being on Hackerrank solving problems. Programming is
                        something I enjoy doing it is an outlet for me to relieve stress, relax, and
                        think. The thinking process is very therapeutic and gives me a feeling of
                        euphoria when I finally find a solution. In particular I like to recreate my
                        favorite puzzle games with creative programming approaches to add to the
                        challenge and fun. I'm currently very into functional programming and takes up
                        most of my free time.
                    </p>
                </Board>
                <LineDivider/>
                <Board
                    title="Scientist"
                    subtitle="I embrace the human curiosity, the human thirst for discovery">
                    <p>
                        I am seeking to explore many aspects of the technology field and my ultimate
                        goal is to contribute quality research to push the boundaries of what is
                        currently possible. I am fascinated by machine learning and wish to study the
                        science of its algorithms.
                    </p>
                </Board>
                <LineDivider/>
                <Board
                    title="Writer"
                    subtitle="The effort of trying brings me peace, joy, and harmony.">
                    <div className="content">
                        <p>
                            I enjoy writing creatively. Exploring philosophy and the boundaries of the inner
                            mind.
                        </p>

                        <blockquote>
                            Without a doubt we all live based on our own viewpoint of life and to remove
                            oneself of this viewpoint is to embrace the possibility of error and seek truth.
                            Philosophy is the art of questioning, but I believe the “practice” of philosophy
                            can be beneficial to actually gaining understanding specifically in one another
                            regardless of what philosophical question we ask. One thing we know is that
                            answers can always be argued, but a question can never be argued as it is merely
                            a question. A question must always be accepted and so we can all agree on a
                            question. In this domain we are forced into the same viewpoint, forced to see
                            the world through the same lens. In a way I’m beginning to see philosophy as
                            “implicit”, a hidden language where communication is done by question. Allowing
                            one to accurately communicate.
                        </blockquote>
                    </div>
                </Board>
                <LineDivider/>
                <Board title="Skateboarder" subtitle="I'm a decent skater if I say so myself">
                    <div className="content">
                        <p>
                            To stimulate the creative process and my productivity I'll go to a skatepark and
                            skate to remove my mind from work. I find when I'm stuck, skateboarding is the
                            perfect catalyst to reaching a solution.
                        </p>
                    </div>
                </Board>
            </div>
        );
    }
}