import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <Link to="/Main">Калькуляторы</Link>
    </div>
  );
}

export default Header;