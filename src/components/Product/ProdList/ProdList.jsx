import React from "react";
import OneProd from "../OneProd/OneProd";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Pagination } from "@mui/material";
import { productContext } from "../../Context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";

const ProdList = () => {
  const { products, getProducts, fetchByParams } = useContext(productContext);

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
            sx={{
              padding: "1.25rem",
              display: "grid",
              gridAutoFlow: "column",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gridTemplateRows: "repeat(2,140px)",
              gap: 2,
            }}
          >
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                "&:hover": {
                  background: "#009f72",
                },
              }}
              value="Bed"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              <BedIcon sx={{ fontSize: "3rem" }} />
              Bed
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                "&:hover": {
                  background: "#009f72",
                },
              }}
              value="Chair"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              <ChairIcon sx={{ fontSize: "3rem" }} />
              Chair
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                "&:hover": {
                  background: "#009f72",
                },
              }}
              value="Table"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              <ChairAltIcon sx={{ fontSize: "3rem" }} />
              Table
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                "&:hover": {
                  background: "#009f72",
                },
              }}
              value="Sofa"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              <TableRestaurantIcon sx={{ fontSize: "3rem" }} />
              Sofa
            </Button>
          </Box>
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
