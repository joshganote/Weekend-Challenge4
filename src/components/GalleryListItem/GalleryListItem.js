import React, { Component } from 'react';
import './GalleryListItem.css';

class GalleryListItem extends Component {
    // constructor(props) {
    //     super(props);

    //     this.handleImageDescription = this.handleImageDescription.bind(this);
    //     this.handleImageNoDescription = this.handleImageNoDescription.bind(this);
    //     this.state = {showDescription: false};
    // }

    // handleImageDescription() {
    //     this.setState({
    //         showDescription: true
    //     });
    // }

    // handleImageNoDescription() {
    //     this.setState({
    //         showDescription: false
    //     });
    // }
    
    
    render() {
        // const showDescription = this.state.showDescription;

        // if (showDescription) {
        //     showClick = 'isLiked';
        // } else if (!this.state.show) {
        //     showClick = 'notLiked'
        // }

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
                        <p>Any help with conditional render for img click and likes?</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GalleryListItem;
            