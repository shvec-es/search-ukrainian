import { useState } from 'react';
import styles from './SearchModal.module.scss';
// import ApiService from '../ApiServices/ApiService';

const SearchModal = ({ closeModal: setSearchModal }) => {
  const initialState = {
    name: '',
    surname: '',
    midname: '',
    city: '',
    region: '',
    birth_year: '',
  };
  const [searchForm, setSearchForm] = useState(initialState);

  const { name, surname, midname, city, region, birth_year } = searchForm;

  const handleChange = e => {
    const { name, value } = e.target;
    setSearchForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // ApiService.getAll(searchForm);
    setSearchModal(false);
    setSearchForm(initialState);
  };

  return (
    <div className={styles.modal_window}>
      <form action="" onSubmit={handleSubmit}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Ім’я:</p>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Прізвище:</p>
              <input
                className={styles.input}
                type="text"
                name="surname"
                value={surname}
                onChange={handleChange}
                required
              />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>По батькові:</p>
              <input
                className={styles.input}
                type="text"
                name="midname"
                value={midname}
                onChange={handleChange}
                required
              />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Місто:</p>
              <input
                className={styles.input}
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                required
              />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Область:</p>
              <input
                className={styles.input}
                type="text"
                name="region"
                value={region}
                onChange={handleChange}
              />
            </label>
          </li>
          <li className={styles.item}>
            <div className={styles.special_item}>
              <label className={styles.label}>
                <p className={styles.label_text}>Рік народження:</p>
                <input
                  className={styles.input}
                  type="date"
                  name="birth_year"
                  value={birth_year}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className={styles.btn} type="submit" name="btn_search">
                Знайти
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchModal;
