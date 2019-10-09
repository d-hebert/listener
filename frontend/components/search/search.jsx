import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            string: ""
        }
    }

    handleChange () {
        return (
           e => this.setState({ string: e.currentTarget.value })
        )
    } 

    render () {
        return (
            <div className="search-container">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search for Artists, Albums, or Songs"
                    value={this.state.query}
                    onChange={this.handleChange}              
                />
            </div>
        )
    }
}

export default Search;