import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Bookings({ currentUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [date, setDate] = useState("");
  const [days, setDays] = useState(1);

  if (!car) {
    return (
      <div className="container">
        <h2>Select a car first from the Cars page.</h2>
        <button onClick={() => navigate("/cars")}>View Cars</button>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      id: Date.now(),
      userName: currentUser.name,
      email: currentUser.email,
      carName: car.name,
      price: car.price,
      date,
      days: Number(days),
      total: car.price * Number(days),
      status: "Confirmed"
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Car booked successfully!");
    navigate("/mybookings");
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleBooking}>
        <h2>Book Your Car</h2>

        <h3>{car.name}</h3>
        <p>Price per day: ₹{car.price}</p>

        <label>Pickup Date</label>
        <input
          type="date"
          required
          min={new Date().toISOString().split("T")[0]}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Number of Days</label>
        <input
          type="number"
          min="1"
          required
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <h3>Total: ₹{car.price * Number(days)}</h3>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Bookings;