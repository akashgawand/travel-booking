import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../slice/collapseSlice";
import LangCollapse from "../components/collapsableComponents/langCollapse";
import FormBookingCard from "../components/formpageBookingCard";
// import { useParams } from "react-router-dom";

const BookingForm = () => {
    //   const { locationparams } = useParams();
    const navigate = useNavigate()
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)


    const openCollapse = useSelector((state) => state.collapse.openCollapse)
    const dispatch = useDispatch();

    const handleToggle = (type) => {
        dispatch(toggleCollapse(type))
    }

    const getBack = () => {
        navigate(-1);
    };


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        adult: 0,
        child: 0,
        infant: 0,
        hotelName: "",
        roomNumber: "",
        location: data.location
    });







    const handleChange = (e) => {
        const { name, value } = e.target;

        const numericFields = ["adult", "child", "infant"];

        setFormData((prev) => ({
            ...prev,
            [name]: numericFields.includes(name) ? Number(value) : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data.location)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            adult: 0,
            child: 0,
            infant: 0,
            hotelName: "",
            roomNumber: "",
            location: data.location
        });

        const payload = { ...formData };




        try {
            const res = await axios.post(`https://travelsite-backend-y6kz.onrender.com/description/${data.location}/form`, payload);
            const responceData = res.data
            console.log("Form submitted:", responceData);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleCancel = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            adult: 0,
            child: 0,
            infant: 0,
            hotelName: "",
            roomNumber: "",
            location: data.location
        });
    };



    if (!data) return
    <p className="flex items-center justify-center text-3xl font-bold">
        No booking data found.
    </p>;

    return (
        <div className="w-full min-h-screen flex realtive  justify-center bg-[#f8ffeb]">
            <div className="w-full max-w-6xl ">

                <header className="w-full relative bg-orange-800 text-white z-20 rounded">
                    <nav className="flex items-center justify-between px-4 h-16 relative">
                        <button
                            onClick={getBack}
                            className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl 
          font-bold text-white px-3 py-1 rounded cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>

                        <h1 className="text-white text-2xl font-bold mx-auto">{data.location}</h1>

                        <div className="relative z-50">
                            <LangCollapse
                                collapse={openCollapse === "lang"}
                                onToggle={() => handleToggle("lang")}
                            />
                        </div>
                    </nav>
                </header>

                <form onSubmit={handleSubmit}
                    className="flex flex-col mt-6 p-6  rounded ">
                    <label className="mb-2 font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        className="border border-gray-300 bg-white p-3 rounded"
                        placeholder="Enter your first name"
                    />

                    <label className="mb-1 mt-8  font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border border-gray-300 bg-white p-2 rounded"
                        placeholder="Enter your Last name"
                    />

                    <label className="mb-1 mt-8 font-medium text-gray-700">Email Name</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 bg-white p-2 rounded"
                        placeholder="email@xxxx.xxx"
                    />

                    <label className="mb-1 mt-8 font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-gray-300 bg-white p-2 rounded"
                        placeholder="Enter Mobile Number"
                    />

                    <div className="flex mb-1 mt-8 gap-10 w-full justify-between">
                        <div className=" flex-col flex ">

                            <label className="mb-2 font-medium text-gray-700">Adult</label>
                            <input
                                type="Number"
                                name="adult"
                                value={formData.adult}
                                onChange={handleChange}
                                className="border border-gray-300 bg-white p-2 rounded"
                                min={"0"}

                            />
                        </div>
                        <div className="flex flex-col">

                            <label className="mb-2 font-medium text-gray-700">Child</label>
                            <input
                                type="number"
                                name="child"
                                value={formData.child}
                                onChange={handleChange}
                                className="border border-gray-300 bg-white p-2 rounded"
                                min={"0"}

                            />
                        </div>
                        <div className="flex flex-col">

                            <label className="mb-2 font-medium text-gray-700">Infant</label>
                            <input
                                type="number"
                                name="infant"
                                value={formData.infant}
                                onChange={handleChange}
                                className="border border-gray-300 bg-white p-2 rounded"
                                min={"0"}
                            />
                        </div>
                    </div>
                    <label className="mb-1 mt-8 font-medium text-gray-700">Hotel Name </label>
                    <input
                        type="text"
                        name="hotelName"
                        value={formData.hotelName}
                        onChange={handleChange}
                        className="border border-gray-300 bg-white p-2 rounded"
                        placeholder="Enter Mobile Number"
                    />
                    <label className="mb-1 mt-8 font-medium text-gray-700">Room number</label>
                    <input
                        type="text"
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleChange}
                        className="border border-gray-300 mb-20 bg-white p-2 rounded"
                        placeholder="Enter Mobile Number"
                    />



                </form>
                <div>
                    <FormBookingCard data={data} formData={formData} />
                </div>

                <footer className="w-full bg-white px-4 py-4 flex justify-between items-center fixed bottom-0 left-0 border-t border-gray-300">
                    <button onClick={handleCancel}
                        className="bg-white  w-[50%] cursor-pointer text-gray-700 px-6 py-2 rounded font-semibold">
                        CANCEL
                    </button>
                    <button
                        type="submit"
                        className="bg-green-600 w-[50%] cursor-pointer text-white px-6 py-2 rounded font-bold"
                    >
                        CONTINUE
                    </button>
                </footer>


            </div>
        </div>

    );
};

export default BookingForm;
