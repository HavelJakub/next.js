
import styles from "../styles/allproducts.css";

const AllProducts = () => {
    return ( 
    <main>
      
      <div className={`${styles["all-product-box"]}`}> 
        {[...Array(7)].map((_, i) => (
          <div className={styles.product} key={i}>
            <img src="../jordan.png" alt="Air Jordan 1 Mid" />
            <div className={`${styles["product-info"]}`}>
              <h4 className={`${styles["product-title"]}`}>Air Jordan 1 Mid</h4>
              <p className={`${styles["product-price"]}`}>130€</p>
              <a className={`${styles["product-btn"]}`} href="#">
                Objednat
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr className={`${styles["hr-spodek"]}`} />
    </main>

        
    )
}

export default AllProducts;