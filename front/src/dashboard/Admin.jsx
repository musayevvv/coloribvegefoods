import React from "react";
import styles from "./Admin.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {} from "../redux/reducers/ProductSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  DeleteProductThunk,
  GetProductsThunk,
} from "../redux/reducers/ProductSlice";
import { createProduct } from "../../../../back/controllers/productController";

const Admin = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .typeError("Price must be a number"),
    image: Yup.string()
      .url("Invalid URL format")
      .required("Image URL is required"),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.products.products);

  function Remove(item) {
    dispatch(DeleteProductThunk(item._id));
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createProduct(values));
    },
  });
  return (
    <div>
      <div className={styles.sortFilter}>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}

          <input
            placeholder="Price"
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div className="error">{formik.errors.price}</div>
          )}

          <input
            placeholder="Image URL"
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.errors.image && formik.touched.image && (
            <div className="error">{formik.errors.image}</div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.container}>
        {data &&
          data.map((item) => (
            <div className={styles.card} key={item._id}>
              <div className={styles.image}>
                <img src={item.image} alt="" />
              </div>
              <p>{item.name}</p>
              <span className={styles.price}>$ {item.price}</span>
              <div className={styles.buttons}>
                <button onClick={() => Remove(item)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
