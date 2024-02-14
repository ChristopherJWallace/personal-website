import { Link } from "react-router-dom"
import "./NavBar.css"

export function NavBar() {
  return (
  <div className="navbar">
    <a href="/" className="navbar-logo"> My Page </a>
    <div className= "nav-links">
      <Link to="/"><button className="navbutton">Home</button></Link>
      <div className="separator"></div>
      <Link to="/Page1"><button className="navbutton">Page 1</button></Link>
      <div className="separator"></div>
      <Link to="/Page2"><button className="navbutton">Page 2</button></Link>
      <div className="separator"></div>
      <Link to="/Page3"><button className="navbutton">Page 3</button></Link>
    </div> 
  </div>
  )
}