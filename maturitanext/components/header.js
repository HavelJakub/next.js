import styles from "../styles/Header.module.css";

import Link from "next/link";

import Image from "next/image";



const Header = () => {
  return (
    <header>
      <div className={styles.banner}>
        <div className={`${styles["navbar-fill"]}`}>
          <div className={`${styles["navbar-logo"]}`}>
          <Image width="248" height="167" alt="" src="/ssslogo.PNG"/>
            <div className={`${styles["header-logo-link"]}`}>
              <Link href="/">
              

              </Link>
            </div>
          </div>
          <nav className={`${styles["hidden-nav"]}`}>
            <ul>
              <li>
                <Link href="/air_jordan" legacyBehavior>
                Air Jordan
                </Link>
              </li>
              <li>
              <Link href="/yeezy" legacyBehavior>
                Yeezy
                </Link>
              </li>
              <li>
              <Link href="/nike" legacyBehavior>
                Nike
                </Link>
              </li>
              <li>
              <Link href="/other" legacyBehavior>
                Ostatní
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