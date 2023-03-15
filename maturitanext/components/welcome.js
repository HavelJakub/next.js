import styles from './welcomen.module.css';

const Welcome = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>ShoeStepStore</h1>
        <p>Kola duní a za oknem uhání, krajina lesů vod a strání</p><br />
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