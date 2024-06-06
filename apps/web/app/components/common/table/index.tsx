import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CiSearch } from "react-icons/ci";
import styles from "./index.module.css";

export default function TableWithFields({ feilds, data }: any) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filterRows = (rows: any) => {
    return rows.filter((row: any) =>
      feilds.some((field: any) =>
        row[field].toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className={styles.search}>
        <div className={styles.saerchOption}>
          <CiSearch className={styles.searchIcon} />
          <div className={styles.searchText}>
            <input
              className={styles.searchInput}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              style={{ marginBottom: 10 }}
            />
          </div>
        </div>
      </div>
      <DataGrid
        rows={filterRows(data)}
        columns={feilds.map((field: any) => ({
          field,
          headerName: field,
          width: 150,
        }))}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}
