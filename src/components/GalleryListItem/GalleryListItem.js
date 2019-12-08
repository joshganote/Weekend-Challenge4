import React, { Component } from 'react';
import './GalleryListItem.css';

class GalleryListItem extends Component {
    render() {

        return (
            <div>
                <img
                style={{width: 200, height: 200}}
                src={this.props.galleryItem}
                alt={''}
                />
                <br></br>
                <button className="clickable" onClick={() => this.props.imageLike(this.props.galleryItem.id)}>Like</button>
            </div>
        )
    }
}

export default GalleryListItem;
            