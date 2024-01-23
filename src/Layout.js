import logo from "./images/logo.png";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="navbar">
        <input type="checkbox" id="toggle" hidden />
        <label for="toggle" className="label-click" hidden>
          <i
            className="fa fa-bars"
            id="toggle"
            style={{ "font-size": "30px" }}
          ></i>
        </label>
        <nav className="content">
          <li className="logo">
            <img src={logo} alt="" />
          </li>
         
          <button className="btn">Submit</button>
        </nav>
      </div>
      <Outlet />
      <br /> <br />
      <hr size="4" color="blue" />
      <center>www.complainmanagement.com 2023 &copy;</center>
    </>
  );
};
export default Layout;
