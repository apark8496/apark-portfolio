import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
        </div>
        );
      }
      export default Navbar;