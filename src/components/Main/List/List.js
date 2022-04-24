import React, { useEffect, useState } from 'react';
import ApiService from '../../ApiServices/ApiService';
import Item from '../Item/Item';
import styles from './List.module.scss';

const List = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    ApiService.getAll().then(data => {
      setItemData(data);
    });
  }, [itemData]);

  return (
    <ul className={styles['main-list']}>
      {itemData.map(el => {
        return <Item key={el._id} itemData={el} />;
      })}
    </ul>
  );
};

export default List;
