import React from "react";
import styles from "./SecTwo.module.css";

const SecTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className={styles.text}>
            <h3>Free Shipping</h3>
            <p>On all orders over $100</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className={styles.text}>
            <h3>Free Shipping</h3>
            <p>On all orders over $100</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className={styles.text}>
            <h3>Free Shipping</h3>
            <p>On all orders over $100</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className={styles.text}>
            <h3>Free Shipping</h3>
            <p>On all orders over $100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
