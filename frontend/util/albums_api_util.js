export const fetchAlbums = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/albums',
        error: (response) => (
            response
        )
    })
}

export const fetchAlbum = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`,
    })
}

export const load = (track) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: track
    })
}