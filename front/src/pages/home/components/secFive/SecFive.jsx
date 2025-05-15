import React from "react";
import styles from "./SecFive.module.css";

const SecFive = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.left}>
          <p>Subcribe to our Newsletter</p>
          <span>
            Get E-mail updates about our latest Shop and special offers
          </span>
        </div>
        <a href="#" className={styles.arrow}>
          <i className="fa-solid fa-arrow-up"></i>
        </a>
        <div className={styles.right}>
          <input type="text" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SecFive;
