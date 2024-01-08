import "./first.css"

import TabMaker from "./tabMaker.js";
import PropTypes from "prop-types";
import { useState } from "react";

const tabs = [
  {
    id: 0,
    label:
      "Addresses can be found in the Our stores section. In the absence of goods at the store (where the pickup takes place): the order is completed at the pickup point within two to seven business days (since warehouses can be located in different parts of Ukraine). You can check the availability of goods in the store directly in the card of the product you are planning to order.",
    name: "Pickup",
  },
  {
    id: 1,
    label:
      "When ordering from 2000 UAH - delivery to any branch is free, otherwise it is paid by the Client. We send all orders within Ukraine by Nova Poshta. For convenience, you can view a map of the branches of this carrier and choose the nearest warehouse, right when making your purchase in our store. Delivery time: delivery of the order is carried out from two to seven working days (since warehouses can be located in different parts of Ukraine).",
    name: "Nova Poshta branches",
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
    name: "How can I make a payment?",
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
