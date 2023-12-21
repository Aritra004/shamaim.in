import "./strip.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Strip = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.mH31yrEzqgC2vDctscxNuQHaHa?pid=ImgDet&rs=1"
          alt="music"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.CK8I2_KT3yS-wt2utgCI1QHaEK?pid=ImgDet&rs=1"
          alt="movies"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.d-eHFY5pik3rmnMzakQkOgHaE8?pid=ImgDet&rs=1"
          alt="sports"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.niNHairl7zqbeIMPJ3X-kQHaGq?pid=ImgDet&rs=1"
          alt="persona"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://www.thesprucecrafts.com/thmb/2_9ezqzMEVnQV9WqH0MX2eq-kpo=/2121x1414/filters:fill(auto,1)/GettyImages-874839998-5a3d6879e258f80036dda29d.jpg"
          alt="drip"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.BFI0AlkD3gvGdl5LP2B5ugHaHa?pid=ImgDet&rs=1"
          alt="anime"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.z2X6ZJLwqr639JkCHs908QHaEo?pid=ImgDet&rs=1"
          alt="abstract"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.H9qPRNtPwR8DK-pslrNasAHaLY?pid=ImgDet&rs=1"
          alt="comics"
          className="strip-img"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.KaeCRUBNE-G3-txpS95pqAHaHU?pid=ImgDet&rs=1"
          alt="sanskriti"
          className="strip-img"
        />
      </div>
    </Carousel>
  );
};

export default Strip;
