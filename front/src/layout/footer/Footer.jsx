import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <p className={styles.copyright}>
        Copyright ©2025 All rights reserved | This template is made with{" "}
        <i className="fa-solid fa-heart"></i> by Colorlib
      </p>
    </div>
  );
};

export default Footer;
