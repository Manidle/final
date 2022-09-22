import { Grid, ListItem } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";

const PostColumn = () => {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      key={0}
      dense="true"
    >
      <Grid container>
        <Grid item xs={1}>
          <TextProperty>INDEX</TextProperty>
        </Grid>
        <Grid item xs={7}>
          <TextProperty>TITLE</TextProperty>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <TextProperty>REPLY</TextProperty>
      </Grid>
      <Grid item xs={2}>
        <TextProperty>LIKES</TextProperty>
      </Grid>
    </ListItem>
  );
};

export default PostColumn;
