import kiwiLogo from "./assets/kiwiTravel.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";




const Layout = () => {
  return (
    <div className="h-screen bg-[#f8ffeb]">
      <header className=" flex justify-center  w-full p-4 bg-[#f8ffeb]">
        <Link to={"/"}>
        <img className="flex items-center cursor-pointer " src={kiwiLogo} alt="logo" />
        </Link>
      </header>
      <Outlet /> {/* This will render the child routes like LanguageMap or LocationMap */}
    </div>
  );
};

export default Layout;
