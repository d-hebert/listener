import { connect } from 'react-redux'
import AudioPlayer from './audio_player'

const msp = (state) => {
    // might need to use ownProps for styling dets
    const trackUrl = window.trackUrl;
    // will need to flesh this out...
    return {
        trackUrl
    }
}

// const mdp = (dispatch) => {
//     return {
        
//     }
// }

export default connect(msp, null)(AudioPlayer);