import React from "react";
import { Link } from "react-router-dom";

import './styles/Menu.css'

const Menu = () => {
  return (
    <nav id='menu'>
      <Link to="/users">
        <button>
          Users
        </button>
      </Link>

      <Link to="/works">
        <button>
          Work
        </button>
      </Link>
    </nav>
  );
};

export default Menu;
