import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { cartContext } from "../Context/CartContextProvider";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ paddingTop: "65px", borderRadius: "0" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Img</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Count</StyledTableCell>
            <StyledTableCell align="right">subPrice</StyledTableCell>
            <StyledTableCell align="right">-</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow key={row.item.id}>
              <StyledTableCell align="right">
                <img src={row.item.img} alt="" width={70} height={70} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.title}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={row.count}
                  onChange={(e) => {
                    changeProductCount(e.target.value, row.item.id);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  sx={{
                    backgroundColor: "#009f7f",
                    "&:hover": {
                      background: "#009f72",
                    },
                    color: "white",
                  }}
                  onClick={() => deleteCartProduct(row.item.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        sx={{
          backgroundColor: "#009f7f",
          "&:hover": {
            background: "#009f72",
          },
          color: "white",
          marginTop: "10px",
          marginRight: "15px",
          marginBottom: "10px",
        }}
        onClick={cartCleaner}
      >
        Buy Now {cart.totalPrice} $
      </Button>

      <Button
        sx={{
          backgroundColor: "#009f7f",
          "&:hover": {
            background: "#009f72",
          },
          color: "white",
          marginRight: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Order
      </Button>
      <Button
        sx={{
          backgroundColor: "#009f7f",
          "&:hover": {
            background: "#009f72",
          },
          color: "white",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </TableContainer>
  );
}
