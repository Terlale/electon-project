import React, { useState } from "react";
import BasketButton from "../Buttons/BasketButton";
import BuyButton from "../Buttons/BuyButton";
import axios from "axios";
import {GrFormClose} from 'react-icons/gr'

const FavoriteBox = ({ item, onClick }) => {
    
 

  const addToBasket = (item) => {
    axios
      .post("http://localhost:3000/api/basket", item)
      .then((response) => {
        console.log("Item added to the basket:", response.data);
      })
      .catch((error) => {
        console.error("Error adding item to the basket:", error);
      });
  };





  return (
    <div style={styles.boxStyle}>
      <div style={styles.boxNavbar}>
        <div style={styles.boxImage}>
          <img style={styles.image} src={item.image} alt="#" />
        </div>
        <div style={styles.boxIcon} onClick={onClick}><GrFormClose /></div>
      </div>
      <div style={styles.boxContent}>
        <p style={styles.itemName}>{item.title}</p>
        <p style={styles.itemPrice}>{item.price} TL</p>
        <div style={styles.itemButtons}>
          <BasketButton onClick={() => addToBasket(item)} />
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

const styles = {
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "20px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
    gap:"20px",
  },
  boxNavbar: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
  },
  image: {
    width: "50%",
    height: "auto",
    borderRadius: "10px",
  },
  boxImage: {
    display: "flex",
    justifyContent: "center",
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
  },
  itemButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
 boxIcon:{
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "rgba(179, 212, 229, 1)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
 }
};

export default FavoriteBox;
