import React from 'react';
import styles from '../Item/Item.module.scss'


const Item = ({itemData: {id, img, name, dateOfBirth, oblast, city }}) => {

  return (
    <li key={id} className={styles.item}>
      <img className={styles.img} src={img} alt={id} />
      <div className={styles['item-description']}>
        <h3 className={styles['item-title']}>{name}</h3>
        <p className={styles.date}>{dateOfBirth}</p>
        <p className={styles.description}>Область: {oblast}</p>
        <p className={styles.description}>Місто: {city}</p>
      </div>
    </li>
  );
};

export default Item;
