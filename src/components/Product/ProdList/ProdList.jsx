import React from "react";
import OneProd from "../OneProd/OneProd";
import { useContext, useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { productContext } from "../../Context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProdList = () => {
  const { products, getProducts } = useContext(productContext);

  const count = Math.ceil(products.length / 4);

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
    const begin = (page - 1) * 4;
    const end = begin + 4;
    return products.slice(begin, end);
  }

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
          md={12}
        >
          <Box
            gap={2}
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
          <Pagination
            sx={{ display: "flex", justifyContent: "center" }}
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={(e, p) => setPage(p)}
            page={page}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProdList;
