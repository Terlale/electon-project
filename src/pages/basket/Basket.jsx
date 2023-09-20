import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../companent/Search/Search';
import Logo from "./images/logo 1.png";
import { getBasketThunk } from '../../store/reducer/getBasket';
import ItemBox from '../../companent/ItemBox/ItemBox';

const Basket = () => {
  const basketItems = useSelector(state => state.getBasket.basket);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])
  


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
      <div>
      {basketItems &&
          basketItems.map((item, index) => (
            <div key={item.id} style={styles.itemBoxContainerStyle}>
              <ItemBox item={item} />
            </div>
          ))}
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
  itemBoxContainerStyle : {
    width: "100%",
  },
}

export default Basket;
