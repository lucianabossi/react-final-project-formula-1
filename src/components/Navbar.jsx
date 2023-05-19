import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/drivers">DRIVERS</Link>
            <Link to="/constructors">CONSTRUCTORS</Link>
            <Link to="/schedule">SCHEDULE</Link>
        </nav>
    </div>
  )
}
