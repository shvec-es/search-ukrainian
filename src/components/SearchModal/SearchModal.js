import styles from './SearchModal.module.scss';

const SearchModal = () => {
  return (
    <div className={styles.modal_window}>
      <form action="">
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Ім’я:</p>
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Прізвище:</p>
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>По батькові:</p>
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Місто:</p>
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <p className={styles.label_text}>Область:</p>
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <div className={styles.special_item}>
              <label className={styles.label}>
                <p className={styles.label_text}>Рік народження:</p>
                <input className={styles.input} type="text" />
              </label>
              <button className={styles.btn} type="submit">
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
