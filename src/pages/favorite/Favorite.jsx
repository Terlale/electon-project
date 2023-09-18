import React from "react";
import { useSelector } from "react-redux";
import ItemBox from "../../companent/ItemBox/ItemBox";
import Logo from "./images/logo.svg";
import Search from "../../companent/Search/Search";
import { GrFormNextLink } from "react-icons/gr";

const Favorite = () => {
  const wishlist = useSelector((state) => state.get.wishlist);

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
      <div>
        {wishlist &&
          wishlist.map((item) => <ItemBox key={item.id} item={item} />)}
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
