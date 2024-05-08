import React, { useMemo, useState, useEffect, useRef } from "react";
import cx from "classnames";

import UserCard from "../components/userCard/UserCard";
import { getFilteredData } from "../helpers";

import styles from "./searchInput.module.scss";
import EmptyCard from "../components/emptyCard/EmptyCard";

const SearchInput = ({ userData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [focused, setfocused] = useState(-1);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current && focused !== -1 && !isMouseEnter) {
      const itemHeight =
        listRef.current.querySelector("#userCard").offsetHeight;
      const scrollOffset = focused * itemHeight;
      listRef.current.scrollTop = scrollOffset;
    }
  }, [focused]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") setFilteredData([]);
    else {
      const data = getFilteredData(value, userData);
      setFilteredData(data);
      setfocused(-1);
    }
  };

  const handleKeyChange = (e) => {
    if (e.code === "ArrowDown") {
      e.preventDefault();
      if (focused === filteredData.length - 1) setfocused(-1);
      else {
        setfocused((prev) => prev + 1);
      }
      setIsMouseEnter(false);
    }
    if (e.code === "ArrowUp") {
      e.preventDefault();
      if (focused === -1) setfocused(filteredData.length - 1);
      else {
        setfocused((prev) => prev - 1);
      }
      setIsMouseEnter(false);
    }
  };

  const handleMouseEnter = (e, index) => {
    setIsMouseEnter(true);
    setfocused(index);
  };

  const renderCards = useMemo(() => {
    return filteredData.map((data, index) => {
      return (
        <div
          onMouseEnter={(e) => handleMouseEnter(e, index)}
          key={data?.id}
          className={cx(styles.userCard, {
            [styles.focus]: focused === index,
          })}
          id="userCard"
        >
          <UserCard cardData={data} searchValue={searchValue} />
        </div>
      );
    });
  }, [filteredData, searchValue, focused]);

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search users by ID, address, name..."
          onKeyDown={handleKeyChange}
        />
      </div>
      {filteredData.length ? (
        <div className={styles.card} ref={listRef}>
          {renderCards}
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};
export default SearchInput;
