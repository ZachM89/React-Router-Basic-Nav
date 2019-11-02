import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        {/* <div>
          <a href="Home">Home</a>
        </div>
        <div>
          <a href="About">About</a>
        </div>
        <div>
          <a href="Contact">Contact</a>
        </div> */}
        <Link to="/Home">
            Home
        </Link>
        <Link to="/About">
            About
        </Link>
        <Link to="/Contact">
            Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
