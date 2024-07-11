import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { FaArrowUp } from "react-icons/fa6";
import ScrollHeader from "./layouts/header/ScrollHeader";

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
          <Route path="/" element={<HomePage />} />
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
