import { connect } from 'react-redux'
import DisplayBlock from './display_block'
import { prepareQueue } from '../../actions/queue_actions'
import { load } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    return {
        content: ownProps.props
    }
}

const mdp = (dispatch) => {
    return {
        prepareQueue: (track_ids) => dispatch(prepareQueue(track_ids)),
        load: (track) => dispatch(load(track))
    }
}

export default connect(msp, mdp)(DisplayBlock);