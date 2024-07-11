import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";

const ScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { id: 1, title: "Home", path: "" },
    { id: 2, title: "Men", path: "" },
    { id: 3, title: "Women", path: "" },
    { id: 4, title: "Child", path: "" },
    { id: 5, title: "About Us", path: "about" },
    { id: 6, title: "Contact Us", path: "contact" },
  ];

  return (
    <>
      {showHeader && (
        <section className="hidden sm:block nav_main w-full fixed top-0 left-0 sm:px-10 px-4 py-4 bg-white shadow-md">
          <div className="flex justify-between items-center">
            <div className="left flex justify-start items-center">
              {navigation.map((data) => (
                <ul key={data.id}>
                  <li className="max-lg:border-b max-lg:px-0 max-lg:py-3 text-black">
                    <Link
                      className="text-black font-normal text-md mr-6 block hover:underline hover:underline-offset-2"
                      to={data.path}
                    >
                      {data.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="right lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
              <span className="relative">
                <Link to="/saved">
                  <IoBookmarkOutline size={24} className="text-black" />
                </Link>
              </span>
              <span className="relative">
                <Link to="/cart">
                  <BsHandbag size={24} className="text-black" />
                </Link>
              </span>
              <div className="inline-block cursor-pointer border-gray-300 text-black">
                <Link to="/signin">SIGN IN</Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ScrollHeader;
