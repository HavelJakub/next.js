import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className={styles.banner}>
        <div className={`${styles["navbar-fill"]}`}>
          <div className={`${styles["navbar-logo"]}`}>
            <div className={`${styles["header-logo-link"]}`}>
              <img src=
              "/image/sssslogo.PNG" alt="logo" />
            </div>
          </div>
          <nav className={`${styles["hidden-nav"]}`}>
            <ul>
              <li>
                <a href="#">Air Jordan</a>
              </li>
              <li>
                <a href="#">Yeezy</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Ostatní</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;