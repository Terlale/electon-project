import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import BasketButton from "../Buttons/BasketButton";
import BuyButton from "../Buttons/BuyButton";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../store/reducer/getSlice";

const ItemBox = ({ item }) => {
  const dispatch = useDispatch()
  const handleWishlist = (id) => {   //add and remove wishlist product
    dispatch(addWishlist(id))
  }
  return (
    <div style={styles.boxStyle}>
      <div style={styles.boxNavbar}>
        <div style={styles.boxImage}>
          <img src="k.png" alt="" />
        </div>
        <div style={styles.boxIcon} onClick={() => handleWishlist(item.id)} >{item.wishlist ? <MdFavorite/> : <MdFavoriteBorder/>}
        </div>
      </div>
      <div style={styles.boxContent}>
        <p style={styles.itemName}>{item.name}</p>
        <p style={styles.itemPrice}>185 TL</p>
        <div style={styles.itemButtons}>
          <BasketButton />
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
    border: "1px solid rgba(182, 182, 182, 1)",
    padding: "20px",
    borderRadius:"20px",
    boxSizing: "border-box",
  },
  boxNavbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  boxIcon: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "rgba(179, 212, 229, 1)",
    textAlign: "center",
  },
  boxImage: {
    width: "85%",
    height: "154px",
    borderRadius: "50%",
    backgroundColor: "rgb(249, 249, 249)",
  },

  itemName: {
    marginBottom: "5px",
    color:"rgba(0, 63, 98, 1)",
    padding: "0px 5px",

  },
  itemPrice: {
    marginBottom: "5px",
    fontWeight: "bold",
    padding: "0px 5px",
  },
  itemButtons:{
    display: "flex",
    justifyContent: "space-between",
  }
};

export default ItemBox;
