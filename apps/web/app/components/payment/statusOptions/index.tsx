import React, { useEffect } from "react";
import styles from "./index.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const PaymentStatusOption = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div className={styles.main}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", border: "none" }}>
          <Tabs
            // disable the tab indicator because it doesn't work well with wrapped container
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              label={
                <span>
                  All{" "}
                  {value === 0 ? (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "black",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {4}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "black",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {4}
                    </span>
                  )}
                </span>
              }
            />
            <Tab
              label={
                <span>
                  pending{" "}
                  {value === 1 ? (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#FF9933",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {6}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#FFB233",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {6}
                    </span>
                  )}
                </span>
              }
            />
            <Tab
              label={
                <span>
                  completed{" "}
                  {value === 2 ? (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#4AB421",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {4}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#65F12F",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {4}
                    </span>
                  )}
                </span>
              }
            />
            <Tab
              label={
                <span>
                  cancelled{" "}
                  {value === 3 ? (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#F12F55",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {8}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#F12F93",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {8}
                    </span>
                  )}
                </span>
              }
            />
            <Tab
              label={
                <span>
                  refunded{" "}
                  {value === 3 ? (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#7E7B7B",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {8}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "white",
                        fontSize: "16px",
                        background: "#C9C4C4",
                        borderRadius: "10px",
                        padding: 8,
                      }}
                    >
                      {8}
                    </span>
                  )}
                </span>
              }
            />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};
