import { connect } from 'react-redux'
import DisplayBlock from './display_block'
import { prepareQueue } from '../../actions/queue_actions'

const msp = (state, ownProps) => {
    return {
        content: ownProps.props
    }
}

const mdp = (dispatch) => {
    return {
        prepareQueue: (track_ids) => dispatch(prepareQueue(track_ids))
    }
}

export default connect(msp, mdp)(DisplayBlock);