import React from 'react';

class DisplayBlock extends React.Component {
    constructor (props) {
        super (props)
    }

    title () {
        <h1></h1>
    }

    images () {
        debugger
        if (this.props.content !== undefined && this.props.content.length > 0) {
            return (
                <ul className="display-block-image-container">
                    <li className="display-block-image-item"><img src={this.props.content[0].cover_art} /></li>
                    <li className="display-block-image-item">
                        <button
                            className="button-hider"
                            onClick={() => this.props.prepareQueue(this.props.content[1].track_ids)}>
                                <img src={this.props.content[1].cover_art} />
                        </button>
                    </li>
                    <li className="display-block-image-item"></li>
                    <li className="display-block-image-item"></li>
                    <li className="display-block-image-item"></li>
                    <li className="display-block-image-item"></li>
                </ul>
            )
        } else {
            return (
                    <ul className="display-block-image-container">
                        <li className="display-block-image-item-blank"></li>
                        <li className="display-block-image-item-blank"></li>
                        <li className="display-block-image-item-blank"></li>
                        <li className="display-block-image-item-blank"></li>
                        <li className="display-block-image-item-blank"></li>
                        <li className="display-block-image-item-blank"></li>
                    </ul>
                )
            }
        
    }

    render () {
        return (
            <div className="display-block">
                    {this.images()}
                    {this.title()}
            </div>
        )
    }
}

export default DisplayBlock;