import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1>Магазин</h1>
    </Link>
  </header>
);

export default Header
