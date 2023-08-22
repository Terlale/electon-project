import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaWhatsapp, FaHeadphones } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import Logo from "./images/logO.svg";
import Phone from "./images/headphone.svg";

const Footer = () => {
  return (
    <footer style={styles.footer} className="mt-5">
      <div style={styles.border}>
        <h4 style={styles.footHead}>Subscribe newsletter</h4>
        <button type="button" style={styles.button}>
          Email address <RiSendPlaneLine />{" "}
        </button>
        <div style={styles.phone}>
          <div>
            <img src={Phone} alt="" />
          </div>{" "}
          <div style={styles.p}>
            <p>Call us 24/7 : (+62) 0123 567 789</p>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={3}>
            <img src={Logo} alt="logo" style={styles.logo} />
            <p>64 st james boulevard hoswick , ze2 7zj</p>
            <hr style={styles.hr} />
            <Row className="d-flex" style={styles.icons}>
              <Col xs="auto">
                <a href="#">
                  <FaGoogle size={24} style={styles.icon} />
                </a>
              </Col>
              <Col xs="auto">
                <a href="#">
                  <FaFacebook size={24} style={styles.icon} />
                </a>
              </Col>
              <Col xs="auto">
                <a href="#">
                  <FaWhatsapp size={24} style={styles.icon} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={3} style={styles.col}>
            <h6 style={styles.h6}>Find Product</h6>
            <ul style={styles.linkList} className="list-unstyled">
              <li>
                <a href="#" style={styles.link}>
                  Brownze arnold
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Chronograph blue
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Smart phones
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Automatic watch
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Hair straighteners
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} style={styles.col}>
            <h6 style={styles.h6}>Get help</h6>
            <ul style={styles.linkList} className="list-unstyled">
              <li>
                <a href="#" style={styles.link}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Return policy
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Payment policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} style={styles.col}>
            <h6 style={styles.h6}>About us</h6>
            <ul style={styles.linkList} className="list-unstyled">
              <li>
                <a href="#" style={styles.link}>
                  News
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Service
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Custmer care
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Faq’s
                </a>
              </li>
              <li>
                <a href="#" style={styles.link}>
                  Payment policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "rgba(226, 244, 255, 1)",
    color: "rgba(27, 90, 125, 1)",
    padding: "30px 0",
  },
  icons: {
    gap: "15px",
  },
  logo: {
    width: "100px",
    marginBottom: "10px",
  },
  hr: {
    borderTop: "1px solid rgba(27, 90, 125, 1)",
  },
  linkList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  link: {
    color: "rgba(27, 90, 125, 1)",
    textDecoration: "none",
    fontSize: "14px",
  },
  h6: {
    fontWeight: "bold",
  },
  icon: {
    color: "#eda415",
  },
  col: {
    paddingLeft: "50px",
  },
  border: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    margin: "20px 25px 50px 25px",
    padding: "30px",
    borderRadius: "20px",
  },
  button: {
    height: "51px",
    border: "none",
    backgroundColor: "#eda415",
    width: "340px",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 30px",
    fontSize: "14px",
    fontWeight: "600",
  },
  phone: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  footHead: {
    fontWeight: "bold",
  },
  p: {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
    width:"55%"
  },
};

export default Footer;
