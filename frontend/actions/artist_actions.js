import * as APIUtil from '../util/artists_api_util'

export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST'

export const receiveOneArtist = (artist) => {
    return {
        type: RECEIVE_ONE_ARTIST,
        artist
    }
}

export const fetchArtist = (artistId) => (dispatch) => {
    return APIUtil.fetchArtist(artistId)
        .then( artist => dispatch(receiveOneArtist(artist)) )
}