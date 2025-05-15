import React from "react";
import styles from "./SecOne.module.css";

const SecOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dark}></div>
      <div className={styles.texts}>
        <h1>We serve Fresh Vegestables & Fruits</h1>
        <p>We deliver organic vegetables & fruits</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default SecOne;
