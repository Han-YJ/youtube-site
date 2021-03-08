import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(
  ({onSearch, onToggle}) => {
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

    const refeshPage = () => {
      window.location.reload();
    }

    return (
      <header className={styles.header}>
        <button className={styles.menuButton} onClick={onToggle}><img className={styles.menuImg} src="./images/sidemenu.png" alt="menu"/></button>
        <div className={styles.logo} onClick={refeshPage}>
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
          <img className={styles.buttonImg} src="../images/search.png" alt="searchImg"></img>
        </button>
      </header>
    );
  });
export default SearchHeader;
