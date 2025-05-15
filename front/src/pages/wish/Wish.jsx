import React from "react";
import styles from "./Wish.module.css";
import { useState, useEffect } from "react";

const Wish = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(storedWish);
  }, []);

  const AddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((product) => product._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    setWishList(wishList.filter((product) => product._id !== item._id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const RemoveFromWish = (item) => {
    const updatedWish = wishList.filter((product) => product._id !== item._id);
    setWishList(updatedWish);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
  };
  return (
    <div className={styles.container}>
      {wishList.length > 0 ? (
        wishList.map((item) => (
          <div className={styles.card} key={item._id}>
            <div className={styles.image}>
              <img src={item.image} alt="" />
            </div>
            <p>{item.name}</p>
            <span className={styles.price}>$ {item.price}</span>
            <div className={styles.buttons}>
              <button onClick={() => RemoveFromWish(item)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={() => AddToCart(item)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>wishlist bosdu</p>
      )}
    </div>
  );
};

export default Wish;
