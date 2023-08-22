import React from "react";

const BuyButton = () => {
  return <button style={styles.buttonText}>
   <div style={styles.buyText}>Buy</div>
  </button>;
};
const styles = {
  buttonText: {
    width: "80px",
    height: "50px",
    padding:"10px",
    border: "none",
    backgroundColor: "rgba(135, 188, 217, 1)",
    color: "black",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    
  },
  buyText:{
    fontSize:"15px"
  }

};

export default BuyButton;
