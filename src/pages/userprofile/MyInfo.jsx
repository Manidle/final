import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const MyInfo = ({ user }) => {
  return (
    <Grid container>
      <Grid item xs="3" sx={{ paddingLeft: 5 }}>
        <Avatar
          alt="Profile IMG"
          src={user.profileImg}
          sx={{ width: 100, height: 100 }}
        />
      </Grid>
      <Grid item xs="9">
        <Typography variant="body1" component="p">
          <Typography component="p">ID : {user.username}</Typography>
          <Typography component="p">NICKNAME : {user.nickname}</Typography>
          <Typography component="p">EMAIL : {user.email}</Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MyInfo;
