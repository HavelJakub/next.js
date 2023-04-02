import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import styles from "../styles/productswiper.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation]);

const SwiperProducts = () => {
  return (
    <div className={styles['h2-nej']}> Nejnovější
      

    
    
    <div className={styles["hot-product"]}>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.product}>
            <img src="./images/jordan.png" alt="Product image" />
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
    </div>
  );
};

export default SwiperProducts;