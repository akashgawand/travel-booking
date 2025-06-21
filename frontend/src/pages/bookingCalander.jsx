import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BookingCard from '../components/bookingCard';
import { Bookings } from '../data/AvailableBookings';
import { nearbyCitiesMap } from '../data/nearbyCitiesMap';
import MonthSlider from '../components/monthSlider';
import DaySlider from '../components/daySlider';
import Collapsable from '../components/collapsableComponents/collapsable';

const BookingCalendar = () => {
  const { t } = useTranslation();
  const selectedLocation = useSelector((state) => state.location.selectedLocation);
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today.month());
  const [currentYear] = useState(today.year());
  const [selectedDay, setSelectedDay] = useState(today);


    const getDaysInMonth = () => {
      const start = dayjs(`${currentYear}-${currentMonth + 1}-01`);
      const end = start.endOf('month');
      let days = [];

      for (let d = start; d.isBefore(end) || d.isSame(end); d = d.add(1, 'day')) {
        if (d.isAfter(today.subtract(1, 'day')) && d.month() === currentMonth) {
          days.push(d);
        }
      }

      return days;
    };

  const days = getDaysInMonth();
  const selectedDateStr = selectedDay.format('YYYY-MM-DD');

  
  const nearbyLocations = nearbyCitiesMap[selectedLocation] || [];

  const bookingsForDay = Object.entries(Bookings)
  .filter(([key, value]) =>
    key.startsWith(selectedDateStr) &&
    (
      !selectedLocation || // If no location is selected, show all
      value.location.toLowerCase() === selectedLocation.toLowerCase() ||
      nearbyLocations.map(loc => loc.toLowerCase()).includes(value.location.toLowerCase())
    )
  )
  .map(([, val]) => val);



  return (
    <div className="p-3 flex flex-col items-center ">
      <h2 className="text-xl font-bold text-center mb-6">
         {selectedLocation ? `${t('Selected Location')}: ${selectedLocation}` : t('No Location Selected')}
      </h2>

      <Collapsable />

      <MonthSlider currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} t={t} />
      {days && <DaySlider t={t} selectedDay={selectedDay} setSelectedDay={setSelectedDay} days={days} />}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {bookingsForDay.length > 0 ? (
          bookingsForDay.map((booking, index) =>
            <BookingCard key={index} data={booking} />)
        ) : (
          <div className="text-center text-gray-600 mt-10 col-span-full">{t('No bookings for this date')}</div>
        )}
      </div>

    </div>
  );
};

export default BookingCalendar;
