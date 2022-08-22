import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'
import Featured from '../../components/featured/Featured'
import Searchbar from '../../components/searchbar/Searchbar'
import HotPost from '../../components/hotpost/HotPost'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <>
        <Topbar/>
        {/* <Navbar/> */}
        <div className="homeContainer">
            <Featured/>
            <Searchbar/>
            <h1 className="homeTitle">핫한 게시글</h1>
            <HotPost/>
        </div>
        <Footer/>
    </>
  )
}

export default Home