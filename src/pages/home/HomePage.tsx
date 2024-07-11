import Banners from "./Banners";
import HeroSection from "./HeroSection";
import Sale from "./Sale";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Sale />
      <Banners />
      <Trending />
    </>
  );
};

export default HomePage;
