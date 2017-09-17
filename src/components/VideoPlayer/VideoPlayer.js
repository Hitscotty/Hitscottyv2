import React, {Component} from 'react';
import $ from 'jquery'
import './VideoPlayer.css'

export default class VideoPlayer extends Component {

    componentDidMount() {
        $('#html-video').addClass('hidden');
        $('#play-btn').on('click', function () {
            var htmlVideo = '#html-video';
            var vCard = '#v-card';
            var playButtonHolder = '#button-holder';
            var playIcon = '#icon-play';
            $(playButtonHolder).addClass('middle');
            setTimeout(function () {
                $(vCard).addClass('hide-overflow');
                $('body').addClass('scale-effect');
                $(vCard).addClass('height-change');
            }, 600);
            setTimeout(function () {
                $(playIcon).hide();
                $(htmlVideo).removeClass('hidden');
                $(htmlVideo)[0].play();
                $('#play-btn').addClass('black');
            }, 1000);
        });
        $('#close-btn').on('click', function () {
            var htmlVideo = '#html-video';
            var vCard = '#v-card';
            var playButtonHolder = '#button-holder';
            var playIcon = '#icon-play';
            $('body').removeClass('scale-effect');
            setTimeout(function () {
                $(playIcon).show();
                $(playButtonHolder).removeClass('middle');
                $(vCard).removeClass('hide-overflow');
            }, 1000);
            $(vCard).removeClass('height-change');
            $(htmlVideo).addClass('hidden');
            $(htmlVideo)[0].pause();
            $('#play-btn').removeClass('black');
        });
    }

    render() {
        return (
            <div>
                <div id="button-holder" className="btn-holder">
                    <div id="play-btn" className="btn-floating btn-large btn-play">
                        <i id="icon-play" className="material-icons">play_arrow</i>
                    </div>
                </div>
                <div id="close-btn" className="btn-floating icon-close">
                    <i className="fa fa-close"></i>
                </div>

                <video
                    id="html-video"
                    className="video hide"
                    poster="images/poster/poster.jpg "
                    controls>
                    <source src="videos/b.webm" type="video/webm"/>
                    < source src="videos/a.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}