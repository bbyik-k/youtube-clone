import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    console.log(`handle onCLick`);
    const value = inputRef.current.value;
    // console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/favicon.ico" alt="logo" />
        <h1 className={styles.title}>Iktube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
