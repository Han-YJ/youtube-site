import React from 'react';

const Video = (props) => (
	<li className="video">
		<img className="video-thumbnail" src= ''alt="thumbnail"></img>
		<div className="video-info">
			<span className="info-title">{props.video.snippet.title}</span>
			<span className="info-userName"></span>
		</div>
	</li>
);

export default Video;
