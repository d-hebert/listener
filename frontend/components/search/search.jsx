import React from 'react';
import HomeIndex from '../home/home_index_container'

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            albums: props.entities.albums,
            artists: props.entities.artists,
            playlists: props.entities.artists,
            string: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        // look for albums in props
        // this.refs.searchBar.focus()
    }

    handleChange (e) {
        return (
           e => this.setState({ string: e.currentTarget.value })
        )
    }

    display () {
        return (
            <HomeIndex kind="search"/>
        )
    }

    render () {
        return (
            <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search for Artists, Albums, or Songs"
                    value={this.state.query}
                    onChange={this.handleChange} 
                    ref="searchBar"             
                />
            </div>
            {this.display()}
            </>
        )
    }
}

export default Search;