import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>

        <img src="images/mid.png" alt="TheMidnightBand" />
        <img src="images/squad.png" alt="Friends" />
        <img src="images/fam.png" alt="Family" /><br></br>
        <img src="images/guitar.png" alt="Guitar" />
        <img src="images/momz.png" alt="Mom" />
        <img src="images/studio.png" alt="Studio" /><br></br>
        <img src="images/work.png" alt="Work" />
        <img src="images/album.png" alt="Album" />
        <img src="images/RR.2.png" alt="Randy Rhoads" />
        {/* <GalleryList galleryList={this.state.galleryList} /> */}

      </div>
    );
  }
}

export default App; 