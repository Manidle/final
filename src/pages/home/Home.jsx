import React from "react";
import Featured from "../../components/featured/Featured";
import Searchbar from "../../components/searchbar/Searchbar";
import HotPost from "../../components/hotpost/HotPost";
import Footer from "../../components/footer/Footer";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "../../components/header/Header";
import HotPosts from "../../components/hotpost/HotPosts";

const Home = () => {
  const theme = createTheme;

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="homeContainer">
        <Featured />
        <HotPost />
        <HotPosts />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
