import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { Carousel } from "react-carousel-minimal";
import ProdList from "../Product/ProdList/ProdList";

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
        <Grid item xs={3}>
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
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <BedIcon sx={{ fontSize: "3rem" }} />
              Bed
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <ChairIcon sx={{ fontSize: "3rem" }} />
              Sofa
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <ChairAltIcon sx={{ fontSize: "3rem" }} />
              Chair
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <TableRestaurantIcon sx={{ fontSize: "3rem" }} />
              Table
            </Item>
          </Box>
        </Grid>
        <Grid item xs={9}>
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
