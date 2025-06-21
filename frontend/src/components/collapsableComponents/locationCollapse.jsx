import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLocation } from "../../slice/locationSlice";

const LocationCollapse = ({ collapse, onToggle }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const selectedLocation = useSelector((state) => state.location.selectedLocation);
    const locations = t("locations", { returnObjects: true });

    const handleLocationSelect = (location) => {
          console.log("Dispatching location:", location);
        try{

            dispatch(setSelectedLocation(location));
        }catch(error){
            console.error("Error dispatching location:", error);}
        onToggle();
    };

    return (
        <div className="items-center w-30  flex flex-col mb-2">
            <button
                onClick={onToggle}
                className="bg-lime-400 w-full h-10 overflow-hidden text-white px-4 py-2 rounded-md hover:bg-lime-300 transition-all duration-200"
            >
                {selectedLocation || t("selectLocation")}
                {collapse ? (
                    <i className="ri-arrow-up-s-line ml-2"></i>
                ) : (
                    <i className="ri-arrow-down-s-line ml-2"></i>
                )}
            </button>

            {collapse && (
                <ul className="bg-[rgba(241,248,233,1)] overflow-hidden ">
                    {locations.map((location, i) => (
                        <li
                            key={i}
                            onClick={() => handleLocationSelect(location)}
                            className="w-full flex justify-between items-center px-4 py-2 text-emerald-900 transition-all duration-200 hover:bg-gray-200 cursor-pointer"
                        >
                            {location}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationCollapse;
