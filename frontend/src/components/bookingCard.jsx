import { Link } from "react-router-dom";

const BookingCard = ({ data }) => {
  const {
    location,
    time,
    availableSeats,
    totalSeats,
    prices, 
    image,
  } = data;

  return (
    <div className="min-w-[20vw] mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      <img src={image} alt={location} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-green-600">{location}</h3>
        <p className="text-sm text-gray-600">Departure: {time}</p>
        <p className="text-sm text-lime-600">
          Seats Available: {availableSeats} out of {totalSeats}
        </p>

        <div className="text-md text-center text-gray-700 flex justify-around">
          <p>Adult <br /> € {prices.adult}</p>
          <p>Child <br /> € {prices.child}</p>
          <p>Infant <br /> € {prices.infant}</p>
        </div>

        <Link to={`/description/${location}`} state={{ data }}>
          <button className="mt-3 px-4 py-2 w-full text-md text-green-400 border border-green-400 hover:text-white rounded hover:bg-green-500 transition duration-200">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
