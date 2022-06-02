import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>
        <Link href="/">MatUrl</Link>
      </h1>
      <ul className={styles.Header__list}>
        <li className={styles.Header__list__item}>
          <Link href="/"> Home </Link>
        </li>
        <li className={styles.Header__list__item}>
          <Link href="/about"> About </Link>
        </li>
        <li className={styles.Header__list__item}>
          <Link href="/api">Developer Api </Link>
        </li>
        <li className={styles.Header__list__item}>
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
