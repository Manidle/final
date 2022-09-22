import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";

const AttractionItem = ({ attraction }) => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      key={attraction.attractionId}
      dense="true"
    >
      <Grid
        container
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={4}>
          <TextProperty>{attraction.name}</TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty>{attraction.address}</TextProperty>{" "}
        </Grid>
        <Grid item xs={4}>
          <TextProperty>{attraction.likeCount}</TextProperty>{" "}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AttractionItem;
