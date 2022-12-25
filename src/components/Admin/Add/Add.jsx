import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../Context/ProductContextProvider";

const Add = () => {
  const { addProduct } = useContext(productContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    type: "",
    img: "",
  });

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
        onChange={handleInp}
        name="title"
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        name="img"
        id="outlined-basic"
        label="Image"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        name="price"
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <TextField
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
          addProduct(product);
          navigate("/");
        }}
        variant="outlined"
      >
        Add prod
      </Button>
    </Box>
  );
};

export default Add;
