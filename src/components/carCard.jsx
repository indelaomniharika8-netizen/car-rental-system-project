import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />

      <div className="car-info">
        <h3>{car.name}</h3>
        <p>Type: {car.type}</p>
        <h3>₹{car.price} / day</h3>

        <button
          onClick={() => navigate("/bookings", { state: { car } })}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default CarCard;