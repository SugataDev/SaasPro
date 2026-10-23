import Navber from "./layouts/Navber";
import Banner from "./layouts/Banner";
import Rating from "./layouts/Rating";
import Industry from "./layouts/Industry";
import Device from "./layouts/Device";
import Engage from "./layouts/Engage";
import Product from "./layouts/Product";
import Pricing from "./layouts/Pricing";
import Testimonial from "./layouts/Testimonial";
import Newsletter from "./layouts/Newsletter";
import Article from "./layouts/Article";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="font-inter text-third bg-white antialiased min-h-screen">
      <Navber />
      <Banner />
      <Rating />
      <Industry />
      <Device />
      <Engage />
      <Product />
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
