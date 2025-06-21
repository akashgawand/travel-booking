import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCollapse } from '../slice/collapseSlice';
import LangCollapse from '../components/collapsableComponents/langCollapse';
import { useTranslation } from 'react-i18next';

const BookingDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data = location.state?.data;

  const openCollapse = useSelector((state) => state.collapse.openCollapse);
  const dispatch = useDispatch();

  const handleToggle = (type) => {
    dispatch(toggleCollapse(type));
  };

  const getBack = () => {
    navigate(-1);
  };

  if (!data) return <div>{t('No data found')}</div>;

  const { location: loc, time, availableSeats, totalSeats, prices, image } = data;

  return (
    <div className="w-full bg-white">

      <header className="w-screen relative bg-orange-800 text-white z-20">
        <nav className="flex items-center justify-between px-4 h-16 relative">
          <button
            onClick={getBack}
            className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl font-bold text-white px-3 py-1 rounded"
          >
            <i className="ri-arrow-left-line"></i>
          </button>

          <h1 className="text-white text-2xl font-bold mx-auto">{loc}</h1>

          <div className="relative z-50">
            <LangCollapse
              collapse={openCollapse === "lang"}
              onToggle={() => handleToggle("lang")}
            />
          </div>
        </nav>
      </header>


      <div>
        <img src={image} alt={loc} className="w-full h-70 object-cover" />
      </div>


      <div className="p-6">
        <h1 className="text-2xl font-bold">{loc}</h1>

        <p className="text-gray-600 mt-2">
          {t('Departure')}: <span className="font-semibold">{time}</span>
        </p>

        <div className="flex items-center gap-4 mt-4">
          <p>{t('Adult')}: € {prices.adult}</p>
          <p>{t('Child')}: € {prices.child}</p>
          <p>{t('Infant')}: € {prices.infant}</p>
        </div>

        <p className="text-green-600 font-semibold mt-4">
          {t('Seats Available')}: {availableSeats} {t('out of')} {totalSeats}
        </p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">{t('Description')}</h2>
          <p className="text-gray-700">{t('Ragusa & Modica')}</p>
        </div>


        <footer className="mt-10">
          <div className="mt-6 flex justify-between gap-4">
            <Link to={`/description/${loc}/form`} state={{ data }} className='w-full' >
              <button
                className="bg-lime-500 text-white w-full py-3 rounded font-bold">
                {t('Book Now')}
              </button>
            </Link>
            <button className="border border-lime-500 text-lime-500 w-full py-3 rounded font-bold">
              {t('Contact Us')}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BookingDescription;
