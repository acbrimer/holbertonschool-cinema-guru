import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./general.css";

const Input = (props) => {
  const { title, setTitle } = props;

  return (
    <div className="input-searchbar">
      <input
        className="search-input"
        id="input_searchbar"
        type="text"
        placeholder="Search Movies"
      />
      <label className="input-searchbar-icon" for="searchbar">
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </div>
  );
};

Input.propTypes = {
  // Search title
  title: PropTypes.string,
  // Set search input
  setTitle: PropTypes.func,
};

export default Input;
