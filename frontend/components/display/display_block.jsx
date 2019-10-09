import React from 'react';

class DisplayBlock extends React.Component {
    constructor (props) {
        super (props)
    }

    title () {
        <h1></h1>
    }

    handleClick (index) {
        this.props.prepareQueue(this.props.content[index].track_ids);
        this.props.load({id: (this.props.content[index].track_ids[0])})
    }

    imageItem (index) {
        return (
            <li className="display-block-image-item"
                style={{
                    backgroundImage: `url(${this.props.content[index].cover_art})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <button
                    className="button-hider"
                    onClick={() => this.handleClick(index)}
                    style={{
                        backgroundImage: `url(${this.props.content[index].cover_art})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <i className="material-icons md-48 index-play">play_circle_outline</i>
                </button>
            </li>
        )
    }

    blankItem () {
        return (
            <li className="display-block-image-item-blank"></li>
        )
    }

    images () {
        if (this.props.content !== undefined && this.props.content.length > 0) {
            return (
                <ul className="display-block-image-container">
                    {this.imageItem(0)}
                    {this.imageItem(1)}
                    {this.imageItem(2)}
                    {this.imageItem(3)}
                    {this.imageItem(4)}
                    {this.imageItem(5)}
                </ul>
            )
        } else {
            return (
                    <ul className="display-block-image-container">
                        {this.blankItem()}
                        {this.blankItem()}
                        {this.blankItem()}
                        {this.blankItem()}
                        {this.blankItem()}
                        {this.blankItem()}
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