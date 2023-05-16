
import Link from 'next/link';
import styles from '../styles/footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-back']}>
        <div className={styles.leva}>
          <h3 className={styles['h3-footer']}>O mně</h3>
          <ul>
            <li><Link href="/login">login</Link></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.prava}>
          <h3 className={styles['h3-footer']}>Kontakty</h3>
          <ul>
            <li><a href="https://www.instagram.com/michal_borecky/">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100011700870552">Facebook</a></li>
            <li><a href="x">TikTok</a></li>
            <li><a href="x">E-mail</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer;