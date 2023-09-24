import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../companent/Search/Search';
import Logo from "./images/logo 1.png";
import { getBasketThunk } from '../../store/reducer/getBasket';
import BasketBox from '../../companent/BasketBox/BasketBox';
import axios from 'axios';

const Basket = () => {
  const basketItems = useSelector(state => state.getBasket.basket);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])
  
  const handleAddToBasket = (itemId) => {
    const isItemInBasket = basketItems.some((item) => item.id === itemId);
    return isItemInBasket;
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/basket/${id}`);
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
        <h5 style={styles.header}>Basket item's</h5>
      </div>
      <div style={styles.basketAll}>
      {basketItems &&
          basketItems.map((item, index) => (
            <div key={item.id} style={styles.itemBoxContainerStyle}>
              <BasketBox item={item} addToBasket={handleAddToBasket} isDisabled={handleAddToBasket(item.id)} onClick={() => handleDelete(item.id)}/>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  basketAll:{
    display:"flex",
    flexDirection: "column",
    gap:"20px",
    padding:"30px",
  },
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
  itemBoxContainerStyle : {
    width: "100%",
  },
}

export default Basket;
