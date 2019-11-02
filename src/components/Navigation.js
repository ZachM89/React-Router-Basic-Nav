import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
            {/* <Link to="/">Home</Link> */}
          <a href="Home">Home</a>
        </div>
        <div>
            {/* <Link to="/">About</Link> */}
          <a href="About">About</a>
        </div>
        <div>
            {/* <Link to="/">Contact</Link> */}
          <a href="Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
