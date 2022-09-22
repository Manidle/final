import { Grid, ListItem } from "@mui/material";
import React from "react";
import TextProperty from "../TextProperty";

const AttractionColumn = () => {
  return (
    <ListItem key={0}>
      <Grid
        container
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={4}>
          <TextProperty>NAME</TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty>CITY</TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty>LIKES</TextProperty>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AttractionColumn;
