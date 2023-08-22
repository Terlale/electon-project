import React from "react";
import {SlBasket} from 'react-icons/sl'

const BasketButton = () => {
  return <button style={styles.buttonText}>
   <div style={styles.addText}>Add basket</div>
   <div style={styles.buttonIcon}><SlBasket/></div>
  </button>;
};
const styles = {
  buttonText: {
    width: "140px",
    height: "50px",
    padding:"10px",
    border: "none",
    backgroundColor: "rgba(135, 188, 217, 1)",
    color: "black",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  buttonIcon :{
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: "#eda415",
    color:" white",
  },
  addText:{
    fontSize:"15px"
  },
};

export default BasketButton;