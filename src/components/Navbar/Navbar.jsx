import React from "react";
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between", cursor: "pointer" }}>
          <Typography variant="h6" noWrap component="div">
            <img
              className="pickBazarImg"
              src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=3840&q=75"
            />
          </Typography>
          <Search sx={{ backgroundColor: "#dedfe4", color: "black" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={{}}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "black" } }}
          >
            <Stack>
              <ShoppingBasketIcon />
            </Stack>
          </Typography>
          <Stack spacing={3} direction="row">
            <Button
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#009f7f",
                "&:hover": {
                  background: "#009f72",
                },
              }}
            >
              Join
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
