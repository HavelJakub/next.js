import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from "product-swiper.module";

SwiperCore.use([Navigation]);

const SwiperProducts = () => {
  return (
    <div className={styles["hot-product"]}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.product}>
            <img src="jordan.png" alt="Product image" />
            <div className={styles["product-info"]}>
              <h4 className={styles["product-title"]}>Air Jordan 1 Mid</h4>
              <p className={styles["product-price"]}>130€</p>
              <a className={styles["product-btn"]} href="#">
                Objednat
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.product}>
            <img src="jordan.png" alt="Product image" />
            <div className={styles["product-info"]}>
              <h4 className={styles["product-title"]}>Air Jordan 1 Mid</h4>
              <p className={styles["product-price"]}>130€</p>
              <a className={styles["product-btn"]} href="#">
                Objednat
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.product}>
            <img src="jordan.png" alt="Product image" />
            <div className={styles["product-info"]}>
              <h4 className={styles["product-title"]}>Air Jordan 1 Mid</h4>
              <p className={styles["product-price"]}>130€</p>
              <a className={styles["product-btn"]} href="#">
                Objednat
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.product}>
            <img src="jordan.png" alt="Product image" />
            <div className={styles["product-info"]}>
              <h4 className={styles["product-title"]}>Air Jordan 1 Mid</h4>
              <p className={styles["product-price"]}>130€</p>
              <a className={styles["product-btn"]} href="#">
                Objednat
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.product}>
            <img src="jordan.png" alt="Product image" />
            <div className={styles["product-info"]}>
              <h4 className={styles["product-title"]}>Air Jordan 1 Mid</h4>
              <p className={styles["product-price"]}>130€</p>
              <a className={styles["product-btn"]} href="#">
                Objednat
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperProducts;