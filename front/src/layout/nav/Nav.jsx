import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/" className={styles.logo}>
          VEGEFOODS
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/cart" className={styles.link}>
            Cart
          </Link>
          <Link to="/wish" className={styles.link}>
            Wish
          </Link>
          <Link to="/admin" className={styles.link}>
            Admin
          </Link>
          <Link to="/cart" className={styles.link}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        <i
          className={`fa-solid fa-bars ${styles.hamburger}`}
          
        ></i>
      </nav>
    </div>
  );
};

export default Nav;
