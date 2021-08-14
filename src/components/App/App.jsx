import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';


function App() {

  const [galleryList, setGalleryList] = useState([]);
    //Don't forget useEffect here to load
  useEffect(() => {
    fetchGalleryList();
  }, []);

    //GET data from gallery
  const fetchGalleryList = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      console.log('GET /gallery', response.data)
      setGalleryList(response.data)

    }).catch((error) => {
      console.log('GET /gallery', error)
    });
  }



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList = {galleryList} />
        

      </div>
    );
}

export default App;
