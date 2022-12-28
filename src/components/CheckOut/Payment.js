import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { checOutContext } from "../Context/CheckOutContextProvider";
import { Box, Button } from "@mui/material";

export default function PaymentForm() {
  const {
    getStepContent,
    setActiveStep,
    handleNext,
    handleBack,
    steps,
    activeStep,
    setPay,
    setPayTwo,
    setPayThree,
    setPayFour,
    pay,
    payTwo,
    payThree,
    payFour,
  } = React.useContext(checOutContext);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(e) => {
              setPay(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => {
              setPayTwo(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e) => {
              setPayThree(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(e) => {
              setPayFour(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {activeStep !== 0 && (
              <Button
                onClick={handleBack}
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
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
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
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
