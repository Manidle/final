import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ContentCard = ({ attraction, handleRoute }) => {
  return (
    <Card
      onClick={() => {
        handleRoute(`attraction/${attraction.attraction_id}`);
      }}
      key={attraction.attraction_id}
      sx={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        borderRadius: "30px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={attraction.src}
          alt="Hot Posts"
          height="200px"
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant="h5"
              color="#52057B"
              fontWeight="bold"
              margin={1}
            >
              {attraction.location}
            </Typography>
            <Typography variant="body2" color="#892CDC" fontWeight="bold">
              {attraction.title}
            </Typography>
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ContentCard;
