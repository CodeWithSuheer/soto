import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./Home.css";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://assets.aritzia.com/video/upload/q_auto:best/24-summer-sale-phase-01-main-banner-L-updated.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 sm:px-10 px-4 flex justify-start items-center min-h-[100vh] sm:min-h-[75vh]">
          <div className="content pt-20 sm:pt-40 text-white">
            <h2 className="mb-8 text-4xl sm:text-5xl font-medium sm:font-normal text-start max-w-2xl">
              Up to 50% Off Select Styles Summer Sale
            </h2>
            <Button text="Shop Sale" link="shop" />

            <p className="font-medium mt-5 mb-2">
              Online and in store. Don't wait.
            </p>

            <Link to="/shop" className="font-medium underline">
              See Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
