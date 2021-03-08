import styles from './app.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import SideMenu from './components/side_menu/side_menu';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	const search = useCallback(
		(query) => {
			youtube
				.search(query) //
				.then((videos) => {
					setVideos(videos);
					setSelectedVideo(null);
				})
				.catch((err) => console.log(err));
		},
		[youtube]
  );
  
  const category = useCallback(
    (categoryId) => {
      youtube
        .category(categoryId)
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        })
        .catch((err) => console.log(err));
    },
    [youtube]
  );

	useEffect(() => {
		youtube
			.mostPopular() //
			.then((videos) => setVideos(videos));
	}, [youtube]);

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search}></SearchHeader>
			<div className={styles.container}>
				<SideMenu onCategory={category}></SideMenu>
				<section className={styles.content}>
					{selectedVideo && (
						<div className={styles.detail}>
							{<VideoDetail video={selectedVideo}></VideoDetail>}
						</div>
					)}
					<div className={styles.list}>
						<VideoList
							videos={videos}
							onVideoClick={selectVideo}
							display={selectedVideo ? 'list' : 'grid'}
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
