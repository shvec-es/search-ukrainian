import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_title}>
        Единий портал пошуку рідних <br /> та близьких людей
      </h1>
      <p className={styles.hero_description}>
        Допомога кожному, хто втратив надію...
      </p>
      <ul className={styles.hero_list}>
        <li className={styles.hero_item}>
          <button className={styles.hero_item_btn}>Знайти людину</button>
        </li>
        <li className={styles.hero_item}>
          <button className={styles.hero_item_btn}>Залишити контакти</button>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
