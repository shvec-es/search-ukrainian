import styles from './SearchModal.module.scss';

const SearchModal = () => {
  return (
    <div className={styles.modal_window}>
      <form action="">
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
              Ім’я:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              Прізвище:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              По батькові:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              Місто:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              Область:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              Рік народження:
              <input className={styles.input} type="text" />
            </label>
          </li>
          <li>
            <button className={styles.btn} type="submit">
              Знайти
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchModal;
