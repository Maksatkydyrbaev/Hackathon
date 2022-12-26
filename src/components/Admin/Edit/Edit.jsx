import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContextProvider";

const Edit = () => {
  const { productDetails, getProductDetails, saveEditProduct } =
    useContext(productContext);
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={product.title || ""}
        onChange={handleInp}
        name="title"
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        value={product.img || ""}
        onChange={handleInp}
        name="img"
        id="outlined-basic"
        label="Image"
        variant="outlined"
      />
      <TextField
        value={product.price || ""}
        onChange={handleInp}
        name="price"
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <TextField
        value={product.type || ""}
        onChange={handleInp}
        name="type"
        id="outlined-basic"
        label="Type"
        variant="outlined"
      />
      <Button
        sx={{
          backgroundColor: "#009f7f",
          "&:hover": {
            background: "#009f72",
          },
          color: "white",
        }}
        onClick={() => {
          saveEditProduct(product, params.id);
          navigate("/");
        }}
        variant="outlined"
      >
        Edit Product
      </Button>
      <Button
        sx={{
          backgroundColor: "#009f7f",
          "&:hover": {
            background: "#009f72",
          },
          color: "white",
        }}
        onClick={() => {
          navigate("/");
        }}
        variant="outlined"
      >
        Go home
      </Button>
    </Box>
  );
};

export default Edit;
