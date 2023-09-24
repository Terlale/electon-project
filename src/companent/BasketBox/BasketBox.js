import axios from "axios";
import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const BasketBox = ({ item, onClick }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

 

  return (
    <div style={styles.boxStyle}>
      <div style={styles.boxNavbar}>
        <img style={styles.image} src={item.image} alt="#" />
        <div>
          <p style={styles.itemName}>{item.title}</p>
          <p style={{ fontSize: "12px" }}>
            <span style={{ color: "green" }}>Fast delivery:</span> in cargo in
            2 days
          </p>
        </div>
      </div>
      <div style={styles.boxButtons}>
        <button onClick={decreaseQuantity} style={styles.buttons}>
          -
        </button>
        <button style={styles.buttonQuantity}>{quantity}</button>
        <button onClick={increaseQuantity} style={styles.buttons}>
          +
        </button>
      </div>
      <div>
        <p style={styles.itemPrice}>{item.price} TL</p>
      </div>
      <div>
        <RiDeleteBin5Fill style={styles.deleteIcon} onClick={onClick}/>
      </div>
    </div>
  );
};

const styles = {
  boxStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderRadius: "20px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
  },
  boxButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "15%",
  },
  boxNavbar: {
    display: "flex",
    alignItems: "center",
  },
  itemName: {
    marginBottom: "5px",
    color: "rgba(0, 63, 98, 1)",
    fontSize: "1rem",
  },
  itemPrice: {
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "rgba(0, 63, 98, 1)",
  },
  deleteIcon: {
    fontSize: "24px",
    cursor: "pointer",
    color: "#eda415",
  },
  buttonQuantity: {
    border: "1px solid #E6E6E6",
    padding: "3px 20px",
    backgroundColor: "white",
  },
  buttons: {
    border: "1px solid #E6E6E6",
    color: "#eda415",
    backgroundColor: "#FBFBFB",
  },
  
};


export default BasketBox;
