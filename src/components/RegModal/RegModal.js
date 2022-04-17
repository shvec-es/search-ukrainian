import React from 'react';
import styles from './RegModal.module.scss'
import btnSvg from '../../images/ic_baseline-add-a-photo.svg'

const RegModal = () => {
  return (
    <div className={styles['modal-container']}>
      <form action=''>
        <ul className={styles['list']}>
          <li className={styles['input-thumb']}>
            <label className={styles['input-label']} htmlFor='id-name'>
              Ім’я:
            </label>
            <input className={styles.input} id='id-name' type='text' />
          </li>
          <li className={styles['input-thumb']}>
            <label className={styles['input-label']} htmlFor='id-last_name'>
              Прізвище:
            </label>
            <input className={styles.input} id='id-last_name' type='text' />
          </li>
          <li className={styles['input-thumb']}>
            <label className={styles['input-label']} htmlFor='id-middle_name'>
              По батькові:
            </label>
            <input className={styles.input} id='id-middle_name' type='text' />
          </li>
          <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-city'>
                Місто:
              </label>
              <input className={styles.input} id='id-city' type='text' />
          </li>
          <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-oblast'>
                Область:
              </label>
              <input className={styles.input} id='id-oblast' type='text' />
          </li>
          <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-date_of_birth'>
                Рік народження:
              </label>
              <input className={styles.input} id='id-date_of_birth' type='text' />
          </li>
        </ul>

        <ul className={styles['text_area-list']}>
          <li className={styles['input-text_area']}>
            <label className={styles['label-description']} htmlFor='id-description'>
            Додаткова інформація:
          </label>
            <textarea className={styles.description} id='id-description' name='' cols='30' rows='10'>
          </textarea>
          </li>
          <li className={styles['input-thumb']}>
            <input className={styles['add-picture']} type='file' />
              {/*<img className={styles.svgBtn} src={btnSvg} alt='svg' />*/}
              {/*Додати зображення людини*/}

            <button className={styles['submit-btn']} type='submit'>Залишити інформацію</button>
          </li>
        </ul>

      </form>
    </div>
  );
};

export default RegModal;
