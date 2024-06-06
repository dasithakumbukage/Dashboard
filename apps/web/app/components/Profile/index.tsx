import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Profile = () => {
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>Profile</h3>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <div className={styles.imageCard}>
            <Card sx={{ pt: 10, pb: 5, px: 3 }}>
              <div
                className={styles.upperText}
                style={{ background: "#97F094" }}
              >
                Active
              </div>

              <Box sx={{ mb: 5 }}>
                {/* <RHFUploadAvatar
                  name="avatarUrl"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  helperText={
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 3,
                        mx: "auto",
                        display: "block",
                        textAlign: "center",
                        color: "text.disabled",
                      }}
                    >
                      Allowed *.jpeg, *.jpg, *.png, *.gif
                      <br /> max size of {fData(3145728)}
                    </Typography>
                  }
                /> */}

                <div className={styles.imageDiv}>
                  <Image
                    className={styles.imageIcon}
                    src="https://meththa-sample.s3.us-west-1.amazonaws.com/profile/profile-image.jpg"
                    width={220}
                    height={220}
                    alt=""
                  />
                </div>
              </Box>

              {/* {currentUser && ( */}
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Switch
                  // {...field}
                  // checked={field.value !== "active"}
                  // onChange={(event) =>
                  //   field.onChange(
                  //     event.target.checked ? "banned" : "active"
                  //   )
                  // }
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Banned
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Apply disable account
                    </Typography>
                  </>
                }
                sx={{
                  mx: 0,
                  mb: 3,
                  width: 1,
                  justifyContent: "space-between",
                }}
              />
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Switch
                  // {...field}
                  // checked={field.value !== "active"}
                  // onChange={(event) =>
                  //   field.onChange(
                  //     event.target.checked ? "banned" : "active"
                  //   )
                  // }
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Deactivate
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Apply disable account
                    </Typography>
                  </>
                }
                sx={{
                  mx: 0,
                  mb: 3,
                  width: 1,
                  justifyContent: "space-between",
                }}
              />
              {/* )} */}

              {/* <RHFSwitch
                name="isVerified"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Email Verified
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Disabling this will automatically send the user a
                      verification email
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: "space-between" }}
              /> */}

              {/* {currentUser && ( */}
              <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                <Button variant="contained" color="error">
                  Delete User
                </Button>
              </Stack>
              {/* )} */}
            </Card>
          </div>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              }}
            >
              <TextField
                value="Lucian Obrien"
                name="name"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                value="ashlynn_ohara62@gmail.com"
                name="email"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                value="904-966-2836"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
              />

              <TextField
                value="Sri Lanka"
                name="phoneNumber"
                label="Country"
                variant="outlined"
              />

              <TextField
                value="Virginia"
                name="State"
                label="State"
                variant="outlined"
              />
              <TextField
                value="Rancho Cordova"
                name="city"
                label="City"
                variant="outlined"
              />
              <TextField
                value="908 Jack Locks"
                name="address"
                label="Address"
                variant="outlined"
              />
              <TextField
                value="85807"
                name="zipCode"
                label="Zip/Code"
                variant="outlined"
              />
              <TextField
                value="Gleichner, Mueller and Tromp"
                name="company"
                label="Company"
                variant="outlined"
              />
              <TextField
                value="Data Analyst"
                name="role"
                label="Role"
                variant="outlined"
              />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="outlined"
                // loading={isSubmitting}
              >
                {/* {!currentUser ? "Create User" : "Save Changes"} */}
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
