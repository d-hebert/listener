export const fetchPlaylists = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists',
        error: (response) => (
            response
        )
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