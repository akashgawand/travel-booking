import { useDispatch } from 'react-redux';
import { setSelectedLocation } from '../slice/locationSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // ✅ Use this instead of <Link>

const LocationMap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const locations = t('locations', { returnObjects: true });

  const handleSelectedLocation = (location) => {
    dispatch(setSelectedLocation(location)); // ✅ Save to Redux
    navigate('/booking'); // ✅ Navigate after dispatch
  };

  return (
    <div className="p-4 w-screen flex flex-col items-center bg-[#f8ffeb]">
      <h1 className="text-lg">{t('selectLocation')}</h1>
      {locations.map((location, i) => (
        <ul className="w-full max-w-2xl" key={i}>
          <li
            onClick={() => handleSelectedLocation(location)}
            className="flex justify-between items-center px-4 py-3 text-emerald-900 hover:bg-[rgba(241,248,233,1)] transition-all duration-200 hover:cursor-pointer"
          >
            <span className="font-medium">
              <span className="mr-2 text-gray-500">{String(i + 1).padStart(2, '0')}</span>
              {location}
            </span>
            <i className="ri-arrow-right-line text-2xl text-lime-600"></i>
          </li>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </ul>
      ))}
    </div>
  );
};

export default LocationMap;
