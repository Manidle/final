import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <img className="github" src="https://images.velog.io/images/ggombee/post/3f32ac8f-9aa3-4cfe-93a0-44b59d7fde2a/github.jpg"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
              HOME
          </li>
          <li className="topListItem">Mypage</li>
          <li className="topListItem">Community</li>
          <li className="topListItem">Lodging</li>
          <li className="topListItem">Flight</li>
          <li className="topListItem">Rentcar</li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
            <img
              className="topImg"
              src="https://avatars.githubusercontent.com/u/102516088?v=4"
              alt=""
            />
        ) : (
          <ul className="topList">
            <li className="topListItem">
                LOGIN
            </li>
            <li className="topListItem">
                REGISTER
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
