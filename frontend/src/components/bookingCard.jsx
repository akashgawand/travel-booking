

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
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      <img src={image} alt={location} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-green-600">{location}</h3>

        <p className="text-sm text-gray-600">🕒 Time: {time}</p>
        <p className="text-sm text-gray-600">
          🎟️ Seats: {availableSeats} / {totalSeats}
        </p>

        <div className="text-sm text-gray-700">
          <p>💰 Price (Adult): €{prices.adult}</p>
          <p>👶 Child: €{prices.child}</p>
          <p>🍼 Infant: €{prices.infant}</p>
        </div>

        <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
