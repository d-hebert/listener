export const fetchPlaylists = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists',
        error: (response) => (
            response
        )
    })
}

export const createPlaylist = (playlist) => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: playlist
    })
}

export const AddToPlaylist = (playlistId, trackId) => {
    return $.ajax({
        method: 'EDIT',
        url: `/api/playlists/${playlistId}/edit`,
        data: trackId
    })
}

export const fetchPlaylist = (playlistId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlist/${playlistId}`,
    })
}

export const load = (track) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: track
    })
}