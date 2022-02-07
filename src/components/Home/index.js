import logo from "../../assets/logo-text.png";
import Footer from "./Footer";
import SectionFeatures from "./SectionFeatures";
import SectionHero from "./SectionHero";
import SectionOSS from "./SectionOSS";

const HomePage = () => {
  return (
    <div className="container">
      <div className="py-4 mx-auto mb-2 w-56">
        <img src={logo} alt="Logo" />
      </div>
      <SectionHero />
      <SectionFeatures />
      <SectionOSS />
      <Footer />
    </div>
  );
};

export default HomePage;
