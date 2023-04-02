import styles from '../styles/welcomen.module.css';

const Welcome = () => {
  return (
    
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Shoe Step Store</h1>
        <p>Vítejte na našich officialních stránkách </p><br />
        <div className={styles.buttonz}>
          <a href="#nejnej">Novinky</a>
        </div>
        <div className={styles.buttonz}>
          <a href="#">SNEAKERS</a>         
        </div>
      </div>
    </main>
  );
};

export default Welcome;