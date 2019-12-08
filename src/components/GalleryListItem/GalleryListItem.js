import React, { Component } from 'react';

class GalleryListItem extends Component {
    render() {

        return (
            <div>
                <img 
                src={this.props.image}
                />
            </div>
        )
    }
}

export default GalleryListItem;
            