import Nav from "./Components/Nav.js";
import Hero from "./Components/Hero.js";
import Products from "./Components/Products.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import "./Styles/App.scss";

function App() {
  return (
    <div className="body-content">
      <Nav />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
