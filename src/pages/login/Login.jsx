import Navbar from "../../components/navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from 'react-router-dom'
import "./login.css";
import Footer from "../../components/footer/Footer";

export default function Login() {

  //navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleRoute =()=>{
    navigate("/user/regist");
  }

  return (
    <>
      {/* <Navbar/> */}
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
    </>
  );
}
