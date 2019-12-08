import React, { Component } from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryItem extends Component {

    render() {
        const htmlArray = this.props.galleryItem.map((item, index) => {
            return (

                <GalleryListItem key={index} image={item} />
            )
        })
        return (
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default GalleryItem;