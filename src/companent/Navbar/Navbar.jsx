import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { FiTruck } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { AiOutlineDown } from "react-icons/ai";
import Logo from "./images/Logo.svg";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stil dosyasını ekleyin
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const goSignin = () => {
    navigate("./signin");
  };

  const goBasket = () => {
    navigate("./basket");
  };

  const goFavorite = () => {
    navigate("./favorite");
  };

  // Diğer kodlar burada

  return (
    <div>
      <div style={styles.topContainer}>
        <div style={styles.contactInfo}>
          <p>Need help? Call us: (+98) 0234 456 789</p>
        </div>
        <div style={styles.iconsContainer}>
          <div style={styles.iconContainer}>
            <p><TfiLocationPin /></p>
            <p style={styles.iconText}>Our store</p>
          </div>
          <div style={styles.iconContainer}>
            <p><FiTruck /></p>
            <p style={styles.iconText}>Track your order</p>
          </div>
        </div>
      </div>
      <div style={styles.navbar}>
        <div style={styles.logoSearch}>
          <div style={styles.logoContainer}>
            <img src={Logo} alt="logo" style={styles.logo} />
          </div>
          <div style={styles.searchContainer}>
            <Search />
          </div>
        </div>
        <div style={styles.userActions}>
          <div style={styles.action} onClick={goSignin}>
            <p><BsPerson /></p>
            <p>Sign in</p>
          </div>
          <div style={styles.action} onClick={goFavorite}>
            <p><MdFavoriteBorder /></p>
            <p>Favorite</p>
          </div>
          <div style={styles.action} onClick={goBasket}>
            <p><SlBasket /></p>
            <p>Basket</p>
          </div>
        </div>
      </div>
      <div>
        <BootstrapNavbar
          bg="light"
          expand="lg"
          style={{ width: "100%", height: "75px", padding: "0px 25px" }}
        >
          <NavDropdown
            title="Browse categories"
            id="basic-nav-dropdown"
            style={styles.dropdown}
          >
            <NavDropdown.Item href="#action/3.1" >
              Eylem 1
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" >
              Eylem 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" >
              Eylem 3
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" >
              Ayracı
            </NavDropdown.Item>
          </NavDropdown>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <div style={{ flex: '0 0 40px' }}></div>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eylem 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Eylem 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Eylem 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ayracı</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Catalog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eylem 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Eylem 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Eylem 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ayracı</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eylem 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Eylem 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Eylem 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ayracı</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">About us</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
          <BootstrapNavbar.Brand href="#home" style={styles.returnText}>
            30 days free Return
          </BootstrapNavbar.Brand>
        </BootstrapNavbar>
      </div>
    </div>
  );
};
const styles = {
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 25px 10px 25px",
    borderBottom: "1px solid #ccc",
  },
  contactInfo: {
    flex: 1,
  },
  iconsContainer: {
    display: "flex",
    gap: "15px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  iconText: {
    marginLeft: "5px",
  },
  navbar: {
    backgroundColor: "rgba(0, 63, 98, 1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
  },
  logoSearch: {
    display: "flex",
    alignItems: "center",
    gap: "45px",
  },
  logoContainer: {
    maxWidth: "100px",
  },
  logo: {
    width: "100%",
    height: "auto",
  },
 
  searchContainer: {
    flex: 1,
  },
  userActions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color: "white",
  },
  action: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  returnText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "rgba(0, 63, 98, 1)",
  },
  dropdown: {
    background: "#eda415",
    color: "white",
    padding: "13px",
    borderRadius: "25px",
  },
};

export default NavbarComponent;
