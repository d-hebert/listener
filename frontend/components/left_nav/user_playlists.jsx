import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PlaylistShow from '../playlist/playlist_show_container';


class UserPlaylists extends React.Component {
    constructor (props) {
        super(props)

    }

    formatPlaylists () {

        if (this.props.playlists) {
            return this.props.playlists.map(playlist =>
                <li className="playlist-item">
                    <NavLink
                        exact to={{
                            pathname: "/playlist",
                            playlist_id: `${playlist.id}`
                        }}
                        className="track-artist-link playlist-link" >
                        {playlist.title}
                    </NavLink>
                </li>
            )
        }
    }

    render () {
        if (this.props.playlists.length > 0) {
            return (
            <div className="user-playlist-container" id="test">
                <NavLink exact to="/new" className="site-nav-link create-pl-link">
                    <span className="nav-icons"><i className="material-icons nav-icons">playlist_add</i></span>
                    <span className="nav-text">Create Playlist</span>
                </NavLink>
                <ul className="user-playlist-list">
                    {this.formatPlaylists()}
                </ul>
            </div>
        )} else {
            return null;
        }
    }

}

export default UserPlaylists;