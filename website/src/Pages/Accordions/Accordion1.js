import "./first.css"

import TabMaker from "./tabMaker.js";
import PropTypes from "prop-types";
import { useState } from "react";

const tabs = [
  {
    id: 0,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "How do I order?",
  },
  {
    id: 1,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "How can I make a payment?",
  },
  {
    id: 2,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "How much time does it take to receive the order?",
  },
  {
    id: 3,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "Can I resell the products?",
  },
  {
    id: 4,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "How much time does it take to receive the order?",
  },
];

const FirstComp = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  function onChangeStatus(id) {
    setActiveIndex(id)
  }

  return (
    <div className="wrapper">
      <div>
        {tabs.map((props) => (
          <TabMaker activeIndex={activeIndex} onChange={onChangeStatus} label={props.label} name={props.name} id={props.id} key={props.id} />
        ))}
      </div>
    </div>
  );
};

export default FirstComp;

FirstComp.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
}
