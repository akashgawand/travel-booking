
import LangCollapse from "./langCollapse";
import LocationCollapse from "./locationCollapse";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCollapse } from '../../slice/collapseSlice';

const Collapsable = () => {

const openCollapse = useSelector((state) => state.collapse.openCollapse);
const dispatch = useDispatch();


const handleToggle = (type) => {
  dispatch(toggleCollapse(type));
};

  return (
    <div className="w-screen flex items-center justify-around gap-4 relative">
      <div className="absolute left-1/2 -translate-x-full top-1/2">
        <LangCollapse
          collapse={openCollapse === "lang"}
          onToggle={() => handleToggle("lang")}
        />
        
      </div>
      <div className="absolute left-1/2 translate-x-0  top-1/2">
        <LocationCollapse
          collapse={openCollapse === "location"}
          onToggle={() => handleToggle("location")}
        />
      </div>
    </div>
  );
};

export default Collapsable;