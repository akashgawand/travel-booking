import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // load locale if needed
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BookingCard from '../components/bookingCard'; // Import your booking card component

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

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

  // Mock data – this should come from backend filtered by selectedLocation
  const bookings = {
    '2025-06-17': {
      location: 'Caltagirone',
      time: '14:00',
      availableSeats: 2,
      totalSeats: 4,
      prices: { adult: 55, child: 30, infant: 0 },
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Caltagirone_Scala_Santa_Maria_del_Monte.jpg'
    },
    '2025-06-20': {
      location: 'Naples',
      time: '10:00',
      availableSeats: 5,
      totalSeats: 8,
      prices: { adult: 50, child: 25, infant: 0 },
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Napoli_collage.jpg'
    }
  };

  const bookingForSelectedDate = bookings[selectedDay.format('YYYY-MM-DD')];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">
        📍 {selectedLocation ? `${t('Selected Location')}: ${selectedLocation}` : t('No Location Selected')}
      </h2>

      {/* Month Tabs */}
      <div className="flex justify-center gap-3 mb-4 flex-wrap">
        {months.map((month, index) => (
          <button
            key={month}
            className={`px-3 py-1 rounded-md text-sm ${index === currentMonth ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentMonth(index)}
          >
            {t(month)}
          </button>
        ))}
      </div>

      {/* Day Slider */}
      <div className="flex overflow-x-auto gap-4 pb-3">
        {days.length > 0 ? (
          days.map((day) => (
            <div
              key={day.format('YYYY-MM-DD')}
              className={`flex flex-col items-center px-2 py-1 border rounded cursor-pointer min-w-[60px] ${
                day.isSame(selectedDay, 'day') ? 'bg-green-200' : ''
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <div className="text-sm font-bold">{day.format('D')}</div>
              <div className="text-xs">{t(day.format('dddd'))}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-600">{t('No dates for this month')}</div>
        )}
      </div>

      {/* Booking Card */}
      <div className="mt-6">
        {bookingForSelectedDate && bookingForSelectedDate.location === selectedLocation ? (
          <BookingCard data={bookingForSelectedDate} />
        ) : (
          <div className="text-center text-gray-600 mt-10">{t('No bookings for this date')}</div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
