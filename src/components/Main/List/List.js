import React, {useState} from 'react';
import Item from '../Item/Item'
import { v4 as uuidv4 } from 'uuid';
import styles from './List.module.scss'


const List = () => {
  const [itemData, setItemData] = useState([
    {
    id: uuidv4(),
    img: 'http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg',
    name: 'Колесник Валерій Валерійович',
    dateOfBirth: '24.07.1959',
    oblast: 'Донецька',
    city: 'Маріуполь'
    },
    {
      id: uuidv4(),
      img: 'http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg',
      name: 'Колесник Валерій Валерійович',
      dateOfBirth: '24.07.1959',
      oblast: 'Донецька',
      city: 'Маріуполь'
    },
    {
      id: uuidv4(),
      img: 'http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg',
      name: 'Колесник Валерій Валерійович',
      dateOfBirth: '24.07.1959',
      oblast: 'Донецька',
      city: 'Маріуполь'
    },
    {
      id: uuidv4(),
      img: 'http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg',
      name: 'Колесник Валерій Валерійович',
      dateOfBirth: '24.07.1959',
      oblast: 'Донецька',
      city: 'Маріуполь'
    },
    {
      id: uuidv4(),
      img: 'http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg',
      name: 'Колесник Валерій Валерійович',
      dateOfBirth: '24.07.1959',
      oblast: 'Донецька',
      city: 'Маріуполь'
    },
  ]);

  return (
    <ul className={styles["main-list"]}>
      {itemData.map(el => {
        return <Item key={el.id} itemData={el}/>
      })}
    </ul>
  );
};

export default List;
