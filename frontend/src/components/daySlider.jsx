const DaySlider = ({ days=[], setSelectedDay, t, selectedDay }) => {
  return (
    <div className="flex justify-start items-center p-3 overflow-x-auto scroll-smooth snap-x snap-start gap-4 max-w-[80vw] bg-white" style={{ scrollbarWidth: 'none' }}>
      {Array.isArray(days) && days.length > 0 ? (
        days.map((day) => (
          <button
            key={day.format('YYYY-MM-DD')}
            className="group flex flex-col justify-center items-center px-2 cursor-pointer"
            onClick={() => setSelectedDay(day)}
          >
            <div
              className={`text-sm font-bold p-2  w-10 h-10 rounded-full transition-colors duration-200 
              ${day.isSame(selectedDay, 'day') ? 'bg-lime-500' : 'group-hover:bg-lime-500'}`}
              
            >
              {day.format('D')}
            </div>
            <div className="text-md p-1">
              {t('weekdays', { returnObjects: true })[day.day()]}
            </div>
          </button>
        ))
      ) : (
        <div className="text-gray-600">{t('No dates for this month')}</div>
      )}
    </div>
  );
};

export default DaySlider;
