export const selectAllAlbums = (state) => {
   return Object.values(state.entities.albums);
}

export const selectAllPlaylists = (state) => {
   return Object.values(state.entities.playlists);
}