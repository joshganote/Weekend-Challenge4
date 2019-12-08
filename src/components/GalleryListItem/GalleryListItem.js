import React, { Component } from 'react';
import './GalleryListItem.css';

class GalleryListItem extends Component {
    
    
    render() {

        return (
            <div>
                <img
                style={{width: 200, height: 200}}
                src={this.props.image.galleryItem}
                alt={''}
                />
                <br></br>
                <div>
                <button className="clickable" onClick={() => this.props.imageLike(this.props.image.id)}>Like</button>
                <br></br>
                    <ul>
                        <p>Any hints to get started with like counter plz</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GalleryListItem;
            