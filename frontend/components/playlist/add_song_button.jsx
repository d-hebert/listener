import React from 'react';

class AddSongButton extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            active: false,
        }
        this.removeMenu = this.removeMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.state.active = this.state.active.bind(this)
    }

    buildMenu (e) {
        e.preventDefault()
        if (this.state.active) {
            this.removeMenu()
        } else {
            this.setState({
                active: true
            }),
            document.addEventListener('click', this.removeMenu)
        }
    }

    removeMenu(e) {
        this.setState({
            active: false
        }),
        document.removeEventListener('click', this.removeMenu)
    }

    drawList () {
        const playlists = this.props.playlists
        const trackId = this.props.trackId
        if (playlists) {
            return (playlists.map(playlist =>
                    <li className="add-pl-item" key={playlist.id} onClick={() => this.handleClick(playlist.id, trackId)}>
                        {playlist.title}
                    </li>
            ))
        }
    }

    handleClick (playlistId, trackId) {
        this.props.addToPlaylist(playlistId, trackId)
    }

    render () {
        if (this.props.loggedIn) {
            return (
                <>
                    <button className="add-button" onClick={(e) => this.buildMenu(e)}>
                        <i className="material-icons md-18">add</i>
                    </button>
                    { this.state.active ? (
                        <ul className="add-pl-menu">
                            {this.drawList()}
                        </ul>
                        // <div className="add-pl-menu-cont">
                        //     <ul className="add-pl-menu">
                        //         {this.drawList()}
                        //     </ul>
                        // </div>
                        ) : (null)
                    }
                </>
            ) 
                } else return (<></>)
    }
}

export default AddSongButton; 