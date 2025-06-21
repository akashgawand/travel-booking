import { Link } from "react-router-dom";
// import i18n from "../scripts/i18";

const FormBookingCard = ({ data, formData }) => {
    const {
        location,
        time,
        availableSeats,
        totalSeats,
        prices,

    } = data;



    const { adult, child, infant } = formData
    const pax = adult + child + infant

    const totalCost =
        adult * prices.adult +
        child * prices.child +
        infant * prices.infant;

    return (
        <div className="min-w-[20vw] mb-20 mx-auto bg-white overflow-hidden ">


            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-green-600">{location}</h3>
                <p className="text-sm text-gray-600">Departure: {time}</p>

                <div className="text-md text-center text-gray-700 flex justify-around">
                    <p>Adult <br /> € {prices.adult}</p>
                    <p>Child <br /> € {prices.child}</p>
                    <p>Infant <br /> € {prices.infant}</p>
                </div>

                <p className="text-sm text-lime-600">
                    Seats Available: {availableSeats} out of {totalSeats}
                </p>
            </div>
            <div className="border-t h-10 w-full flex items-center justify-between border-gray-200">
                <div className="flex items-center h-full w-[50%]">
                    <div className="flex w-[50%] justify-end">
                        <h2>Total no. of PAX: </h2>
                    </div>
                    <div className="border-l flex items-center justify-center w-[50%] border-gray-200">
                        <h2 className="text-center">{pax}</h2>
                    </div>
                </div>

                <div className="flex items-center h-full w-[50%]">
                    <div className="flex w-[50%] justify-end">
                        <h2>Total Cost</h2>
                    </div>
                    <div className="border-l flex items-center justify-center w-[50%] border-gray-200">
                        <h2 className="text-center">{totalCost}</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormBookingCard;
