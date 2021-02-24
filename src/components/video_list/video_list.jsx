import React from 'react';
import Video from '../video_item/video';

const VideoList = props => (
  <ul className="videoList">
		{props.videos.map((video) => (
			<Video key={video.id} video={video} />
		))}
	</ul>
);
  
export default VideoList;
