import './app.css';
import Navbar from './components/navbar';
import VideoList from './components/videoList';



import React, { Component } from 'react';

class App extends Component {
  state = {
    videoList: [
      {id: 1, thumbnail: '../images/logo.png',title: 'twice', userName: 'jyp'}, 
      {id: 2, thumbnail: '../images/logo1.png',title: 'twice1', userName: 'jyp'},
      {id: 3, thumbnail: '../images/logo2.png',title: 'twice2', userName: 'jyp'}
    ],
  };

  render() {
    console.log(this.state.requestOptions);
    return (
      <>
        <Navbar></Navbar>
        <VideoList
          videoList = {this.state.videoList}
        />
      </>
    );
  }
}

export default App;