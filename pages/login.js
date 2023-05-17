import React from 'react';
import styles from '../styles/login.module.css';
import Link from 'next/link';
import signIn from "next-auth";

export default function Login ()  {
    async function handleSignIn(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        
        signIn("credentials", { username: username, password: password, callbackUrl: "/app" });
      }
  return (
    <div>
    <header>
          <div className={styles.banner}>
              <div className={`${styles["navbar-fill"]}`}>
                  <div className={`${styles["navbar-logo"]}`}>
                      <div className={`${styles["header-logo-link"]}`}>
                          <Link href="/"> <img src="/image/sssslogo.PNG" alt="logo" />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <main>
              <div className={styles['form-box']}>
                  <form className={styles.form}>
                      <div className={styles.login}>
                          <label htmlFor="username">Uživatelské jméno: </label> <br />
                          <input type="text" id="username" name="username" /> <br />
                          <label htmlFor="password">Heslo: </label> <br />
                          <input type="password" name="password" id="password" /> <br />
                          <button onClick={() =>{
                            signIn()}}>Přihlásit se</button>
                      </div>
                  </form>
              </div>
          </main>
          
          <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
          </div>
          
  );
};


