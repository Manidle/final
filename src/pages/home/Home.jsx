import React from "react";
import Featured from "../../components/featured/Featured";
import Searchbar from "../../components/searchbar/Searchbar";
import HotPost from "../../components/hotpost/HotPost";
import Footer from "../../components/footer/Footer";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "../../components/header/Header";
import HotArticle from "../../components/hotarticle/HotArticle";
import HotAttraction from "../../components/hotattraction/HotAttraction";
import Wrapper from "./Wrapper";

const Home = () => {
  const theme = createTheme;

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">start</h1>
        <Wrapper>
          <HotArticle />
        </Wrapper>
        <Wrapper>
          <HotAttraction />
        </Wrapper>
        <h1 className="homeTitle">end</h1>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
