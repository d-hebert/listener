import { connect } from 'react-redux'
import NowPlaying from './now_playing'

const msp = (state) => {
    const track = state.ui.currentTrack;
    return {
        track
    }

}

// const mdp = (dispatch) => {
//     return {
//     }
// }

export default connect(msp, null)(NowPlaying);