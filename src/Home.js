// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import Trusted from "./components/Trusted";
import Categories from "./components/Categories";
import Strip from "./components/strip/Strip";

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <Strip />
      <HeroSection myData={data} />
      {/* <FeatureProduct /> */}
      <Categories />
      <HeroSection />
      {/* <Trusted /> */}
    </>
  );
};

export default Home;
