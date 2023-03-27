import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className={styles.banner}>
        <div className={`${styles["navbar-fill"]}`}>
          <div className={`${styles["navbar-logo"]}`}>
            <div className={`${styles["header-logo-link"]}`}>
              <Link href="index.js"> <img src=
              "/image/sssslogo.PNG" alt="logo" />
              </Link>
            </div>
          </div>
          <nav className={`${styles["hidden-nav"]}`}>
            <ul>
              <li>
                <Link href="../pages/air_jordan.js">
                <a>Air Jordan</a>
                </Link>
              </li>
              <li>
              <Link href="../pages/yeezy.js">
                <a>Yeezy</a>
                </Link>
              </li>
              <li>
              <Link href="../pages/nike.js">
                <a>Nike</a>
                </Link>
              </li>
              <li>
              <Link href="../pages/other.js">
                <a href="#">Ostatní</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;