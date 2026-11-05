import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Rental Car</h1>
        <p>Easy, affordable and comfortable car rentals.</p>
        <Link to="/cars" className="hero-btn">Explore Cars</Link>
      </div>
    </div>
  );
}

export default Home;