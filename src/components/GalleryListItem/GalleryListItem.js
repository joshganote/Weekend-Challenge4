import React, { Component } from 'react';

class GalleryListItem extends Component {
    render() {

        return (
            <div>
                <img
                style={{width: 200, height: 200}}
                src={this.props.image}
                />
            </div>
        )
    }
}

export default GalleryListItem;
            