import React from 'react';
import styles from './video.module.css';

const Video = ({ video: { snippet } }) => (
	<li className={styles.container}>
		<div className={styles.video}>
			<img
				className={styles.thumbnail}
				src={snippet.thumbnails.medium.url}
				alt="thumbnail"
			></img>
			<div className={styles.metadata}>
				<p className={styles.title}>{snippet.title}</p>
				<p className={styles.channel}>{snippet.channelTitle}</p>
			</div>
		</div>
	</li>
);

export default Video;
