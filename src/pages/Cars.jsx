import CarCard from "../components/CarCard";

const cars = [
  {
    id: 1,
    name: "Maruti Swift",
    type: "Hatchback",
    price: 1500,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    type: "SUV",
    price: 2500,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800"
  },
  {
    id: 3,
    name: "Honda City",
    type: "Sedan",
    price: 2000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    type: "SUV",
    price: 3500,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
  }
];

function Cars() {
  return (
    <div className="container">
      <h1 className="page-title">Available Cars</h1>

      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;