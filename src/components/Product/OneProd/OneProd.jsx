import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../Context/ProductContextProvider";
import { cartContext } from "../../Context/CartContextProvider";

export default function OneProd({ item }) {
  const { deleteProduct, checkProductInCart } = useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const navigate = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: "230px" }}>
        <CardMedia component="img" image={item.img} alt="Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
          <IconButton size="small" onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
            // color={checkProductInCart(item.id ? "primary" : "")}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
