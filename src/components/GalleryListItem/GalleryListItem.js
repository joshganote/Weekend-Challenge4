import React, { Component } from 'react';
import './GalleryListItem.css';

class GalleryListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    clickImage = (event) => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        let showImage;
        let showDescription
        if (this.state.show) {
            showImage = 'showing';
            showDescription = 'showing'
        } else if (!this.state.show) {
            showImage = 'notShowing';
            showDescription = 'notShowing'
        }
        // const showDescription = this.state.showDescription;

        // if (showDescription) {
        //     showClick = 'isLiked';
        // } else if (!this.state.show) {
        //     showClick = 'notLiked'
        // }

        return (
            <div>
                <div >
                    <button onClick={this.clickImage}>Click for Description
                    <div className={showDescription}>
                        <p>{this.props.image.description}</p>
                    </div>
                        <img onClick={this.clickImage}
                            style={{ width: 200, height: 200 }}
                            src={'images/' + this.props.image.path}
                            description={this.props.image.description}
                            alt={''}
                        />
                    </button>
                </div>
                <br></br>
                <div>
                    <button className="clickable"
                        onClick={() => this.props.imageLike(this.props.image.likes)}>Like
                    </button>
                    {/* not sure what I'm doing at this point */}
                    <ul>
                        <p>{this.props.image.likes} People Liked Your Image!</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GalleryListItem;
