import styles from './Header.module.scss';
import logo from '../../images/logo.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>Головна</li>
          <li className={styles.nav_item}>Зв'язатись з розробниками</li>
          <li className={styles.nav_item}>Підтримати проект</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
