import React, { useEffect } from "react";
import styles from "./SecThree.module.css";
import { useDispatch } from "react-redux";
import { GetProductsThunk } from "../../../../redux/reducers/ProductSlice";
import { Link } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";

const SecThree = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products && state.products.products
  );

  const [sort, setSort] = useState("default");
  const [searchText, setSearchText] = useState("");

  const filtered =
    products &&
    products
      .filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "asc") {
          return Number(a.price) - Number(b.price);
        } else if (sort === "desc") {
          return Number(b.price) - Number(a.price);
        }
        return 0;
      });
  useEffect(() => {
    dispatch(GetProductsThunk());
    JSON.parse(localStorage.getItem("cart")) || [];
    JSON.parse(localStorage.getItem("wish")) || [];
  }, []);

  function AddToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((product) => product._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function AddToWish(item) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let existingItem = wish.find((product) => product._id === item._id);
    if (existingItem) {
      alert("Item already in wish list");
    } else {
      wish.push(item);
      localStorage.setItem("wish", JSON.stringify(wish));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p>Featured Products</p>
        <h3>Our Products</h3>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </span>
      </div>
      <div className={styles.sortFilter}>
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSort("asc")}>Ascending</button>
        <button onClick={() => setSort("desc")}>Descending</button>
        <button onClick={() => setSort("default")}>Default</button>
      </div>
      <div className={styles.cards}>
        {filtered &&
          filtered.map((product) => (
            <div className={styles.card} key={product._id}>
              <div className={styles.image}>
                <img src={product.image} alt="" />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>

                <span className={styles.price}>${product.price}</span>
              </div>
              <div className={styles.buttons}>
                <button>
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => AddToWish(product)}
                  ></i>
                </button>
                <button onClick={() => AddToCart(product)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecThree;
