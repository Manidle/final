import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from 'react-router-dom'
import "./login.css";
import Footer from "../../components/footer/Footer";
import { Container } from "@mui/material";

export default function Login() {

  //navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleRoute =()=>{
    navigate("/user/regist");
  }

  return (
    <Container maxWidth="lg">
      <Topbar/>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Id</label>
          <input className="loginInput" type="text" placeholder="Enter your Id..." />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your Password..." />
          <button className="loginButton">Login</button>
        </form>
          <button className="loginRegisterButton" onClick={handleRoute}>Register</button>
      </div>
      <Footer/>
    </Container>
  );
}
