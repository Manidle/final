import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from 'react-router-dom'
import "./login.css";
import Footer from "../../components/footer/Footer";
import { Button, Container, Icon, IconButton, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";

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
      <div className="loginBackground">
        <div className="loginContainer">
          <div className="loginWrapper">
            <div className="loginTitleContainer">
              <span className="loginTitle">Login</span>
            </div>
            <div className="topLine"></div>
            <form className="loginForm">
              <TextField id="standard-basic" label="아이디" variant="standard" margin="normal" size="small" />
              <TextField id="standard-basic" label="비밀번호" variant="standard" margin="normal" size="small" />
              <Button className="loginButton" variant="contained" >로그인</Button>
              <div className="underLine"></div>
              <Button className="loginRegisterButton" onClick={handleRoute}>아직 가입하지 않으셨나요?</Button>
              <div className="otherLogin">
                <IconButton className="google"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png" height="40px" width="40px" /></IconButton>
                <IconButton className="google"><img src="https://m.gelatofactory.co.kr/web/upload/img/m/ico-kakao.png" height="40px" width="40px" /></IconButton>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
}
