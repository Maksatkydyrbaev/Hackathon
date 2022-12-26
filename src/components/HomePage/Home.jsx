import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { Carousel } from "react-carousel-minimal";
import ProdList from "../Product/ProdList/ProdList";
import { productContext } from "../Context/ProductContextProvider";
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

export default function Home() {
  const { fetchByParams } = useContext(productContext);
  const data = [
    {
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F923%2Ffurniture-banner-2.jpg&w=3840&q=75",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
  ];
  return (
    <Box sx={{ width: "100%", backgroundColor: "rgba(243,244,246)" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} className="grid_home_left">
          <Box
            sx={{
              width: "20%",
              padding: "1.25rem",
              display: "grid",
              gridAutoFlow: "column",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gridTemplateRows: "repeat(2,140px)",
              gap: 2,
              position: "fixed",
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
        </Grid>
        <Grid item xs className="grid_home_rigth">
          <Carousel
            width="100%"
            data={data}
            time={2000}
            captionStyle={captionStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="black"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "20px auto",
              border: "1px solid rgba(185, 187, 190)",
            }}
          />

          <ProdList />
        </Grid>
      </Grid>
    </Box>
  );
}
