import styles from './shoe.module.css';


function Shoe() {
    return (
      <section className={styles.shoe}>
        <div className={styles['shoe-image']}>
          <img src="/jordan.png" alt="Shoe Image" />
        </div>
        <div className={styles['shoe-info']}>
          <h2>Shoe Name</h2>
          <br />
          <p className={styles.description}>Product description goes here.</p>
          <p className={styles.size}>Size: 43</p>
          <br />
          <p className={styles.price}>$99.99</p>
  
          <button>Add to Cart</button>
        </div>
      </section>
    );
  }