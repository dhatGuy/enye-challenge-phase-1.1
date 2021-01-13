import { Pane, SearchInput } from "evergreen-ui";
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Pane>
      <SearchInput
        autoFocus
        placeholder="Search name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        height={40}
        marginBottom={10}
      />
    </Pane>
  );
};

export default SearchBar;
