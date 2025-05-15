import React from "react";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setCart(storedCart);
    setWishList(storedWish);
  }, []);

  const AddToWish = (item) => {
    let existingItem = wishList.find((product) => product._id === item._id);
    if (existingItem) {
      alert("Item already in wish list");
    } else {
      const updatedWish = [...wishList, item];
      setWishList(updatedWish);
      localStorage.setItem("wish", JSON.stringify(updatedWish));
      alert("Item added to wish list");
    }
  };

  const RemoveFromCart = (item) => {
    const updatedCart = cart.filter((product) => product._id !== item._id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart");
  };

  const IncreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product._id === item._id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const DecreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product._id === item._id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className={styles.container}>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className={styles.card} key={item._id}>
          <div className={styles.image}>
                <img src={item.image} alt="" />
              </div>
            <p>{item.name}</p>
            <span>$ {item.price}</span>
          
            <span className={styles.price}> Quantity: {item.quantity}</span>
            <span className={styles.price}>Total: ${item.price * item.quantity}</span>
            
            <div className={styles.buttons}>
              <button onClick={() => RemoveFromCart(item)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={() => IncreaseQuantity(item)}>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button onClick={() => DecreaseQuantity(item)}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <button onClick={() => AddToWish(item)}>
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Sebet bosdu</p>
      )}
    </div>
  );
};

export default Cart;
