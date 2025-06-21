const MonthSlider = ({ currentMonth, setCurrentMonth, t }) => {
  return (
    <div className="flex justify-center p-2 gap-3 mb-4 mt-12 flex-wrap bg-[#666666]">
      {t('months', { returnObjects: true }).map((month, index) => (
        <ul>
        <li
          key={month}
          className={`px-3 cursor-pointer border-none py-1 rounded-md text-md  text-gray-300 ${
            index === currentMonth ? 'scale-110 text-white' : ''
          }`}
          onClick={() => setCurrentMonth(index)}
        >
          {month} {/* Use translated month name */}
        </li>
        </ul>
      ))}
    </div>
  );
};


export default MonthSlider
