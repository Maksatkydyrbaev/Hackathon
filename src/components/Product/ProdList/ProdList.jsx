import React from "react";
import OneProd from "../OneProd/OneProd";
import { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { productContext } from "../../Context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProdList = () => {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  //   const count = Math.ceil(products.length / 3);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = page - 1;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
          md={9}
        >
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              minHeight: "40vh",
              mb: "3.5vh",
            }}
          >
            {products ? (
              currentData().map((item) => <OneProd item={item} key={item.id} />)
            ) : (
              <h2>Loading...</h2>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProdList;
