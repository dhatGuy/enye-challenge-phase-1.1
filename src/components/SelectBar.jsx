import { Select } from "evergreen-ui";
import React from "react";

const SelectBar = ({filterBy, setFilterBy}) => {
  return (
    <Select value={filterBy} onChange={(event) => setFilterBy(event.target.value)}>
      <option value="FirstName" defaultValue>
        Firstname
      </option>
      <option value="Gender">Gender</option>
      <option value="LastName">Lastname</option>
      <option value="UserName">Username</option>
      <option value="PaymentMethod">Payment Method</option>
      <option value="CreditCardType">Credit Card Type</option>
    </Select>
  );
};

export default SelectBar;
