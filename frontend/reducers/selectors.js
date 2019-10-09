export const selectAllAlbums = (state) => {
   return Object.values(state.entities.albums);
}