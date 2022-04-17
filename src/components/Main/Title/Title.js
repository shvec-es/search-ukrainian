import React from 'react';
import styles from './Title.module.scss'

const TitleMain = () => {
  return (
    <div className={styles['title-container']}>
      <h2 className={styles['title-title']}>Пошук</h2>
    </div>
  );
};

export default TitleMain;
