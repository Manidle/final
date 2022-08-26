import Topbar from "../../components/topbar/Topbar"
import { useNavigate } from 'react-router-dom'
import "./register.css"
import Footer from "../../components/footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios"
import { Container } from "@mui/material"

export default function Register() {

  // navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleRoute =()=>{
    navigate("/login");
  }

  // user
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // user 데이터 보내기
  function userSignIn(){
    axios.post('http://localhost:8080/join',
      {
        userId:userId,
        password:password,
        email:email
      }
    )
    .catch(function(error) {
      console.log("user 보내기 실패");
      console.log(error);
    });
    // user 등록 후 login 페이지로 이동
    handleRoute();
  }
    
  return (
    <Container maxWidth="lg">
      <Topbar/>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          {/* user 서식 */}
          <label>Username</label>
          <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e)=>{setUserId(e.target.value);}}/>
          <label>Email</label>
          <input className="registerInput" type="email" placeholder="Enter your email..." onChange={(e)=>{setEmail(e.target.value);}} />
          <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(e)=>{setPassword(e.target.value);}}/>
          {/* user 보내는 버튼 */}
          <button type="button" className="registerButton" onClick={()=>userSignIn()}>Register</button>
        </form>
        {/* login 으로 가는 버튼 */}
        <button className="registerLoginButton" onClick={handleRoute}>Login</button>
      </div>
      <Footer/>
    </Container>
  )
}
