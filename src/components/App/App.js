import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';


class App extends Component {

  state = {
    galleryItem: [
      {image: 'images/mid.png', alt:'TheMidnightBand'},
      {image: 'images/squad.png', alt:'Friends'},
      {image: 'images/fam.png', alt:'Family'},
      {image: 'images/guitar.png', alt:'Guitar'},
      {image: 'images/momz.png', alt:'Mom'},
      {image: 'images/studio.png', alt:'Studio'},
      {image: 'images/work.png', alt:'Work'},
      {image: 'images/RR.2.png', alt:'Randy_Rhoads'},
    ],
  };

  componentDidMount() {
    this.getImage();
  }
  getImage = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    .then((response) => {
      this.setState({
        galleryItem: response.data
      }, () => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Am I using the correct data?
  imageLike = (galleryId, id) => {
    axios({
      method: 'PUT',
      url: '/like/' + id,
      data: {
        galleryId: galleryId
      }
    })
    .then((response) => {
      console.log('like', response);
      this.getImage();
    })
    .then((err) => {
      console.log('no like', err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>

        <GalleryItem galleryItem={this.state.galleryItem} imageLike={this.imageLike} />

      </div>
    );
  }
}

export default App; 