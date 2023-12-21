import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import GoToTop from "./components/GoToTop";

const API = "http://127.0.0.1:8000/products/music-and-band";

const SingleProduct = () => {
  const history = useNavigate();
  const [size, setSize] = useState(false);
  const [sizeOne, setSizeOne] = useState(false);
  const [sizeTwo, setSizeTwo] = useState(false);
  const [sizeThree, setSizeThree] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [details, setDetails] = useState(false);
  const [review, setReview] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() !== "") {
      setReview([...review, newReview]);
      setNewReview("");
    }
  };

  const handleRemoveReview = (index) => {
    const updatedReviews = [...review];
    updatedReviews.splice(index, 1);
    setReview(updatedReviews);
  };

  const handleEditReview = (index, updatedReview) => {
    const updatedReviews = [...review];
    updatedReviews[index] = updatedReview;
    setReview(updatedReviews);
  };

  const checkDeliveryAvailability = () => {
    // Make an API call to check if the pin code is serviceable
    // Replace the API_URL with the actual API endpoint
    fetch(`API_URL?pinCode=${pinCode}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.available) {
          setDeliveryAvailable(true);
          setDeliveryTime(data.deliveryTime);
        } else {
          setDeliveryAvailable(false);
          setDeliveryTime("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const sizeClick = () => {
    setSize(!size);
  };
  const sizeClickOne = () => {
    setSize(false);
    setSizeOne(!sizeOne);
  };
  const sizeClickTwo = () => {
    setSize(false);
    setSizeOne(false);
    setSizeTwo(!sizeTwo);
  };
  const sizeClickThree = () => {
    setSize(false);
    setSizeOne(false);
    setSizeTwo(false);
    setSizeThree(!sizeThree);
  };
  const handleBuyNow = () => {
    localStorage.setItem("orderData", JSON.stringify(singleProduct));
  };

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    Starts,
    reviews,
    image_1,
  } = singleProduct;

  // useEffect(() => {
  //   getSingleProduct(`${API}?id=${id}`);
  // }, []);

  // if (isSingleLoading) {
  //   return <div>Loading.....</div>;
  // }

  return (
    <>
      {/* {singleProduct && singleProduct.name && ( */}
      <Wrapper>
        <PageNavigation title={name} />
        <Container className="container">
          <div className="grid grid-two-column">
            <div className="product_images">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/g/r/p/s-tsrt-catalog-03-makemode-original-imagjugggfzyvg8b.jpeg?q=70"
                alt="file"
                style={{
                  objectFit: "cover",
                }}
                width={"100%"}
                height={"70%"}
              />
              <div className="shop-buttons">
                <AddToCart product={singleProduct} />
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>

            {/* product data  */}
            <div className="product-data">
              <h2 className="product-name">
                Men Printed Round Neck Polyester Grey T-Shirt
              </h2>

              <p className="product-data-price product-data-real-price">
                {/* <FormatPrice price={price} /> */}
              </p>
              <Star stars={Starts} reviews={reviews} />
              <p className="colors-data">
                <span>Colors: </span>
                <div
                  className="color-codes"
                  style={{ backgroundColor: "red" }}
                ></div>
                <div
                  className="color-codes"
                  style={{ backgroundColor: "blue" }}
                ></div>
                <div
                  className="color-codes"
                  style={{ backgroundColor: "green" }}
                ></div>
                <div
                  className="color-codes"
                  style={{ backgroundColor: "yellow" }}
                ></div>
              </p>

              <p className="size-data">
                <span>Sizes: </span>
                <div
                  className={`${size ? "border-blue" : "size-codes"}`}
                  onClick={sizeClick}
                >
                  S
                </div>
                <div
                  className={`${size ? "border-blue" : "size-codes"}`}
                  onClick={sizeClickOne}
                >
                  M
                </div>
                <div
                  className={`${size ? "border-blue" : "size-codes"}`}
                  onClick={sizeClickTwo}
                >
                  L
                </div>
                <div
                  className={`${size ? "border-blue" : "size-codes"}`}
                  onClick={sizeClickThree}
                >
                  XL
                </div>
              </p>

              {/* <p className="desc">{description}</p> */}

              <div className="delivery-checker">
                <input
                  type="text"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="Enter Pin Code"
                />
                <button onClick={checkDeliveryAvailability}>Check</button>
                {deliveryAvailable && (
                  <p>Estimated Delivery Time: {deliveryTime}</p>
                )}
                {!deliveryAvailable && deliveryTime === "" && (
                  <p>Enter your pin code to check ETA</p>
                )}
                {!deliveryAvailable && deliveryTime !== "" && (
                  <p>Delivery not available for this pin code</p>
                )}
              </div>

              <div className="prod-details">
                <h3
                  className="prod-heading"
                  onClick={() => setDetails(!details)}
                >
                  Product Details &#8595;
                </h3>
                {details && (
                  <>
                    <ul>
                      <li>
                        Type: <span>Round Neck</span>
                      </li>
                      <li>
                        Sleeve: <span>Short Sleeve</span>
                      </li>
                      <li>
                        Fit: <span>Regular</span>
                      </li>
                      <li>
                        Fabric: <span>Polyester</span>
                      </li>
                      <li>
                        Neck Type: <span>Round Neck</span>
                      </li>
                      <li>
                        Ideal For: <span>Men</span>
                      </li>
                      <li>
                        Pattern: <span>Printed</span>
                      </li>
                      <li>
                        Suitable For: <span>Western Wear</span>
                      </li>
                      <li>
                        Fabric Care: <span>Regular Machine Wash</span>
                      </li>
                    </ul>
                    <p style={{ textAlign: "center" }}>
                      Mens 100% poly blend printed stylish t-shirt. Perfect and
                      suitable for all seasons. Unique collection to your
                      wardrobe. Sleeveless t-shirt with a pair of tracks can
                      afford the wearer a very classic look. Pure Polyster Blend
                      makes the fabric extra soft. Trendy and latest design with
                      classic colors and premium fabric makes the t-shirt
                      fashionable and comfortable. Comfortable for gym and all
                      sports. Color may slightly vary depending on your screen
                      brightness. Verify the size chart for size references.
                    </p>
                  </>
                )}

                <div className="reviews">
                  <h2>Reviews</h2>
                  <ul>
                    {review.map((review, index) => (
                      <li key={index}>
                        <p className="review-text">{review}</p>
                        <button onClick={() => handleRemoveReview(index)}>
                          Remove
                        </button>
                        <button
                          onClick={() =>
                            handleEditReview(
                              index,
                              prompt("Enter updated review")
                            )
                          }
                        >
                          Edit
                        </button>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                  />
                  <button onClick={handleAddReview}>Add</button>
                </div>

                <div className="question">
                  <h2>Questions And Answers</h2>

                  <div className="question-data">
                    <span>Q:Is colour will be fade after wash?</span>
                    <p>
                      A:Color doesnt fade. but it wrinkles pretty fast and very
                      hard to iron it out
                    </p>
                    <span>Q:Is colour will be fade after wash?</span>
                    <p>
                      A:Color doesnt fade. but it wrinkles pretty fast and very
                      hard to iron it out
                    </p>
                    <span>Q:Is colour will be fade after wash?</span>
                    <p>
                      A:Color doesnt fade. but it wrinkles pretty fast and very
                      hard to iron it out
                    </p>
                    <span>Q:Is colour will be fade after wash?</span>
                    <p>
                      A:Color doesnt fade. but it wrinkles pretty fast and very
                      hard to iron it out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/* <GoToTop /> */}
      </Wrapper>
      {/* put brackets  */}
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    flex-direction: column;
    align-items: center;

    .shop-buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .buy-now-btn {
        background-color: yellow;
        border: none;
        // border-radius: 10px;
        padding: 1.4rem 2.4rem;
      }
    }
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .question {
      margin-top: 20px;

      h2 {
        font-size: 25px;
        font-weight: bolder;
      }

      .question-data {
        margin-top: 40px;
        span {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }

    .reviews {
      padding: 10px;

      h2 {
        font-size: 25px;
      }
      .review-text {
        color: black;
        font-size: 15px;
        margin-top: 10px;
      }
      button {
        margin-right: 5px;
        border: none;
        color: black;
        background-color: yellow;
        width: 72px;
        height: 29px;
      }
      input {
        margin-right: 10px;
      }
    }

    .prod-details {
      .prod-heading {
        font-size: 20px;
        font-weight: bolder;
        cursor: pointer;
      }

      ul {
        li {
          font-size: 20px;
          color: grey;

          span {
            // margin-left: 30px;
            color: black;
          }
        }
      }
    }

    .delivery-checker {
      input {
        margin-right: 15px;
        width: 153px;
        height: 38px;
      }

      button {
        width: 69px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
        text-align: center;
      }
    }

    .colors-data {
      display: flex;
      gap: 5px;
      align-items: center;

      .color-codes {
        // background-color: red;
        width: 20px;
        height: 20px;
        border-radius: 10px;
      }
    }

    .size-data {
      display: flex;
      gap: 5px;
      align-items: center;

      .border-blue {
        width: 40px;
        height: 40px;
        border: none;
        text-align: center;
        margin: 10px;
        font-size: 20px;
        font-weight: bolder;
        cursor: pointer;
      }

      .size-codes {
        width: 40px;
        height: 40px;
        border: 1.5px solid black;
        text-align: center;
        margin: 10px;
        font-size: 20px;
        font-weight: bolder;
        cursor: pointer;
      }
    }

    .product-name {
      font-size: 20px;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bolder;
      font-size: 30px;
    }
    .product-data-real-price {
      color: black;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
