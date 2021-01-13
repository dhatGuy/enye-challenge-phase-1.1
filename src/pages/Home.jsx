import { Pane, Spinner } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import "../components/Profile.css";
import "../components/Pagination.css";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [profiles, setProfiles] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("FirstName");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((res) => res.json())
      .then((res) => setProfiles(res.records.profiles))
      .catch((err) => console.log(err));
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * 20;

  const pageCount = Math.ceil(profiles?.length / 20);

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
  
  const filteredProfiles = profiles
    // .slice(offset, offset + 20)
    // eslint-disable-next-line array-callback-return
    .filter((profile) => {
      if (searchTerm.trim() === " ") {
        return profile;
      } else if (
        profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.LastName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return profile;
      }
    });

  return (
    <Pane>
      <Pane>
        <Pane display="flex" justifyContent="center" alignItems="center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SelectBar filterBy={filterBy} setFilterBy={setFilterBy} />
        </Pane>
        <Pane className="grid">
          {filteredProfiles.slice(offset, offset + 20).map((profile) => (
            <Profile profile={profile} />
          ))}
        </Pane>
      </Pane>
      <Pane display="flex" justifyContent="flex-end" marginRight={10}>
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Pane>
    </Pane>
  );
};

export default Home;
