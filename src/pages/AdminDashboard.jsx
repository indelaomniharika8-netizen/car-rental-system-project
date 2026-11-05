import { useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const [users] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const cancelBooking = (id) => {
    const updated = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 className="page-title">Admin Dashboard</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>
        </div>

        <div className="stat-card">
          <h2>
            {bookings.filter((b) => b.status === "Confirmed").length}
          </h2>
          <p>Confirmed Bookings</p>
        </div>
      </div>

      <h2>Manage Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Car</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.userName}</td>
                  <td>{booking.carName}</td>
                  <td>{booking.date}</td>
                  <td>₹{booking.total}</td>
                  <td>{booking.status}</td>
                  <td>
                    {booking.status === "Confirmed" && (
                      <button onClick={() => cancelBooking(booking.id)}>
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;