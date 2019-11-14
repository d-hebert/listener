import { connect } from 'react-redux'
import AudioPlayer from './audio_player'
import { load } from '../../actions/session_actions'
import { prepareQueue } from '../../actions/queue_actions'

const msp = (state) => {
    const trackUrl = state.ui.currentTrack.url;
    const trackId = state.ui.currentTrack.id;
    const queue = state.ui.queue
    return {
        trackId,
        trackUrl,
        queue
    }
}

const mdp = (dispatch) => {
    return {
        load: (track) => dispatch(load(track)),
        prepareQueue: (queue) => dispatch(prepareQueue(queue))
        
    }
}

export default connect(msp, mdp)(AudioPlayer);