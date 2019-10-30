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
                            pathname: `/playlist/${playlist.id}`,
                            playlist_id: `${playlist.id}`
                        }}
                        // maybe pass playlistid as a prop
                        className="track-artist-link playlist-link" >
                        {playlist.title}
                    </NavLink>
                </li>
            )
        }
    }

    render () {
        if (this.props.playlists.length > 0 && this.props.loggedIn) {
            return (
            <div className="user-playlist-container" id="test">
                    <NavLink exact to="/new" className="site-nav-link create-pl-link">
                        <span className="nav-icons"><i className="material-icons nav-icons">playlist_add</i></span>
                        <span className="nav-text create-pl">Create Playlist</span>
                    </NavLink>
                <ul className="user-playlist-list">
                    <li className="playlist-link nav-sub-header">PLAYLISTS</li>
                    {this.formatPlaylists()}
                </ul>
            </div>
        )} else {
            return null;
        }
    }

}

export default UserPlaylists;