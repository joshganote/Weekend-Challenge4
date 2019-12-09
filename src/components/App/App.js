import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';


class App extends Component {

  state = {
    galleryItem: [],
  };

  componentDidMount() {
    this.getImage();
  }
  getImage = () => {
    axios({
      method: 'GET',
      url: '/gallery/',
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

  // Am I using
  imageLike = (id) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + id,
    })
    .then((response) => {
      console.log('like');
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