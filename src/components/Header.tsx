import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', textAlign: 'center' }}>
      <nav>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
        <Link to="/services">Services</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}