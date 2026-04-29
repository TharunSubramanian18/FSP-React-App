import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>College Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
