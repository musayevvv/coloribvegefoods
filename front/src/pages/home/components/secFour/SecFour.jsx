import React from "react";
import styles from "./SecFour.module.css";

const SecFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p>Testimony</p>
        <h3>Our satisfied customer says</h3>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </span>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg"
            alt=""
          />
          <span className={styles.text}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </span>
          <p>Garreth Smith</p>
          <span>WEB DEVELOPER</span>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg"
            alt=""
          />
          <span className={styles.text}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </span>
          <p>Garreth Smith</p>
          <span>WEB DEVELOPER</span>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg"
            alt=""
          />
          <span className={styles.text}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </span>
          <p>Garreth Smith</p>
          <span>WEB DEVELOPER</span>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
