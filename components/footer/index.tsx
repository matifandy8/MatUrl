import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>© 2022 </span> 
      <Link href="./">MatUrl</Link>
       <span> by</span> <a href="github.com/matifandy8">Matias Fandiño</a>
    </footer>
  );
};

export default Footer;
