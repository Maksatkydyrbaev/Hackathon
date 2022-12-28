import React, { useState } from "react";
import AddressForm from "../CheckOut/AddresForm";
import PaymentForm from "../CheckOut/Payment";
import Review from "../CheckOut/Review";

export const checOutContext = React.createContext();

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const CheckOutContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");

  const [line, setLine] = useState("");

  const [lineTwo, setLineTwo] = useState("");

  const [lineThree, setLineThree] = useState("");

  const [lineFour, setLineFour] = useState("");

  const [lineFive, setLineFive] = useState("");

  const [lineSix, setLineSix] = useState("");

  const [pay, setPay] = useState("");

  const [payTwo, setPayTwo] = useState("");

  const [payThree, setPayThree] = useState("");

  const [payFour, setPayFour] = useState("");

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  let values = {
    setLine,
    setLineTwo,
    getStepContent,
    setLineThree,
    setLineFour,
    setFirstName,
    setSecondName,
    setLineFive,
    setLineSix,
    setPay,
    setPayTwo,
    setPayThree,
    setPayFour,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    steps,
    firstName,
    secondName,
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
  };

  return (
    <checOutContext.Provider value={values}>{children}</checOutContext.Provider>
  );
};

export default CheckOutContextProvider;
