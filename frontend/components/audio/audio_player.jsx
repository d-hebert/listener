import React from 'react'

class AudioPlayer extends React.Component {
    constructor () {
        super()
    this.state = {
        elapsedTime: '00:00'
        
    }
    // this.setInterval = this.setInterval.bind(this)
    // const audio = document.getElementsByTagName("audio");
    }

    componentDidMount () {
        this.audio = document.getElementsByClassName("html5-player")[0]
        this.currentTime = this.audio.currentTime;
        this.trackLength = this.audio.duration;
        console.log(this.currentTime);
        this.timer = null;
    }

    handleClick(action) {
        console.log(action)
        console.log(this.audio)
        switch (action) {
            case 'play':
                this.audio.play();
                this.timer = setInterval(() => this.tick(this.audio, action), 1000);
                break;
            case 'pause':
                this.audio.pause();
                clearInterval(this.timer)
                break;
            default:
                break;
        }
    }

    shiftProgressBar() {

    }

    tick (audio, action) {   
        let time = Math.ceil(audio.currentTime)
        this.setState({elapsedTime: this.formatTime(time)})
    }

    formatTime(time) {
        let min = Math.floor(time / 60)
        let sec = time % 60
        if ( min < 10 ) { min = '0' + min } 
        if ( sec < 10 ) { sec = '0' + sec }
        return (min + ':' + sec)
    }

    render () {
        return (
            <div className="audio-player">
                <div className="audio-player-left"></div>
                <div className="audio-player-mid">
                    {this.state.elapsedTime}
                    <button className="player-buttons play-pause" onClick={() => this.handleClick('play')}><i className="material-icons">play_circle_outline</i></button>
                    <button onClick={() => this.handleClick('pause')}>ll</button>
                </div>
                <div className="audio-player-right"></div>
            </div>
        )
    }
}

export default AudioPlayer;

