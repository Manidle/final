import './App.css';
import Topbar from './components/topbar/Topbar';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Settings from './components/settings/Settings'

function App() {
  return (
    <div className="App">
      <Topbar/>
        {/* <Navbar />       */}
        {/* <Login/> */}
        <Register/>
        <Settings/>
    </div>
  );
}

export default App;