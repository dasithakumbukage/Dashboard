import React from "react";
import styles from "./index.module.css";
import { CiSearch } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { CiExport } from "react-icons/ci";

export const OptionBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <CiSearch className={styles.searchIcon} />
        <div className={styles.searchText}>search</div>
      </div>
      {/* <div className={styles.rightSide}>
        <div className={styles.columnDiv1}>
          <IoEyeOutline className={styles.icons} />
          <h4 className={styles.text}>Columns</h4>
        </div>
        <div className={styles.columnDiv2}>
          <CiFilter className={styles.icons} />
          <h4 className={styles.text}>Filters</h4>
        </div>
        <div className={styles.columnDiv3}>
          <CiExport className={styles.icons} />
          <h4 className={styles.text}>Export</h4>
        </div>
      </div> */}
    </div>
  );
};
