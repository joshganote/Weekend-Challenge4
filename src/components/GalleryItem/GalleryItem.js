import React, { Component } from 'react';
import './GalleryItem.css';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryItem extends Component {

    render() {
        const htmlArray = this.props.galleryItem.map((item, index) => {
            return (

                <GalleryListItem key={index} image={item} 
                imageLike={this.props.imageLike} />
            )
        })
        return (
            <div className="imgLayout">
                {htmlArray}
            </div>
        )
    }
}

export default GalleryItem;