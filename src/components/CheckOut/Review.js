import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Cart from "../Cart/Cart";
import { cartContext } from "../Context/CartContextProvider";
import { Button } from "@mui/material";
import { checOutContext } from "../Context/CheckOutContextProvider";

export default function Review() {
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const {
    setFirstName,
    setSecondName,
    firstName,
    secondName,
    getStepContent,
    setActiveStep,
    handleNext,
    handleBack,
    steps,
    activeStep,
    line,
    lineTwo,
    lineThree,
    lineFour,
    lineFive,
    lineSix,
    pay,
    payTwo,
    payThree,
    payFour,
  } = React.useContext(checOutContext);

  const payments = [
    { name: "Card type", detail: `${pay}` },
    { name: "Card holder", detail: `${payTwo}` },
    { name: "Card number", detail: `${payThree}` },
    { name: "Expiry date", detail: `${payFour}` },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart?.products.map((row) => (
          <ListItem key={row.item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={row.item.title} secondary={row.item.type} />
            <Typography variant="body2">{row.item.price} $</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart.totalPrice} $
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstName} {secondName}
          </Typography>
          <Typography gutterBottom>
            {line}, {lineTwo}, {lineThree}, {lineFour}, {lineFive}, {lineSix},
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Button
            onClick={() => {
              handleNext();
              cartCleaner();
            }}
            variant="contained"
            sx={{
              mt: 3,
              ml: 1,
              backgroundColor: "#009f7f",
              color: "white",
              "&:hover": {
                background: "#009f72",
              },
            }}
          >
            ORDER
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
