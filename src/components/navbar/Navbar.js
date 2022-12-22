import * as React from 'react'
import logo1 from './perseus.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="per__navbar">
      <div className="per__navbar-links">
        <div className="per__navbar-links_logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="per__header-content">
          <h1 className="gradient__text">Lisprocoin Bridge</h1>
            <h2 className="gradient__text">LSP20 PinkSale👉🏽👉🏽👉<a href="https://www.pinksale.finance/launchpad/0xb34BD5257D1872859D2102CdCd13D52ddbb2B5C6?chain=Matic"<a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
