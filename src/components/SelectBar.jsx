import { Pane, Select } from "evergreen-ui";
import React from "react";

const SelectBar = ({filterBy, setFilterBy}) => {
  return (
    <Pane>

    <Select value={filterBy} onChange={(event) => setFilterBy(event.target.value)}>
      <option value="Gender">Gender</option>
      <option value="Gender">Gender</option>
      <option value="Gender">Gender</option>
      <option value="PaymentMethod">Payment Method</option>
      <option value="CreditCardType">Credit Card Type</option>
    </Select>
    </Pane>
  );
};

export default SelectBar;
