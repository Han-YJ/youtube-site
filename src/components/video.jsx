import { findAllByTitle } from '@testing-library/react';
import React, { Component } from 'react';

class Video extends Component {
	render() {
    const {thumbnail, title, userName} = this.props.video;
		return (
			<li className="video">
				<img className="video-thumbnail" src={thumbnail} alt="thumbnail"></img>
        <div className="video-info">
          <span className="info-title">{title}</span>
          <span className="info-userName">{userName}</span>
        </div>
			</li>
		);
	}
}

export default Video;
