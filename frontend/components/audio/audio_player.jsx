import React from 'react';
import { Link } from 'react-router-dom'
import NowPlaying from './now_playing_container'

class AudioPlayer extends React.Component {
    constructor (props) {
        super(props)
        const shuffled = this.props.queue.slice().sort(() => (.5 - Math.random()))
        const origQueue = this.props.queue.slice();
        debugger
        this.state = {
            elapsedTime: '0:00',
            totalTime: '0:00',
            playing: false,
            trackId: undefined,
            trackUrl: this.props.trackUrl,
            volume: 65,
            muted: false,
            shuffled: false,
            queue: this.props.queue,
            repeating: false,
            origQueue,
        }
    }

    componentWIllMount () {
    }

    componentDidMount () {
        if (this.state.queue.length > 0) {
            this.props.load(this.state.queue[0])
        }
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
        this.audio.addEventListener('ended', () => {
            this.skip('forward');
        })
        this.currentTime = this.audio.currentTime;
        this.trackLength = trackLength
        this.timer = null;
        this.volume = document.getElementsByClassName("volume-bar")[0];
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

    shuffleButton () {
        if (this.state.shuffled === true) {
            return (<button className="player-buttons shuffle-true" onClick={() => this.shuffle('undo')}><i className="material-icons">shuffle </i></button>)
        } else if (this.state.shuffled === false) {
            return (<button className="player-buttons shuffle-false" onClick={() => this.shuffle('do')}><i className="material-icons">shuffle </i></button>)
        }
    }

    shuffle(check) {
        const shuffled = this.props.queue.slice().sort(() => (.5 - Math.random()));
        const original = this.props.queue.slice()
        switch (check) {
            case 'do':
                this.props.prepareQueue(shuffled);
                this.setState({ shuffled: true });
                break;
            case 'undo':
                this.props.prepareQueue(original);
                this.setState({ shuffled: false });
                break;
            default:
                break;
        }
    }

    repeatButton() {
        if (this.state.repeating === true) {
            return (<button className="player-buttons repeat-true" onClick={() => this.repeat('undo')}><i className="material-icons">repeat </i></button>);
        } else if (this.state.repeating === false) {
            return (<button className="player-buttons repeat-false" onClick={() => this.repeat('do')}><i className="material-icons">repeat </i></button>);
        }
    }

    repeat(check) {
        switch (check) {
            case 'do':
                this.audio.removeEventListener('ended', () => {
                    this.skip('forward');
                })
                this.audio.addEventListener('ended', () => {
                    this.audio.currentTime = 0; 
                    this.audio.play();
                })
                this.setState({ repeating: true });
                break;
            case 'undo':
                this.audio.removeEventListener('ended', () => {
                    this.audio.currentTime = 0;
                    this.audio.play();
                })
                this.audio.removeEventListener('ended', () => {
                    this.skip('forward');
                })
                this.setState({ repeating: false })
                break;
            default:
                break;
    }
    }

    skip(direction) {
        let newPos;
        let pos = this.props.queue.indexOf(this.props.trackId)
        let min = 0;
        let max = this.props.queue.length - 1
        switch (direction) {
            case 'back':
                this.audio.pause()
                this.setState({ playing: false });
                newPos = (pos - 1);
                if (newPos < min) {newPos = min}
                this.props.load({ id: this.props.queue[newPos] });
                this.setState({ trackId: this.props.queue[newPos] });
                this.audio.play();
                setTimeout(() => {
                    this.setState({ playing: true });
                    this.audio.play();
                }, 100) 
                break;
            case 'forward':
                this.audio.pause()
                this.setState({ playing: false });
                newPos = (pos + 1);
                if (newPos > max) { newPos = max }
                this.props.load({ id: this.props.queue[newPos] });
                this.setState({ trackId: this.props.queue[newPos] });
                setTimeout(() => {
                    this.setState({ playing: true });
                    this.audio.play();
                }, 100) 
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
        if (isNaN(time)) return '0:00';
        let min = Math.floor(time / 60)
        let sec = time % 60
        if ( min < 10 ) { min = min } 
        if ( sec < 10 ) { sec = '0' + sec }
        return (min + ':' + sec)
    }

    playPause () {
        const audio = this.audio
        if (audio && this.state.playing === false || audio && audio.paused) {
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
        if (this.audio === undefined) {
            return 100
        } else {
            if (this.audio.duration > 0) {
                return this.audio.duration
            }
            else {
                return 100  
            }
        }
    }

    progressScrub (e) {
        let pos = e.currentTarget.value
        this.audio.currentTime = pos
    }

    progressBar () {
        return(
            <>
        <span className="play-time">{this.state.elapsedTime}</span> 
        <input ref={(slider) => { this.slider = slider }}
            className="progress-bar"
            type="range"
            name="points"
            defaultValue="0"
            onChange={(e) => this.progressScrub(e)}
            min="0" max={this.handleLength()} />
        <span className="play-time">{this.state.totalTime}</span> 
        </>
        )
    }

    handleVolume (e) {
        let level = (e.currentTarget.value/100).toFixed(2)
        this.audio.volume = level
    }

    volumeSlider () {
        return (
            <input type="range"
                className="volume-bar"
                id="volume"
                min="0"
                max="100"
                defaultValue={this.state.volume}
                onChange={(e) => this.handleVolume(e)} />
        )
    }

    mute () {
        if (this.state.muted === true) {
            this.volume.value = 65;
            this.audio.muted = false; 
            this.setState({ muted: false })
        } else {
            this.volume.value = 0;
            this.audio.muted = true; 
            this.setState({ muted: true })
        }
    }

    muteButton () {
            if (this.state.muted === true) {
                return (
                    <button className="player-buttons mute-button" onClick={() => this.mute()}>
                        <i className="material-icons mute-button">
                            volume_off
                        </i>
                    </button>
                )
            } else if (this.state.muted === false) {
                return (
                    <button className="player-buttons mute-button" onClick={() => this.mute()}>
                        <i className="material-icons mute-button">
                            volume_up
                        </i>
                    </button>
                )
            }
    }

    render () {
        return (
            <div className="audio-player">
                <audio hidden controls className="html5-player" src={this.props.trackUrl} > </audio>
                <div className="audio-player-left">
                    <NowPlaying />
                </div>
                <div className="audio-player-mid">
                    {this.skipButton('back')}
                    {this.progressBar()}
                    {this.playPause()}
                    {this.skipButton('forward')}
                    {this.shuffleButton()}
                    {this.repeatButton()}
                </div>
                <div className="audio-player-right">
                    {this.muteButton()}
                    {this.volumeSlider()}
                </div>
            </div>
        )
    }
}

export default AudioPlayer;

