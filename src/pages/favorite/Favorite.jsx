import React from "react";
import { useSelector } from "react-redux";
import ItemBox from "../../companent/ItemBox/ItemBox";

const Favorite = () => {
  const wishlist = useSelector((state) => state.get.wishlist);

  return (
    <div>
      <div><h2>Favorite Items</h2></div>
      <div>
        {wishlist &&
          wishlist.map((item) => <ItemBox key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Favorite;
