import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageMap = () => {
  const { t, i18n } = useTranslation();
  const languages = t("languages", { returnObjects: true });

  const handleLanguageSelect = (index) => {
    
    const languageCodes = ['en', 'fr', 'it', 'de', 'nl', 'pl', 'bg', 'ru', 'es'];
    i18n.changeLanguage(languageCodes[index]);
  };

  return (
    <div className="p-4 w-screen flex flex-col items-center bg-[#f8ffeb]">
      <h1 className="text-3xl">{t("selectLanguage")}</h1>
      {languages.map((lang, i) => (
        <ul className="w-full max-w-2xl" key={i}>
          <Link to={'/location'}>
            <li
              onClick={() => handleLanguageSelect(i)}
              className="flex justify-between items-center px-4 py-3 text-emerald-900
              hover:bg-[rgba(241,248,233,1)] transition-all duration-200 hover:cursor-pointer"
            >
              <span className="font-medium">
                <span className="mr-2 text-gray-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {lang}
              </span>
              <i className="ri-arrow-right-line text-2xl text-lime-600"></i>
            </li>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default LanguageMap;
