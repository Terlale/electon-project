import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./images/logo.svg";
import Search from "../../companent/Search/Search";
import { getFavoriteThunk } from "../../store/reducer/getFavorite";
import FavoriteBox from "../../companent/FavoriteBox/FavoriteBox";
import axios from "axios";

const Favorite = () => {
  const wishlist = useSelector((state) => state.getFavorite.favorite);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavoriteThunk())
  }, [])

  const handleAddToFavorite = (itemId) => {
    const isItemInFavorite = wishlist.some((item) => item.id === itemId);
    return isItemInFavorite;
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/favourites/${id}`);
  };
  

  return (
    <div>
      <div style={styles.logoSearch}>
        <div style={styles.logoContainer}>
          <img src={Logo} alt="logo" style={styles.logo} />
        </div>
        <div style={styles.searchContainer}>
          <Search />
        </div>
      </div>
      <div style={styles.navbar}>
        <h5 style={styles.header}>Favorite item's</h5>
      </div>
      <div style={styles.gridStyle}>
      {wishlist ? (
        wishlist.map((item, index) => (
          <div key={item.id} style={styles.itemBoxContainerStyle}>
            <FavoriteBox item={item} addToFavorite={handleAddToFavorite} onClick={() => handleDelete(item.id)}/>
          </div>
        ))
      ) : (
        <p>No favorite items found.</p>
      )}
    </div>
    </div>
  );
};
const styles = {
  logoSearch: {
    display: "flex",
    justifyContent: "space-between",
    padding: "25px",
    backgroundColor: "rgba(0, 63, 98, 1)",
  },
  gridStyle : {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: "20px",
    padding: "25px",
  },
  logoContainer: {
    maxWidth: "135px",
  },
  logo: {
    width: "100%",
    height: "auto",
  },
  navbar: {
    backgroundColor: "#f8f9fa",
    padding: "10px 25px",
  },
  header: {
    color: "#003f62",
  },
};


export default Favorite;
