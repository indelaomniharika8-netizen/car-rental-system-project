import { Link } from "react-router-dom";

function Navbar({ currentUser, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">CarRental</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>

        {currentUser ? (
          <>
            {currentUser.role === "admin" ? (
              <Link to="/admin">Admin Dashboard</Link>
            ) : (
              <Link to="/mybookings">My Bookings</Link>
            )}

            <span>Hi, {currentUser.name}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;