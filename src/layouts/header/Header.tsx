import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";

const Header = () => {
  // const [showTopBar, setShowTopBar] = useState(true);

  const handleMoveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    { id: 1, title: "Home", path: "" },
    { id: 2, title: "Men", path: "" },
    { id: 3, title: "Women", path: "" },
    { id: 4, title: "Child", path: "" },
    { id: 5, title: "About", path: "about" },
    { id: 6, title: "Contact", path: "contact" },
  ];

  return (
    <>
      <section className="nav_main absolute top-0 w-full">
        {/* TOP LINE */}
        {/* {showTopBar && (
          <div className="relative antialiased bg-black text-gray-100 text-start sm:text-center pr-10 pl-2">
            <p className="py-2 text-xs sm:text-sm tracking-wide font-normal">
              Free shipping & free returns on all orders. all the time{" "}
              <Link
                to="/shop"
                className="font-normal underline underline-offset-2"
              >
                Shop Now
              </Link>
            </p>

            <div className="cross_button absolute top-2 right-5">
              <button onClick={() => setShowTopBar(false)} className="m-auto">
                <RxCross2 size={18} className="text-gray-100" />
              </button>
            </div>
          </div>
        )} */}

        <header className="group bg-transparent hover:bg-gray-100 tracking-wide w-full z-50">
          {/* NAVBAR */}
          <section className="flex items-center flex-wrap lg:justify-between gap-4 py-3 sm:px-10 px-4 min-h-[75px]">
            <Link to="/" onClick={handleMoveTop} className="shrink-0">
              <h1 className="logo_font text-gray-50 group-hover:text-black text-3xl sm:text-4xl xl:text-6xl tracking-normal">
                SOTO
              </h1>
            </Link>
            <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-4 sm:space-x-8">
              <span className="relative">
                <Link to="/saved">
                  <IoBookmarkOutline
                    size={24}
                    className="text-white group-hover:text-black"
                  />
                </Link>
              </span>
              <span className="relative">
                <Link to="/cart">
                  <BsHandbag
                    size={24}
                    className="text-white group-hover:text-black"
                  />
                </Link>
              </span>
              <div className="inline-block cursor-pointer border-gray-300 text-white group-hover:text-black">
                <Link to="/signin">SIGN IN</Link>
              </div>
            </div>
          </section>
          {/* BOTTOM LINE */}
          <section className="flex flex-wrap justify-start px-5 sm:px-10 pt-0 pb-4 relative">
            <div
              className="left flex justify-start items-center overflow-x-scroll sm:overflow-hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>
                {`
            .left::-webkit-scrollbar {
              display: none;
            }
          `}
              </style>
              {navigation.map((data) => (
                <ul key={data.id}>
                  <li className="max-lg:px-0 max-lg:py-0 text-black">
                    <Link
                      className="text-white group-hover:text-black font-normal text-sm sm:text-[16px] mr-6 block my-0 hover:underline hover:underline-offset-2"
                      to={data.path}
                    >
                      {data.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </section>
        </header>
      </section>
    </>
  );
};

export default Header;
