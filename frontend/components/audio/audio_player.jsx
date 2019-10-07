import React from 'react';
import { Link } from 'react-router-dom'
import NowPlaying from './now_playing_container'

class AudioPlayer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            elapsedTime: '0:00',
            totalTime: '0:00',
            playing: false,
            trackId: this.props.trackId,
            trackUrl: this.props.trackUrl
        }
    }

    componentDidMount () {
        this.audio = document.getElementsByClassName("html5-player")[0]
        let trackLength;
        this.audio.addEventListener('loadedmetadata', function () {
            trackLength = this.duration
        });
        this.audio.onplay = () => {
            this.currentTimeInterval = setInterval(() => {
                this.slider.value = this.audio.currentTime;
            }, 500);
        };
        this.currentTime = this.audio.currentTime;
        this.trackLength = trackLength
        this.timer = null;
    }

    handleClick(action) {
        switch (action) {
            case 'play':
                this.audio.play();
                this.timer = setInterval(() => this.tick(this.audio, action), 1000);
                this.setState({ playing: true });
                let time = Math.ceil(this.audio.duration)
                this.setState({ totalTime: this.formatTime(time) })
                break;
            case 'pause':
                this.audio.pause();
                clearInterval(this.timer);
                this.setState({ playing: false });
                break;
            default:
                break;
        }
    }

    skipButton (direction) {
       switch (direction) {
           case 'back':
               return (< button className="player-buttons back" onClick={() => this.skip(direction)} ><i className="fas fa-step-backward"></i></button >)
            case 'forward':
               return (<button className="player-buttons forward" onClick={() => this.skip(direction)} ><i className="fas fa-step-forward"></i></button >)
           default:
               break;
       }
    }

    skip(direction) {
        let newId;
        switch (direction) {
            case 'back':
                this.audio.pause()
                this.setState({ playing: false });
                newId = (this.state.trackId - 1);
                this.props.load({ id: newId });
                this.setState({ trackId: newId });
                break;
            case 'forward':
                this.audio.pause()
                this.setState({ playing: false });
                newId = (this.state.trackId + 1);
                this.props.load({ id: newId });
                this.setState({ trackId: newId });
                break;
            default:
                break;
        }
    }

    tick (audio, action) {   
        let time = Math.ceil(audio.currentTime);
        this.setState({elapsedTime: this.formatTime(time)})
    }

    formatTime(time) {
        let min = Math.floor(time / 60)
        let sec = time % 60
        if ( min < 10 ) { min = min } 
        if ( sec < 10 ) { sec = '0' + sec }
        return (min + ':' + sec)
    }

    playPause () {
        if (this.state.playing === false) {
            return (
            <button className="player-buttons play-pause" onClick={() => this.handleClick('play')}>
                <i className="material-icons md-48">play_circle_outline</i>
                </button>
            )
        } else {
            return (<button className="player-buttons play-pause" onClick={() => this.handleClick('pause')}>
                <i className="material-icons md-48">pause_circle_outline</i>
                </button>)
        }
    }

    handleLength () {
        if (this.tracklength === 'undefined') {
            return 100
        } else {
            return this.tracklength
        }
    }

    progressBar() {
        return(
            <>
        <span className="play-time">{this.state.elapsedTime}</span> 
        <input ref={(slider) => { this.slider = slider }}
            className="progress-bar"
            type="range"
            name="points"
            defaultValue="1"
            min="0" max={this.handleLength()} />
        <span className="play-time">{this.state.totalTime}</span> 
        </>
        )
    }

    render () {
        return (
            <div className="audio-player">
                <audio hidden controls className="html5-player" src={this.props.trackUrl}> </audio>
                <div className="audio-player-left">
                    <NowPlaying />
                </div>
                <div className="audio-player-mid">
                    {this.skipButton('back')}
                    {this.progressBar()}
                    {this.playPause()}
                    {this.skipButton('forward')}
                </div>
                <div className="audio-player-right"></div>
            </div>
        )
    }
}

export default AudioPlayer;

