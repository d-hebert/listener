import { connect } from 'react-redux'
import Search from './search'

const msp = (state) => {
    const entities = state.entities
    return {
        entities,
    }
}

const mdp = (dispatch) => {
    return {
        
    }
}


export default connect(msp, null)(Search);