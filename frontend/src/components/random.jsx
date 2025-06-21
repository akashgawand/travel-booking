import { useLocation  } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

const BookingForm = () => {
//   const { locationparams } = useParams();
  const location = useLocation();
const data = location.state?.data;
console.log(data)


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adults: 0,
    children: 0,
    infants: 0,
    hotelName: "",
    roomNumber: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data.location)


    const payload = {
  ...formData,
  mobile: formData.phone, 
  adult: formData.adults,
  child: formData.children,
  infant: formData.infants,
  location: data.location,
};


    try {
      const res = await axios.post(`http://localhost:1000/description/${data.location}/form`, payload);
      console.log("Form submitted:", res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!data) return <p>No booking data found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking for {data.location}</h2>

      <p className="mb-2">Departure Time: {data.time}</p>
      <p className="mb-2">Adult: €{data.prices.adult} | Child: €{data.prices.child}</p>
      <p className="mb-4 text-green-600">Seats: {data.availableSeats} / {data.totalSeats}</p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        {["firstName", "lastName", "email", "phone", "hotelName", "roomNumber"].map(field => (
          <input
            key={field}
            name={field}
            type="text"
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            className="w-full border p-2 rounded"
            required
          />
        ))}

        <input type="number" name="adults" value={formData.adults} onChange={handleChange} placeholder="Adults" className="w-full border p-2 rounded" />
        <input type="number" name="children" value={formData.children} onChange={handleChange} placeholder="Children" className="w-full border p-2 rounded" />
        <input type="number" name="infants" value={formData.infants} onChange={handleChange} placeholder="Infants" className="w-full border p-2 rounded" />

        <button type="submit"  className="bg-green-600 text-white px-6 py-2 rounded">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
