import { Link } from "react-router-dom"
import "./Navbar.css"
import CV from '../../assets/ChristopherWallaceResume.pdf'
import { useState } from 'react'

export function NavBar() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    if (html.classList.contains('light')) {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }

  function closeMenu() {
    setActive(false)
  }

  return (
  <div className="navbar">
    <a href="/" className="navbar-logo"> 
      <span>{"<Christopher "}</span>
      <span>{" Wallace/>"}</span>
    </a>

    <div className="nav-items">
      {/* Toggle Button for light/dark mode */}
      <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      {/* Buttons for links */}
      <div className= {isActive ? 'nav-links active' : 'nav-links'}>
        {/* <div className="separator"></div>
        <Link to="/"><button className="navbutton" onClick={closeMenu}>HOME</button></Link> */}
        <div className="separator"></div>
        <Link to="/About"><button className="navbutton" onClick={closeMenu}>ABOUT ME</button></Link>
        {/* <div className="separator"></div> */}
        {/* <Link to="/Page2"><button className="navbutton" onClick={closeMenu}>PROJECTS</button></Link>
        <div className="separator"></div>
        <Link to="/Page3"><button className="navbutton" onClick={closeMenu}>CONTACT</button></Link> */}
        {/* Resume */}
        <div className="separator"></div>
        <a href={CV} target="_blank" rel="noopener noreferrer"><button className="resumebutton" onClick={closeMenu}> View Resume</button></a>
      </div> 

      {/* Drop-down menu for mobile */}
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Close menu' : 'Open menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}>
      </div>
    </div>
  </div>
  )
}

