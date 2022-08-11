import "./Navbar.css";


const Navbar = () => {
  return (
    <>
    <div className="container">
        <ul className="list">
          <li className="listItem">Home</li>
          <li className="listItem">Products</li>
          <li className="listItem">Menu</li>
          <li className="listItem">Events</li>
          <li className="listItem">Blog</li>
          <li className="listItem">Contact</li>
        </ul> 
        <div className="navItems">
        <button className="navButton">회원가입</button>
        <button className="navButton">로그인</button>
      </div>
      </div>
        
      </>
  );
};

export default Navbar;