import "../Styles/About.scss";

export default function About() {
  const images = [
    {
      original: require("../Images/Gallery/Rectangle-18.png"),
      thumbnail: require("../Images/Gallery/Rectangle-18.png"),
      originalAlt: "bracelets",
    },
    {
      original: require("../Images/Gallery/Rectangle-19.png"),
      thumbnail: require("../Images/Gallery/Rectangle-19.png"),
      originalAlt: "bracelets",
    },
  ];

  return (
    <div className="about-container" id="about">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Our company is a family-owned business that specializes in creating
          handmade leather goods.
        </p>
        <p id="right-align">
          We are passionate about crafting unique and stunning pieces that are
          not only beautiful but also durable.
        </p>
        <p>
          Our skilled artisans will work with you to thoughtfully customize your
          piece.
        </p>
      </div>
    </div>
  );
}
