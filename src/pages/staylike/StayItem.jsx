import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeOrderAttractionImg } from "../../image/attractionImg";
import TextProperty from "./TextProperty";

const StayItem = ({ stay }) => {
  const navigate = useNavigate();

  function handleStayDetail(stayId) {
    navigate(`/attraction/${stayId}`, {
      state: {
        stayId: stayId,
      },
    });
  }
  return (
    <>
      <Card
        onClick={() => {
          handleStayDetail(stay.id);
        }}
        key={stay.id}
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
            image={makeOrderAttractionImg(stay.id)}
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
            <div style={{ alignItems: "baseline" }}>
              <Typography
                fontSize="16px"
                color="#52057B"
                fontWeight="bold"
                noWrap
              >
                {stay.name}
              </Typography>
              <Typography
                color="#892CDC"
                fontWeight="bold"
                fontSize="14px"
                noWrap
              >
                {stay.address}
              </Typography>
            </div>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default StayItem;
