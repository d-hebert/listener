import React from 'react';
import { Link } from 'react-router-dom';
import home_index_container from './home_index_container';
import LoadingFilter from '../loading';
import DisplayBlock from '../display/display_block_container'

class HomeIndex extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchAlbums();
        this.props.fetchPlaylists();
    }

    formatAlbums () {
        return ( 
            <DisplayBlock key={1} props={this.props.albums} /> 
        )
    }

    formatPlaylists() {
        return (
                <DisplayBlock key={2} props={this.props.playlists}/>
        )
    }

    render () {
        let loading = this.props.loading
        // console.log("loading? " + loading)
        if (loading) {
            return (
                <LoadingFilter />
            )
        } else if (this.props.kind) {
            return (
                <div className="index-main search-index">
                    <div className="index-part index-albums">
                        {this.formatAlbums()}
                    </div>
                    <div className="index-part index-playlists">
                        {this.formatPlaylists()}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="index-main">
                    <h2 className="home-header">Albums</h2>
                        <div className="index-part index-albums">
                                {this.formatAlbums()}
                        </div>
                    <h2 className="home-header">Playlists</h2>
                        <div className="index-part index-playlists">
                                {this.formatPlaylists()}
                        </div>
                </div>
            )
        }
    }
}

export default HomeIndex;