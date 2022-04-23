import styles from './Hero.module.scss';
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import RegModal from '../RegModal/RegModal';
import SearchModal from '../SearchModal';

function Hero() {
  const [isRegModal, setRegModal] = useState(false);
  const [isSearchModal, setSearchModal] = useState(false);

  return (
    <>
      {isSearchModal && (
        <ModalWindow closeModal={setSearchModal}>
          <SearchModal closeModal={setSearchModal} />
        </ModalWindow>
      )}
      {isRegModal && (
        <ModalWindow closeModal={setRegModal}>
          <RegModal />
        </ModalWindow>
      )}
      <div className={styles.hero}>
        <h1 className={styles.hero_title}>
          Єдиний портал пошуку рідних <br /> та близьких людей
        </h1>
        <p className={styles.hero_description}>
          Допомога кожному, хто втратив надію...
        </p>
        <ul className={styles.hero_list}>
          <li className={styles.hero_item}>
            <button
              className={styles.hero_item_btn}
              onClick={() => {
                setSearchModal(true);
              }}
            >
              Знайти людину
            </button>
          </li>
          <li className={styles.hero_item}>
            <button
              className={styles.hero_item_btn}
              onClick={() => {
                setRegModal(true);
              }}
            >
              Залишити контакти
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
