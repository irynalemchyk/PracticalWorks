import "./tab-maker.css";
import PropTypes from "prop-types";

const TabMaker = ({ label, name, onChange, id, activeIndex }) => {
  return (
    <div className="wrapper-small">
      <div onClick={() => onChange(id)} className="divInside">
      <button style={{ marginRight: '8px' }}>X</button>
        {name}
      </div>
     {id === activeIndex ? <span>{label}</span> : ""}
    </div>
  );
};

export default TabMaker;

TabMaker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.number,
  activeIndex: PropTypes.number
};
