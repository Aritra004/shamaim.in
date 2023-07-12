import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../api/productApi";
import { Card, CardActionArea, CardMedia, Button, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

const ProductImage = () => {
  const { productId } = useParams();

  const {
    data: ProData,
    error: ProError,
    isLoading: ProIsLoading,
  } = useGetSingleProductQuery(productId);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ProIsLoading) {
      setIsLoading(false);
    }

    if (ProError) {
      setError(ProError);
    }

    if (ProData) {
      setData(ProData.data);
    }
  }, [ProData, ProError, ProIsLoading]);

  const handleAddToCart = () => {
    // Add your logic here for adding the product to the cart
    console.log("Add to Cart clicked");
  };

  const handleBuyNow = () => {
    // Add your logic here for handling the Buy Now action
    console.log("Buy Now clicked");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = data?.product;
  const colors = data?.colors;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col mr-8">
        {colors.map((color, colorIndex) => (
          <div key={colorIndex} className="mb-2 w-20">
            {color.images.map((image, imageIndex) => (
              <Card key={imageIndex} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={`http://127.0.0.1:8000/${Image}`} // Update the src to include the image URL
                    alt="shamaim tshirt"
                  />
                </CardActionArea>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="flex-initial">
        <Card sx={{ maxWidth: 345 }} className="w-48 sm:w-full">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={`http://127.0.0.1:8000/api/get-products/1/4?color=2&size=2`} // Update the src to include the image URL
              alt="shamaim tshirt"
            />
          </CardActionArea>
        </Card>

        <Stack
          direction="row"
          spacing={2}
          marginTop={2}
          className="invisible sm:visible"
        >
          <FavoriteIcon sx={{ color: red[500] }} />
          <Button
            variant="contained"
            color="warning"
            endIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <button className="button-buy-now">
            BuyNow
          </button>
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          className="visible sm:invisible w-40 relative bottom-12"
        >
          <Button
            variant="contained"
            color="warning"
            endIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <button className="button-buy-now">
            BuyNow
          </button>
        </Stack>
      </div>
    </div>
  );
};

export default ProductImage;
