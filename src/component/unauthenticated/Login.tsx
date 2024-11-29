import React from "react";
import {
  Grid2,
  Grow,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  LoginModel,
  LoginSchema,
} from "../../model/unAuthenticated/LoginSchema";
import { useFormik } from "formik";
import { StTextField } from "../styled/StTextField";
import { StButton } from "../styled/StButton";
import { StSelect } from "../styled/StSelect";
import SwipeableViews from "react-swipeable-views";
import EditIcon from "@mui/icons-material/Edit";
import useFetch from "../../customHooks/useFetch";
import ApiMethods from "../../model/enum/ApiMethods";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { fetchData, loading } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = (values: LoginModel) => {
    const phoneNumber = values.CountryCode + values.Mobile;
    if (values.FormIndex === 1) {
      VerifyOtp(values.Mobile, values.Otp);
    } else if (values.FormIndex === 0) {
      sendOtp(phoneNumber);
    }
  };

  const formik = useFormik({
    initialValues: LoginSchema.getDefault() as LoginModel,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  const changeToOtpForm = () => {
    formik.setFieldTouched("Otp", false);
    formik.setFieldValue("FormIndex", 1);
  };

  const changeToMobileForm = () => {
    formik.setFieldValue("FormIndex", 0);
  };

  const sendOtp = async (mobile: string) => {
    const requestBody: { mobile: string } = {
      mobile: mobile,
    };
    const result: any = await fetchData(
      "/sendOtp",
      ApiMethods.post,
      requestBody
    );
    if (result.success) {
      changeToOtpForm();
    } else {
      alert(result.message);
    }
  };

  const VerifyOtp = async (mobile: string, otp: string) => {
    const requestBody: { mobile: string; otp: string } = {
      mobile: mobile,
      otp: otp,
    };
    const result: any = await fetchData(
      "/verifyOtp",
      ApiMethods.post,
      requestBody
    );
    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <Grow in={true} timeout={1500}>
      <Paper
        elevation={2}
        sx={{
          m: 2,
          p: 2,
          width: { xs: "100%", sm: "50%", md: "30%" },
          borderRadius: "20px",
        }}
      >
        <form id="loginForm" onSubmit={formik.handleSubmit} noValidate>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12 }}>
              <SwipeableViews
                index={formik.values.FormIndex}
                containerStyle={{ alignItems: "center" }}
              >
                <Grid2 container spacing={1}>
                  <Grid2 size={{ xs: 3, md: 2.5 }}>
                    <StSelect
                      disabled
                      name="CountryCode"
                      value={formik.values.CountryCode}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={"+91"}>+91</MenuItem>
                    </StSelect>
                  </Grid2>
                  <Grid2 size={{ xs: 9, md: 9.5 }}>
                    <StTextField
                      required
                      fullWidth
                      placeholder="Mobile"
                      name="Mobile"
                      value={formik.values.Mobile}
                      onChange={formik.handleChange}
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Delete" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      error={
                        formik.touched.Mobile && Boolean(formik.errors.Mobile)
                      }
                      helperText={
                        formik.touched.Mobile &&
                        (formik.errors.Mobile as string)
                      }
                    />
                  </Grid2>
                </Grid2>
                <React.Fragment>
                  <Grid2 container spacing={1} mb={2}>
                    <Grid2 size={{ xs: 3, md: 2.5 }}>
                      <StSelect
                        disabled
                        name="CountryCode"
                        value={formik.values.CountryCode}
                        onChange={formik.handleChange}
                      >
                        <MenuItem value={"+91"}>+91</MenuItem>
                      </StSelect>
                    </Grid2>
                    <Grid2 size={{ xs: 9, md: 9.5 }}>
                      <StTextField
                        required
                        fullWidth
                        placeholder="Mobile"
                        name="Mobile"
                        value={formik.values.Mobile}
                        onChange={formik.handleChange}
                        slotProps={{
                          input: {
                            readOnly: true,
                            endAdornment: (
                              <InputAdornment
                                sx={{
                                  cursor: "pointer",
                                }}
                                position="end"
                              >
                                <IconButton onClick={changeToMobileForm}>
                                  <EditIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={1}>
                    <Grid2 size={{ xs: 12 }}>
                      <StTextField
                        required
                        fullWidth
                        placeholder="Otp"
                        name="Otp"
                        value={formik.values.Otp}
                        onChange={formik.handleChange}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Delete" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight"
                          ) {
                            e.preventDefault();
                          }
                        }}
                        error={formik.touched.Otp && Boolean(formik.errors.Otp)}
                        helperText={
                          formik.touched.Otp && (formik.errors.Otp as string)
                        }
                      />
                    </Grid2>
                  </Grid2>
                </React.Fragment>
              </SwipeableViews>
            </Grid2>
            <Grid2 size={{ xs: 12 }} textAlign={"center"}>
              <StButton form="loginForm" type="submit" disabled={loading}>
                {"Submit"}
              </StButton>
            </Grid2>
          </Grid2>
        </form>
      </Paper>
    </Grow>
  );
};

export default Login;
