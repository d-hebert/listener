import React from 'react';
import { Link } from 'react-router-dom';
import home_index_container from './home_index_container';
import LoadingFilter from '../loading';
import DisplayBlock from '../display/display_block_container'

class HomeIndex extends React.Component {
    constructor (props) {
        super(props)
        // this.state = {
        //     albums: []
        // }
    }

    componentDidMount () {
        this.props.fetchAlbums()
        // this.props.albums.map( album =>
        //    this.state.albums.push(album) )
    }

    formatAlbums () {
        let albums = this.props.albums
        return ( 
            <DisplayBlock key={albums} props={albums} /> 
        )
    }

    formatPlaylists() {
        // /////////playlists not yet implemented:
        // return (
        //     this.props.playlists.map(playlist =>
        //         <DisplayBlock key={playlist.id} props={playlist} />
        //     )
        // )
        return (
            <DisplayBlock />
        )
    }

    render () {
        let loading = this.props.loading
        console.log("loading? " + loading)
        if (loading) {
            return (
                <LoadingFilter />
            )
        debugger
        } else {
            return (
                <div className="index-main">
                        <h2>Albums</h2>
                    <div className="index-part index-albums">
                            {this.formatAlbums()}
                    </div>
                        <h2>Playlists</h2>
                    <div className="index-part index-playlists">
                            {this.formatPlaylists()}
                    </div>
                </div>
            )
        }
    }
}

export default HomeIndex;