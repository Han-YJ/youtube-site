import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSearch(); 
    }
  }
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="video thumbnail"></img>
        <h1 className={styles.title}>Youtube</h1>
      </div>
			<input
        ref={inputRef}
        onKeyPress={onKeyPress}
				type="search"
				className={styles.input}
				placeholder="Search.."
			/>
			<button type="submit" className={styles.button} onClick={onClick}>
				<img className={styles.buttonImg} src="../images/search.png"></img>
			</button>
		</header>
	);
};
export default SearchHeader;
