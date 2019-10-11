import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class NewPlaylist extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    handleCreate () {
        const playlist = Object.assign({}, this.state)        
        this.props.createPlaylist(playlist)
    }

    update(field) {
        return (
            (e) => this.setState({ [field]: e.currentTarget.value })
        )
    }



    render () {
        return (
            <div className="playlist-modal-bg">
                <div className="playlist-modal">
                    <h1 className="new-playlist-header">Create new playlist</h1>
                    <span className="new-playlist-prompt">Playlist Name</span>
                    <input type="text" 
                        value={this.state.title}
                        onChange={this.update('title')}
                        className="new-playlist-input" 
                        placeholder="New Playlist" />
                    <div className="new-playlist-buttons">
                        <NavLink to="/browse" className="session-button playlist-button cancel" >CANCEL</NavLink>
                        <NavLink to="/browse" className="session-button playlist-button create" onClick={() => this.handleCreate()}>CREATE</NavLink>
                    </div>
                </div>
                    <div className="playlist-bar">
                    </div>

            </div>
        )
    }
}

export default NewPlaylist;