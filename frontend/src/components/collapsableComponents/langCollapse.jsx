import { useTranslation } from "react-i18next";

const LangCollapse = ({ collapse, onToggle }) => {
  const { t, i18n } = useTranslation();
  const languages = t("languages", { returnObjects: true });
  const languageCodes = ['en', 'fr', 'it', 'de', 'nl', 'pl', 'bg', 'ru', 'es'];

  const handleLanguageSelect = (index) => {
    i18n.changeLanguage(languageCodes[index]);
    onToggle(); 
  };

  const selectedLanguageName = languages.find((lang, index) => {
    return languageCodes[index] === i18n.language;
  });

  return (
    <div className="items-center flex flex-col mb-2">
      <button
        onClick={onToggle}
        className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-all duration-200"
      >
        {selectedLanguageName || t("Select Language")}
        {collapse ? (
          <i className="ri-arrow-up-s-line ml-2"></i>
        ) : (
          <i className="ri-arrow-down-s-line ml-2"></i>
        )}
      </button>

      {collapse && (
        <ul className="bg-[rgba(241,248,233,1)] z-50 w-full absolute top-full ">
          {languages.map((lang, i) => (
            <li key={i}>
              <button
                onClick={() => handleLanguageSelect(i)}
                className="w-full flex justify-between items-center px-4 py-2 text-emerald-900 transition-all duration-200 hover:bg-gray-200"
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangCollapse;
