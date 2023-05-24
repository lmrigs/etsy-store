import "../Styles/About.scss";
import { useState } from "react";

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  const prevIndex = (currentIndex - 1 + images.length) % images.length;

  return (
    <div className="gallery-container">
      <img
        src={images[prevIndex]}
        alt={`Thumbnail ${prevIndex}`}
        className="previous-image"
      />
      <img src={images[currentIndex]} alt={`Thumbnail ${currentIndex}`} />

      <div className="arrow-container">
        <button onClick={handlePrev}>
          <img src={require("../Images/left-arrow.png")}></img>
        </button>
        <button onClick={handleNext}>
          <img src={require("../Images/right-arrow.png")}></img>
        </button>
      </div>
    </div>
  );
}

export default function About() {
  const images = [
    require("../Images/Gallery/Rectangle-18.png"),
    require("../Images/Gallery/Rectangle-19.png"),
    require("../Images/Gallery/Rectangle-3.png"),
  ];

  return (
    <div className="about-container" id="about">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Our store is a family-owned business that specializes in creating
          handmade jewelry from our studio in Sarnia, Ontario
        </p>
        <p>
          We are passionate about crafting unique and stunning pieces that are
          not only beautiful but also durable.
        </p>
        <p>
          Our skilled artists use a variety of materials, including solid
          hardwood, poured epoxy, and mixed beads, to create one-of-a-kind rings
          and bracelets that showcase your individual style.{" "}
        </p>
        <p>
          Thank you for supporting our small business, and we can't wait to see
          you wearing one of our creations!
        </p>
      </div>
      <Gallery images={images} />
    </div>
  );
}
