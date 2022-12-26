import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "./navbar.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../Context/ProductContextProvider";
import BurgerMenu from "./BurgerMenu";
import { authContext } from "../Context/AuthContextProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function Navbar() {
  const { getProducts, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  const {
    handleLogOut,
    user: { email },
  } = useContext(authContext);

  const ADMIN = "admin@gmail.com";

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="pickBazarImg"
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=3840&q=75"
            />
          </Typography>
          <Search
            sx={{ backgroundColor: "rgba(243,244,246)", color: "black" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <BurgerMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "black" } }}
          >
            <Stack
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingBasketIcon />
            </Stack>
          </Typography>
          <Stack spacing={3} direction="row">
            <Button
              onClick={() => {
                navigate("/admin");
              }}
              variant="contained"
              sx={{
                backgroundColor: "#009f7f",
                "&:hover": {
                  background: "#009f72",
                },
              }}
            >
              Admin
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              {email ? (
                <Button
                  sx={{ color: "black", fontWeight: "bold" }}
                  onClick={handleLogOut}
                >
                  LOGOUT
                </Button>
              ) : (
                <Link to="/auth">
                  <Button sx={{ color: "black", fontWeight: "bold" }}>
                    LOGIN
                  </Button>
                </Link>
              )}
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
