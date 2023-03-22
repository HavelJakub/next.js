
import styles from '../styles/footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-back']}>
        <div className={styles.leva}>
          <h3 className={styles['h3-footer']}>O mně</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.prava}>
          <h3 className={styles['h3-footer']}>Kontakty</h3>
          <ul>
            <li><a href="x">Instagram</a></li>
            <li>Facebook</li>
            <li>TikTok</li>
            <li>E-mail</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer;