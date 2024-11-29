import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background:
          "linear-gradient(135deg, #7f00ff, #e100ff, #ff0080, #00dbde)",
        overflow: "hidden",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
