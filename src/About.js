// import HeroSection from "./components/HeroSection";
import "./About.css";
import GoToTop from "./components/GoToTop";

const About = () => {
  return (
    <>
      <div>
        <div className="aboutImg">
          <img src="./images/banner1.2.png" alt="" className="about-banner" />
          <img
            src="./images/about-us.jpg"
            alt=""
            className="about"
          />
          <img
            src="https://img1.wsimg.com/isteam/ip/ec776dac-2039-4268-a491-3b4263fb6a09/vision.png/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:388,h:292,cg:true/qt=q:69"
            alt=""
            className="about"
          />
          <img
            src="https://img1.wsimg.com/isteam/ip/ec776dac-2039-4268-a491-3b4263fb6a09/mission.png/:/rs=w:388,h:292,cg:true,m/cr=w:388,h:292/qt=q:69"
            alt=""
            className="about"
          />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="myMap"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <GoToTop />
      </div>
    </>
  );
};

export default About;
