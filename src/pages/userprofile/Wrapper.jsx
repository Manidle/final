import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Wrapper = ({ name, children, onClick }) => {
  return (
    <Container>
      <Typography component="h2" gutterBottom>
        {name}
      </Typography>
      <Card elevation="5">
        <CardContent>{children}</CardContent>
        <CardActions>
          <Button size="small" onClick={onClick}>
            전체 보기
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Wrapper;
