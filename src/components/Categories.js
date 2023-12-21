import React from "react";

import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const categories = [
  {
    name: "Music & Band",
    path: "/products/music-and-band",
    image:
      "https://previews.123rf.com/images/sonulkaster/sonulkaster1707/sonulkaster170700803/82882075-rock-music-band-singers-and-musicians-with-musical-instruments-vector-flat-icons.jpg",
  },
  {
    name: "Movies & Series",
    path: "/products/movies-and-series",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK81fOvI97As_e7ZVPUzvQmn8hjMy6WJfqPQ&usqp=CAU",
  },
  {
    name: "Sports",
    path: "/products/sports",
    image:
      "https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg",
  },
  {
    name: "Persona",
    path: "/products/persona",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH2ez6tEVsinzoV9cEqQyk7kOghY8fPOWfw&usqp=CAU",
  },
  {
    name: "Drip & Doodle",
    path: "/products/drip-and-doodle",
    image:
      "https://img.freepik.com/premium-vector/water-drip-doodle-illustration_96628-126.jpg?w=2000",
  },
  {
    name: "Anime",
    path: "/products/anime",
    image:
      "https://i.pinimg.com/originals/0e/50/39/0e503918829c61bd24803ce064546cee.jpg",
  },
  {
    name: "Abstract",
    path: "/products/abstract",
    image:
      "https://images.saatchiart.com/saatchi/1689730/art/8044808/7111855-YJMFMQHC-7.jpg",
  },
  {
    name: "Comics",
    path: "/products/comics",
    image: "https://www.cbc.ca/kids/images/Comic_book_header_-_1140x641.jpg",
  },
  {
    name: "Sanskriti",
    path: "/products/sanskriti",
    fontFamily: "'Noto Serif Bengali', sans-serif",
    image:
      "https://sanskritifreshfoods.com/wp-content/uploads/2022/05/Sanskriti-fresh-foods-logo.jpg",
  },
];

const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper className="section">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.u3Q-ViDakIE57X7T420z_gHaLH?pid=ImgDet&rs=1"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.9C-eANR6g-e8hkjKe0OUQAAAAA?pid=ImgDet&rs=1"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://i.pinimg.com/474x/15/78/c8/1578c83d29c55689ad37af9c1967b586--sports-posters-graphic-posters.jpg"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/R.6f8a1a3bfaa0c5e9ca6afba3f1ccae77?rik=mUCmkNJBG1CW8A&riu=http%3a%2f%2fimg.goldposter.com%2f2015%2f04%2fPersona_poster_goldposter_com_10.jpg&ehk=5P%2bnlwGeu32t1LjoNssh26z06NxE6kBqDir2L%2foYOKg%3d&risl=&pid=ImgRaw&r=0"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://i.pinimg.com/originals/79/1f/e8/791fe8b2c6b9259162878720d23a7346.jpg"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.9wtxnrQCcb71z07cySShSwHaJl?pid=ImgDet&rs=1"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://i.pinimg.com/originals/a1/e2/fd/a1e2fd788faf7728b98fb91db5c575bf.jpg"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.TicyralqkotcIB9UdegtQgHaKf?pid=ImgDet&rs=1"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
        <div className="category-card">
          <img
            src="https://i.pinimg.com/originals/16/e5/bb/16e5bb1bda2ca25112c0bd77e0105256.jpg"
            alt="product"
            className="category-image"
          />
          <p>
            <button>Shop now</button>
          </p>
        </div>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }
  .category-card {
    box-shadow: 0 40px 8px 0 rgba(0, 0, 0, 0.2);
    mx-width: 320px;
    margin: auto 1rem;
    text-align: center;

    .category-image {
      width: 100%;
      height: 50em;
      object-fit: cover;
    }

    button {
      border: none;
      outline: none;
      padding: 12px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: red;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default Categories;
