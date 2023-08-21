import logo from './logo.svg';
import './App.css';import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

const App = () => {
  return (
      <>
        <HashRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </HashRouter>
      </>
  );

}
export default App;
