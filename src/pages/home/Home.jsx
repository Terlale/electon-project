import Navbar from "../../companent/Navbar/Navbar";
import ItemBox from "../../companent/ItemBox/ItemBox";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/reducer/getSlice";
import Footer from "../../companent/Footer/Footer";

const Home = () => {
  const data = useSelector((state) => state.get.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.head}>
        <h3>Popular Products</h3>
      </div>
      <div style={styles.gridStyle}>
        {data &&
          data.map((item, index) => (
            <div key={item.id} style={styles.itemBoxContainerStyle}>
              <ItemBox item={item} />
            </div>
          ))}
      </div>
      <Footer/>
    </div>
  );
};

const styles = {
  gridStyle : {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: "20px",
    padding: "25px",
  },
  
  itemBoxContainerStyle : {
    width: "100%",
  },
  head : {
    color:"rgba(27, 90, 125, 1)",
    padding: "25px 25px 0px 25px"
  }

}

export default Home;
