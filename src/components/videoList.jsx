import React, { Component } from 'react';
import Video from './video';


class VideoList extends Component {
  render() {
    const {id, thumbnail, title, userName} = this.props.videoList;
    console.log(this.props.videoList);
    return (
      <>
        <ul className="videoList">
         {this.props.videoList.map((video) => (
            <Video
              key={video.id}
              video={video}
            />
          ))}   
        </ul>        
      </>
    );
  
  }
}

export default VideoList;