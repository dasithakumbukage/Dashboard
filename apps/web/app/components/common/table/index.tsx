import * as React from "react";
import styles from "./index.module.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";

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
    <div className={styles.main}>
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
      <div className={styles.table}>
        <DataGrid
          rows={filterRows(data)}
          columns={feilds.map((field: any) => ({
            field,
            headerName: field,
            width: 150,
          }))}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[6]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
