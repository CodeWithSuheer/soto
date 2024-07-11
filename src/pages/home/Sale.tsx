import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const Sale = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef<Slider>(null);

  const data = [
    {
      id: 1,
      img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_01_a07_119852_21352_on_a.jpg?v=1720561623",
      img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Babaton",
      desc: "lip Linen Maxi Skirt",
      price: 108,
    },
    {
      id: 2,
      img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_03_a06_112419_23144_on_a.jpg?v=1720561623",
      img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Babaton",
      desc: "lip Linen Maxi Skirt",
      price: 108,
    },
    {
      id: 3,
      img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_13_a08_115074_32163_on_a.jpg?v=1720561623",
      img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Babaton",
      desc: "lip Linen Maxi Skirt",
      price: 108,
    },
    {
      id: 4,
      img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_01_a07_119571_1274_on_a.jpg?v=1720561622",
      img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Babaton",
      desc: "lip Linen Maxi Skirt",
      price: 108,
    },
    {
      id: 5,
      img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_99_a01_122876_1274_on_a.jpg?v=1720561622",
      img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Babaton",
      desc: "lip Linen Maxi Skirt",
      price: 108,
    },
  ];

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="sm:px-10 px-4 pt-10 sm:pt-16 pb-10 w-full">
        {/* ----------- HEADER ----------- */}
        <div className=" header mb-6 text-black flex justify-between items-center w-full">
          <h2 className="text-md sm:text-lg font-normal text-start max-w-2xl">
            Look What&apos;s 30-50% Off
          </h2>

          <Link to="/shop" className="font-medium underline">
            See All
          </Link>
        </div>

        {/* ----------- CONTENT ----------- */}
        <div className="data w-full">
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {data.map((data) => (
                <div
                  key={data?.id}
                  className="group block overflow-hidden px-0.5"
                >
                  <div className="relative h-[480px] sm:h-[480px]">
                    <img
                      alt="product_image1"
                      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                      src={data?.img1}
                    />
                    <img
                      alt="product_image2"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                      src={data?.img2}
                    />
                  </div>
                  <div className="relative bg-white pt-3 px-1.5">
                    <h3 className="text-sm text-gray-900">{data?.title}</h3>
                    <p className="text-sm text-gray-900">{data?.desc}</p>
                    <p className="mt-1.5 tracking-wide">
                      <span className="line-through text-gray-500 mr-2">
                        ${data?.price}
                      </span>
                      <span className="text-red-500">${data?.price}</span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* BUTTONS */}
            <button
              onClick={previous}
              className="ml-8 xl:ml-0 absolute top-[40%] -left-4 mx-1.5 hidden sm:inline-block rounded-full border text-black bg-[#fff] hover:text-white border-[#383838] hover:bg-[#252525] hover:border-[#252525] p-2.5 focus:outline-none"
            >
              <IoMdArrowBack size={22} />
            </button>

            <button
              onClick={next}
              className="mr-8 xl:mr-0 absolute top-[40%] -right-4 mx-1.5 hidden sm:inline-block rounded-full border text-black bg-[#fff] hover:text-white border-[#383838] hover:bg-[#252525] hover:border-[#252525] p-2.5 focus:outline-none"
            >
              <IoMdArrowForward size={22} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
