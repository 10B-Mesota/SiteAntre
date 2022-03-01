import { Outlet } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <ul className="fixed-top w-100 p-s list-inline">
        <li>
          <a href="/">
            <b>
              <button className="btn btn-outline-success">Home</button>
            </b>
          </a>
        </li>
        <li>
          <a href="/Projects">
            <b>
              <button className="btn btn-outline-success">Projects</button>
            </b>
          </a>
        </li>
        <li>
          <a href="/Price">
            <b>
              <button className="btn btn-outline-success">Price</button>
            </b>
          </a>
        </li>
        <li>
          <a href="/Vision">
            <b>
              <button className="btn btn-outline-success">Vision</button>
            </b>
          </a>
        </li>
        <li>
          <a href="/About">
            <b>
              <button className="btn btn-outline-success">About</button>
            </b>
          </a>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Navbar;
