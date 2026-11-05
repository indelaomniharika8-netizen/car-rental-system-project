function MyBookings({ currentUser }) {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const myBookings = bookings.filter(
    (booking) => booking.email === currentUser.email
  );

  return (
    <div className="container">
      <h1 className="page-title">My Bookings</h1>

      {myBookings.length === 0 ? (
        <p className="empty-message">No bookings found. Book your first car!</p>
      ) : (
        <div className="booking-grid">
          {myBookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>{booking.carName}</h3>
              <p>Pickup Date: {booking.date}</p>
              <p>Days: {booking.days}</p>
              <p>Total Amount: ₹{booking.total}</p>
              <p>Status: {booking.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;