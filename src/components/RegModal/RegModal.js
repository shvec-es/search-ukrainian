import React, { useState } from 'react';
import styles from './RegModal.module.scss'
import btnSvg from '../../images/ic_baseline-add-a-photo.svg'
import btnSuccSvg from '../../images/success-svgrepo-com.svg'
import ApiService from '../ApiServices/ApiService';

const RegModal = () => {
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    midname: '',
    city: '',
    region: '',
    birth_year: '',
    description: '',
    picture: ''
  });
  const [pictureFile, setPictureFile] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const fileSelectedHandler = (e) => {
    setFormState({
      ...formState,
      picture: e.target.value
    })
    setPictureFile(e.target.files[0])

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.postCard(formState, pictureFile)
  }

  return (
      <div className={styles['modal-container']}>
        <form onSubmit={handleSubmit}>
          <ul className={styles['list']}>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-name'>
                Ім’я:
              </label>
              <input name='name'
                     className={styles.input}
                     id='id-name'
                     value={formState.firstName}
                     onChange={handleChange}
                     type='text'
                     required
              />
            </li>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-last_name'>
                Прізвище:
              </label>
              <input name='surname'
                     className={styles.input}
                     id='id-last_name'
                     onChange={handleChange}
                     value={formState.surname}
                     type='text'
                     required
              />
            </li>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-middle_name'>
                По батькові:
              </label>
              <input name='midname'
                     className={styles.input}
                     id='id-middle_name'
                     onChange={handleChange}
                     value={formState.midname}
                     type='text'
                     required
              />
            </li>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-city'>
                Місто:
              </label>
              <input name='city'
                     className={styles.input}
                     id='id-city'
                     onChange={handleChange}
                     value={formState.city}
                     type='text'
                     required
              />
            </li>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-oblast'>
                Область:
              </label>
              <input name='region'
                     className={styles.input}
                     id='id-oblast'
                     onChange={handleChange}
                     value={formState.region}
                     type='text'
                     required
              />
            </li>
            <li className={styles['input-thumb']}>
              <label className={styles['input-label']} htmlFor='id-date_of_birth'>
                Рік народження:
              </label>
              <input name='birth_year'
                     className={styles.input}
                     id='id-date_of_birth'
                     onChange={handleChange}
                     value={formState.birth_year}
                     type='date'
                     required
              />
            </li>
          </ul>

          <ul className={styles['text_area-list']}>
            <li className={styles['input-text_area']}>
              <label className={styles['label-description']} htmlFor='id-description'>
                Додаткова інформація:
              </label>
              <textarea name='description'
                        className={styles.description}
                        id='id-description'
                        onChange={handleChange}
                        value={formState.description}
                        cols='30'
                        rows='10'
                        required
              >
          </textarea>
            </li>
            <li className={styles['input-thumb']}>
              <label htmlFor='from-add_picture' className={styles['add-picture']}>
                <img className={styles.svgBtn} src={btnSvg} alt='svg' />
                Додати зображення людини
                {formState.picture && <img className={styles['svgSuccBtn']} src={btnSuccSvg} alt='svgSuccess' />}
                {formState.picture && <p className={styles.befEl}>Фотографія успішно завантажена</p>}
              </label>
              <input name='picture'
                     id='from-add_picture'
                     type='file'
                     onChange={fileSelectedHandler}
                     value={formState.picture}
                     hidden
                     accept="image/*" multiple={false}
                     required
              />

              <button className={styles['submit-btn']} type='submit'>Залишити інформацію</button>
            </li>
          </ul>

        </form>
      </div>
    );
};

export default RegModal