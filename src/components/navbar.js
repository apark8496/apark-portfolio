import React, { useState } from "react"
import { Link } from "react-router-dom";

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
    </nav>
  )
}
export default Navbar;