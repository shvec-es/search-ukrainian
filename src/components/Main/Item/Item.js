import React, { useState } from 'react';
import styles from '../Item/Item.module.scss';

const Item = ({
  itemData: {
    _id: id,
    picture,
    name,
    surname,
    midname,
    birth_year,
    region,
    city,
    description,
  },
}) => {
  const [openInfo, setOpenInfo] = useState(false);

  const toOpenAllInfo = () => {
    setOpenInfo(prevState => !prevState);
  };

  return (
    <li
      key={id}
      className={!openInfo ? styles.item : styles.item + ' ' + styles.open}
      onClick={toOpenAllInfo}
    >
      <img
        className={styles.picture}
        src={`http://localhost:8989/${picture}`}
        alt={id}
      />
      <div className={styles['item-description']}>
        <h3 className={styles['item-title']}>
          {surname} {name} {midname}
        </h3>
        <p className={styles.date}>{birth_year}</p>
        <p className={styles.description}>
          <b>Область:</b> {region}
        </p>
        <p className={styles.description}>
          <b>Місто:</b> {city}
        </p>
        <p className={styles.details}>
          <b>Обставини:</b> {description}
        </p>
        <p className={styles.tocontact}>
          Якщо ви володієте інформацією про місце перебування цієї особи,
          повідомте, будь ласка, сюди:
        </p>
        <ul className={styles.contactlist}>
          <li className={styles.contactitem}>
            <a className={styles.link} href="mailto:dmytro.selikhov@gmail.com">
              <svg className={styles.icon} width="30px" height="30px">
                <use href="../../../images/symbol-defs.svg#icon-mail"></use>
              </svg>
              dmytro.selikhov@gmail.com
            </a>
          </li>
          <li className={styles.contactitem}>
            <a className={styles.link} href="tel:+380506698759">
              <svg className={styles.icon} width="24px" height="24px">
                <use href="../../../images/symbol-defs.svg#icon-phone"></use>
              </svg>
              0506698759, 0673285329
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Item;
