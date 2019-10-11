export const selectAllAlbums = (state) => {
   return Object.values(state.entities.albums);
}

export const selectAllPlaylists = (state) => {
   return Object.values(state.entities.playlists);
}

export const selectUserPlaylists = (state) => {
   const userId = Object.keys(state.entities.users)[0];
   const playlists = state.entities.playlists;
   const userPlaylists = [];
   Object.keys(playlists).forEach( (id) => {
      if (playlists[id].author_id == userId) {
         userPlaylists.push(playlists[id]);
      } 
   });
   return userPlaylists;
}