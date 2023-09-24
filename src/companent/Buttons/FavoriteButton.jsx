import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Axios from "axios";

const FavoriteButton = ({ wishlist, item, setWishlist }) => {
  const toggleFavorite = () => {
    if (!wishlist) {
      Axios.post("http://localhost:3000/api/favourites", item)
        .then((response) => {
          console.log("Ürün favorilere eklendi:", response.data);
          setWishlist(true); // Favorilere eklenme durumunu güncelle
        })
        .catch((error) => {
          console.error("Ürün favorilere eklenirken hata oluştu:", error);
        });
    } else {
      // Favorilerden çıkarma durumunu işle, gerekirse
    }
  };

  return (
    <div
      style={styles.boxIcon}
      onClick={() => {
        toggleFavorite();
      }}
    >
      {wishlist ? <MdFavorite /> : <MdFavoriteBorder />}
    </div>
  );
};

const styles = {
  boxIcon: {
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "rgba(179, 212, 229, 1)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};

export default FavoriteButton;
