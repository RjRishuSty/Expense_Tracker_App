import React from 'react'
import Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
        <h1 className={Styles.brand}>Expense Tracker</h1>
    </nav>
  )
}

export default Navbar
