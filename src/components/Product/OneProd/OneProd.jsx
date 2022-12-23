import React from "react";
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

export default function OneProd({ item }) {
  const navigate = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
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
          <Button
            size="small"
            //    onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>
          <Button
            size="small"
            //   onClick={() => navigate(`/edit/${item.id}`)}s
          >
            Edit
          </Button>
          <IconButton
            size="small"
            //   onClick={() => addProductToCart(item)}
          >
            <ShoppingCartIcon
            // color={checkProductInCart(item.id ? "primary" : "")}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
