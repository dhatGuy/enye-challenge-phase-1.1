import { Pane, Spinner } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";

const Home = () => {
  const [profiles, setProfiles] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("FirstName");
  // const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((res) => res.json())
      .then((res) => setProfiles(res.records.profiles))
      .catch((err) => console.log(err));
  }, []);

  if (!profiles) {
    return (
      <Pane
        height={700}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size={70} />
      </Pane>
    );
  }
  return (
    <Pane>

    <Pane>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SelectBar filterBy={filterBy} setFilterBy={setFilterBy} />
      {profiles
        .filter((profile) =>
        profile[filterBy].toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((profile) => (
          <Profile profile={profile} />
          ))}
    </Pane>
    
          </Pane>
  );
};

export default Home;
