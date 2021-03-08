import React, { memo } from 'react';
import styles from "./side_menu.module.css";

const SideMenu = memo(
  ({onCategory}) => {
    const handleCategory = (item) => {
      const categoryId = item.currentTarget.dataset.id;
      onCategory(categoryId);
    }

  return (
      <div className={styles.menu}>
        <ul className={styles.categories}>
          <li className={styles.category}>
            <img className={styles.img} onClick={handleCategory.bind(this)} data-id="10" src="./images/headphones.png" alt="music"/>
            <span className={styles.title}>Music</span>
          </li>
          <li className={styles.category}>
            <img className={styles.img} onClick={handleCategory.bind(this)} data-id="24" src="./images/tv.png" alt="entertainment"/>
            <span className={styles.title}>Entertainment</span>
          </li>
          <li className={styles.category}>
            <img className={styles.img} onClick={handleCategory.bind(this)} data-id="27" src="./images/reading.png" alt="edu"/>
            <span className={styles.title}>Education</span>
          </li>
          <li className={styles.category}>
            <img className={styles.img} onClick={handleCategory.bind(this)} data-id="17" src="./images/sport.png" alt="sports"/>
            <span className={styles.title}>Sports</span>
          </li>
          <li className={styles.category}>
            <img className={styles.img} onClick={handleCategory.bind(this)} data-id="20" src="./images/game.png" alt="game"/>
            <span className={styles.title}>Game</span>
          </li>
        </ul>
      </div>
    )
});  

export default SideMenu;