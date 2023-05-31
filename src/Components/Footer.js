import "../Styles/Footer.scss";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const scrollButton = document.getElementById("top");
    scrollButton.addEventListener("click", handleScrollToTop);

    return () => {
      scrollButton.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  return (
    <div className="footer-container" id="contact">
      <div className="contact-container">
        <div className="address">
          <h4>Studio</h4>
          <p>
            111 Colborne Rd. <br></br>Sarnia, Ontario
          </p>
        </div>
        <div className="email">
          <h4>Email</h4>
          <p>info@custom.com</p>
        </div>
        <div className="social">
          <h4>Social</h4>
          <div className="icons">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={require("../Images/Icons/insta.png")}></img>
            </a>
            <a href="https://www.etsy.com/" target="_blank">
              <img src={require("../Images/Icons/etsy.png")}></img>
            </a>
            <a href="https://www.shopify.com/" target="_blank">
              <img src={require("../Images/Icons/shopify.png")}></img>
            </a>
          </div>
        </div>
      </div>
      <button className="top" id="top">
        <img src={require("../Images/Icons/arrow.png")}></img>
      </button>
    </div>
  );
}
