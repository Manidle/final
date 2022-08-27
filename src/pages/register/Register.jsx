import Topbar from "../../components/topbar/Topbar"
import { useNavigate } from 'react-router-dom'
import "./register.css"
import Footer from "../../components/footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button, Container, TextField } from "@mui/material"
import { Assignment } from "@mui/icons-material"

export default function Register() {

  // navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleLoginRoute =()=>{
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
    handleLoginRoute();
  }
    
  return (
    <Container maxWidth="lg">
      <Topbar/>
      <div className="registerBackground">
        <div className="registerContainer">
          <div className="registerWrapper">
            <div className="registerTitleIcon">
              <Assignment fontSize="large" color="disabled" className="registerIcon" />
            </div>
            <div className="registerTitleContainer">
              <span className="registerTitle">Register</span>
            </div>
            <div className="topLine"></div>
            <form className="registerForm">
              {/* user 서식 */}
              <TextField id="standard-basic" label="아이디" variant="standard" margin="normal" size="small" onChange={(e)=>{setUserId(e.target.value);}} />
              <TextField id="standard-basic" label="이메일" variant="standard" margin="normal" size="small" type="email" onChange={(e)=>{setEmail(e.target.value);}} />
              <TextField id="standard-basic" label="비밀번호" variant="standard" margin="normal" size="small" type="password" onChange={(e)=>{setPassword(e.target.value);}} />
              {/* user 보내는 버튼 */}
              <Button className="registerButton" variant="contained" onClick={()=>userSignIn()}>가입하기</Button>
              <div className="underLine"></div>
              <Button className="loginRegisterButton" onClick={handleLoginRoute}>이미 가입하셨나요?</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}
