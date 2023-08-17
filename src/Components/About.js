import "../Styles/About.scss";

export default function About() {
  return (
    <div className="about-container" id="about">
      <h2>About Us</h2>
      <div className="content-container">
        <div className="creator-image"></div>

        <div className="about-text">
          <p>
            Our company is a family-owned business that specializes in creating
            handmade leather goods.
          </p>
          <p id="right-align">
            We are passionate about crafting unique and stunning pieces that are
            not only beautiful but also durable.
          </p>
          <p>
            Our skilled artisans will work with you to thoughtfully customize
            your piece.
          </p>
        </div>
      </div>
    </div>
  );
}
