import { ListItem, Typography } from "@mui/material";
import React from "react";

const AttractionItem = ({ attraction }) => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      key={attraction.attractionId}
      dense="true"
    >
      <Typography>관광지 이름: {attraction.name}</Typography>
      <Typography>관광지 지역: {attraction.address}</Typography>
      <Typography>좋아요 수: {attraction.likeCount}</Typography>
    </ListItem>
  );
};

export default AttractionItem;
