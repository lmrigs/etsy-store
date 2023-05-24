import "../Styles/About.scss";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

export default function About() {
  const images = [
    {
      original: require("../Images/Gallery/Rectangle-18.png"),
      originalAlt: "bracelets",
    },
    {
      original: require("../Images/Gallery/Rectangle-19.png"),
      originalAlt: "bracelets",
    },
    {
      original: require("../Images/Gallery/Rectangle-3.png"),
      originalAlt: "bracelets",
    },
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
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={false}
      />
    </div>
  );
}
