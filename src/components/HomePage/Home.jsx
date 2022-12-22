import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container spacing={2} item xs={4}>
          <Grid item xs={6}>
            <Item
              sx={{
                height: 140,
                width: 140,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              Bed
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                height: 140,
                width: 140,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              Chair
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                height: 140,
                width: 140,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              Table
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                height: 140,
                width: 140,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              Sofa
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Item>sx</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
