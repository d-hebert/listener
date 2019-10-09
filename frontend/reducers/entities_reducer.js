import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import playlistReducer from './playlists_reducer';
// import { sessionReducer } from './sessionReducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    playlists: playlistReducer
});

export default entitiesReducer;
