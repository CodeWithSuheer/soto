import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import ScrollHeader from "./layouts/header/ScrollHeader";
import HomePage from "./pages/home/HomePage";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import UserProfile from "./pages/profile/UserProfile";
import Saved from "./pages/saved/Saved";
/* ---------- AUTH IMPORTS ---------- */
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ForgetPass from "./auth/ForgetPass";
import ResetPass from "./auth/ResetPass";
import OtpChecker from "./auth/OtpChecker";
/* ---------- OTHERS IMPORTS ---------- */
import About from "./common/About";
import Contact from "./common/Contact";
import PrivacyPolicy from "./common/PrivacyPolicy";
import Terms from "./common/Terms";
import NotFound from "./common/NotFound";
import MyOrders from "./pages/orders/MyOrders";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollHeader />
        <Routes>
          {/* ---------- MAIN ROUTES ---------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/saved" element={<Saved />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/otp/:id" element={<OtpChecker />} />
          <Route path="/reset/:id/:value" element={<ResetPass />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* ---------- OTHER ROUTES ---------- */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {showButton && (
          <button
            onClick={handleTop}
            className="moveTop rounded-full px-3 py-3 bg-[#252525]"
          >
            <FaArrowUp size={21} className="text-white" />
          </button>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
