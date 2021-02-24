import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBG89Z8O3205kaUt-BqtyOjxwhHpcWl14M',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log('error', error));
		console.log('useEffect');
  }, []);
  
	return (
    <>
      <Navbar></Navbar>
      <VideoList videos={videos}/>;
    </>
  )
}

export default App;
