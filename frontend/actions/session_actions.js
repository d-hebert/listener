import * as APIUtil from '../util/session_api_util'

import { renderErrors } from '../util/errors_util'

import { browserHistory } from 'react-router'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK'

import { closeModal } from '../actions/modal_actions';


export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
}

export const clearErrors = () => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: []
    }
}

export const receiveCurrentTrack = (track) => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        track: track
    }
}



export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
        .then( user => dispatch(receiveCurrentUser(user)))
        .then( () => dispatch(closeModal()) )
        .then( () => dispatch(clearErrors()))
        .fail( response => dispatch(receiveErrors(response.responseJSON)))
}

export const logout = () => (dispatch) => {
    return APIUtil.logout().then( () => dispatch(logoutCurrentUser()))
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then( user => dispatch(receiveCurrentUser(user)))
        .then( dispatch(closeModal()) )
        .then( () => dispatch(clearErrors()) )
        .fail(response => dispatch(receiveErrors(response.responseJSON)))
}

export const load = (track) => (dispatch) => {
    return APIUtil.load(track)
        .then(track => dispatch(receiveCurrentTrack(track)))
}